"use client"

import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
interface HeaderProps { };
export const Header: FC<HeaderProps> = ({ }) => {
  const router = useRouter();
  const { data: session } = useSession()
  console.log(session)

  const postJobPage = () => router.push('/post-a-job');

  return (
    <div className='pb-3 mb-8 border-b border-border flex flex-row items-center justify-between'>
      <div>
        <div>Company</div>
        <div className='font-semibold'>{session?.user.name}</div>
      </div>

      <div>
        <Button onClick={postJobPage} className='rounded-none py-3 px-6'>
          Post A Job
        </Button>
      </div>
    </div>
  );
};