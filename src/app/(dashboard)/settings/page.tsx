import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import OverviewForm from '@/components/form/OverviewForm';
import SocialMediaForm from '@/components/form/SocialMediaForm';
import TeamForm from '@/components/form/TeamsForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getServerSession } from 'next-auth';
import React, { FC } from 'react'
import prisma from '../../../../lib/prisma';

interface SettingsPageProps { }

async function getDetailCompany() {
  const session = await getServerSession(authOptions);
  const company = await prisma.company.findFirst({
    where: {
      id: session?.user.id,
    },
    include: {
      Companyoverview: true,
    },
  });

  return company;
}

const SettingsPage: FC<SettingsPageProps> = async ({ }) => {
  const company = await getDetailCompany();
  console.log(company);
  return (
    <div>
      <div className='font-semibold text-3xl mb-5'>Settings</div>
      <Tabs defaultValue="overview">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="socialLink">Social Link</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <OverviewForm detail={company?.Companyoverview[0]} />
        </TabsContent>
        <TabsContent value="socialLink">
          <SocialMediaForm />
        </TabsContent>
        <TabsContent value="teams">
          <TeamForm />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default SettingsPage;