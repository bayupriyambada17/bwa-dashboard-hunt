import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { PartyPopper } from 'lucide-react';
import React, { FC } from 'react'

interface JobDetailProps {

}

const JobDetail: FC<JobDetailProps> = ({ }) => {
  return (
    <div>
      <div className='grid grid-cols-3 w-full gap-5'>
        <div className="col-span-2 space-y-10">
          <div>
            <div className='text-3xl font-semibold'>
              Job Description
            </div>
            <div className='text-gray-500 mt-2'>
              <p className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div>
            <div className='text-3xl font-semibold'>
              Responsibility
            </div>
            <div className='text-gray-500 mt-2'>
              <p className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div>
            <div className='text-3xl font-semibold'>
              Who You Are
            </div>
            <div className='text-gray-500 mt-2'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div>
            <div className='text-3xl font-semibold'>
              Nice To Have
            </div>
            <div className='text-gray-500 mt-2'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className='text-3xl font-semibold'>
            About this Role
          </div>
          <div className='bg-gray-100 p-3 text-center mt-4'>
            1 <span className='text-gray-500'>of 10 capacity </span>
            <Progress className='mt-3' value={10} />
          </div>
          <div className='mb-10 space-y-5 mt-4'>
            <div className='flex justify-between'>
              <div className='text-gray-500'>
                Apply Before
              </div>
              <div className='font-semibold'>
                12 Aug 2023
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='text-gray-500'>
                Job Posted On
              </div>
              <div className='font-semibold'>
                12 Aug 2023
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='text-gray-500'>
                Job Type
              </div>
              <div className='font-semibold'>
                Full-Time
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='text-gray-500'>
                Salary
              </div>
              <div className='font-semibold'>
                $100 - $1000 USD
              </div>
            </div>
          </div>

          <Separator />

          <div className='my-10'>
            <div className='text-3xl font-semibold mb-4'>
              Category
            </div>
            <div className='space-x-5'>
              <Badge>Design</Badge>
            </div>
          </div>
          <div className='my-10'>
            <div className='text-3xl font-semibold mb-4'>
              Required Skills
            </div>
            <div className='space-x-5'>
              {['HTML', 'CSS', 'JS'].map(
                (item, i) => (
                  <Badge key={item + i}>{item}</Badge>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <Separator className='my-8' />
      <div>
        <div className='text-3xl font-semibold'>Perks & Benefits</div>
        <div className='text-gray-500'>
          This job comes with several perks and benefits
        </div>
        <div className='grid grid-cols-4 gap-5 mt-9'>
          {[0, 1, 2].map((item: number) => (
            <div className="" key={item + 1}>
              <PartyPopper className='w-10 h-10 text-primary mb-6' />
              <div className='text-lg font-semibold mb-3'>
                Full HealthCare
              </div>
              <div className='text-gray-500'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, expedita.
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JobDetail;