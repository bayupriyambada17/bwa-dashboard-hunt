"use client"

import { FieldInput } from "@/components/layouts/organisms/FieldInput";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { jobFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { JOBTYPES } from "@/constants";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SelectLabel } from "@radix-ui/react-select";
import InputSkills from "@/components/layouts/organisms/InputSkills";
import CKEditor from "@/components/layouts/organisms/CKEditor";
import InputBenefits from "@/components/layouts/organisms/InputBenefits";
import { Button } from "@/components/ui/button";
import TitleForm from "@/components/atoms/TitleForm";


import useSWR from 'swr';
import { fetcher } from "@/lib/utils";
import { CategoryJob } from "@prisma/client";
import { useSession } from "next-auth/react";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

interface PostJobPageProps { }

const PostJobPage: FC<PostJobPageProps> = ({ }) => {
  const { data, error, isLoading } = useSWR<CategoryJob[]>('/api/job/categories', fetcher);

  const { data: session } = useSession();
  const [editorLoaded, setEditorLoaded] = useState<boolean>(false);

  const form = useForm<z.infer<typeof jobFormSchema>>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      requiredSkills: []
    },
  })

  const router = useRouter();
  const { toast } = useToast();
  const onSubmit = async (val: z.infer<typeof jobFormSchema>) => {
    try {
      const body: any = {
        applicants: 0,
        benefits: val.benefits,
        categoryId: val.categoryId,
        companyId: session?.user.id!!,
        datePosted: moment().toDate(),
        description: val.jobDescription,
        dueDate: moment().add(1, "M").toDate(),
        jobType: val.jobType,
        needs: 20,
        niceToHaves: val.niceToHaves,
        requiredSkills: val.requiredSkills,
        responsibility: val.responsibility,
        roles: val.roles,
        salaryFrom: val.salaryFrom,
        salaryTo: val.salaryTo,
        whoYouAre: val.whoYouAre
      }

      await fetch('/api/job', {
        method: 'POST',
        headers: { "Content-Type": "applications/json" },
        body: JSON.stringify(body)
      });
      await router.push('/job-listings');
    } catch {
      toast({
        title: 'Error',
        description: 'Please try again'
      })
      console.log(error);
    }
  }

  useEffect(() => {
    setEditorLoaded(true);
  }, [])
  return (
    <div>
      <div className="inline-flex items-center gap-2 cursor-pointer hover:text-primary">
        <ArrowLeft className="h-8 w-8" />
        Post A Job
      </div>
      <div className="my-5">
        <TitleForm title="Basic Information" subTitle="List our yout top perks and benefits" />
      </div>
      <Separator />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-6 pt-6">
          <FieldInput title="Job Title" subTitle="What is the title of your job?">
            <FormField
              control={form.control}
              name="roles"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="e.g. Engineer" {...field} className="w-[450px]" />
                  </FormControl>
                  <FormDescription>
                    At least 80 characters
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>

          <FieldInput title="Job Type" subTitle="Select a job type">
            <FormField
              control={form.control}
              name="jobType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {JOBTYPES.map((item: string, i: number) => (
                        <FormItem key={item + i} className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value={item} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {item}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>

          <FieldInput title="Salary" subTitle="Select a salary range for your job">
            <div className="w-[450px] flex flex-row justify-between items-center">
              <FormField
                control={form.control}
                name="salaryFrom"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Rp. 1000000" {...field} className="w-full" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <span className="text-center">To</span>
              <FormField
                control={form.control}
                name="salaryTo"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Rp. 1000000" {...field} className="w-full" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </FieldInput>

          <FieldInput title="Categories" subTitle="Select a category for your job">
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-[450px]">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent >
                      <SelectGroup >
                        {data?.map((item: any) => (
                          <SelectItem key={item.id} value={item.id}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>

          <FieldInput title="Required Skills" subTitle="List your required skills">
            <InputSkills form={form} name="requiredSkills" label="Add Skills" />
          </FieldInput>

          <FieldInput
            title="Job Descriptions"
            subTitle="Job titles must be describe one position"
          >
            <CKEditor
              form={form}
              name="jobDescription"
              editorLoaded={editorLoaded}
            />
          </FieldInput>
          <FieldInput
            title="Responsibilities"
            subTitle="Outline the core responsibilities of the position"
          >
            <CKEditor
              form={form}
              name="responsibility"
              editorLoaded={editorLoaded}
            />
          </FieldInput>

          <FieldInput
            title="Who You Are"
            subTitle="Add your preferred candidates qualifications"
          >
            <CKEditor
              form={form}
              name="whoYouAre"
              editorLoaded={editorLoaded}
            />
          </FieldInput>

          <FieldInput
            title="Nice-To-Haves"
            subTitle="Add nice-to-have skills and qualifications for the role to encourage a more diverse set of candidates to apply"
          >
            <CKEditor
              form={form}
              name="niceToHaves"
              editorLoaded={editorLoaded}
            />
          </FieldInput>

          <FieldInput
            title="Perks and Benefits"
            subTitle="Encourage more people to apply by sharing the attractive rewards and benefits you offer your employees"
          >
            <InputBenefits form={form} />
          </FieldInput>

          <div className="flex justify-end">
            <Button size={'lg'}>Do a Review</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default PostJobPage;