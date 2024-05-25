import { Button } from '@/components/ui/button';
import React, { FC } from 'react';
type HeaderProps = {

};
export const Header: FC<HeaderProps> = ({ }) => {
  return (
    <div className='pb-3 mb-8 border-b border-border flex flex-row items-center justify-between'>
      <div>
        <div>Company</div>
        <div className='font-semibold'>Twitter</div>
      </div>

      <div>
        <Button className='rounded-none py-3 px-6'>
          Post A Job
        </Button>
      </div>
    </div>
  );
};