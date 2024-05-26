"use client"

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
type HeaderProps = {

};
export const Header: FC<HeaderProps> = ({ }) => {
  const router = useRouter();
  const postJobPage = () => router.push('/post-a-job');

  return (
    <div className='pb-3 mb-8 border-b border-border flex flex-row items-center justify-between'>
      <div>
        <div>Company</div>
        <div className='font-semibold'>Twitter</div>
      </div>

      <div>
        <Button onClick={postJobPage} className='rounded-none py-3 px-6'>
          Post A Job
        </Button>
      </div>
    </div>
  );
};