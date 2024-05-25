import { Button } from '@/components/ui/button';
import { Building2, CalendarDaysIcon, Cog, Files, Home, LogOut, MessageCircle, UserCheck2 } from 'lucide-react';
import React, { FC } from 'react';

interface SidebarProps {

}

const Sidebar: FC<SidebarProps> = ({ }) => {
  return (
    <div className='pb-12 min-h-screen'>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="mb-2 px-4 text-lg font-semibold">
            <h2>
              Dashboard
            </h2>
          </div>
          <div className='space-y-3'>
            <Button variant={'ghost'} className='w-full justify-start rounded-md hover:text-primary'>
              <Home className='mr-2 h-4 w-4' />
              Home
            </Button>
            <Button variant={'ghost'} className='w-full justify-start rounded-md hover:text-primary'>
              <MessageCircle className='mr-2 h-4 w-4' />
              Message
            </Button>
            <Button variant={'ghost'} className='w-full justify-start rounded-md hover:text-primary'>
              <Building2 className='mr-2 h-4 w-4' />
              Company Profile
            </Button>
            <Button variant={'ghost'} className='w-full justify-start rounded-md hover:text-primary'>
              <UserCheck2 className='mr-2 h-4 w-4' />
              All Applicants
            </Button>
            <Button variant={'ghost'} className='w-full justify-start rounded-md hover:text-primary'>
              <Files className='mr-2 h-4 w-4' />
              Job Listing
            </Button>
            <Button variant={'ghost'} className='w-full justify-start rounded-md hover:text-primary'>
              <CalendarDaysIcon className='mr-2 h-4 w-4' />
              My Schedule
            </Button>
          </div>
        </div>
      </div>

      <div className='space-y-4 py-4'>
        <div className="px-3 py-2">
          <div className="mb-2 px-4 text-lg font-semibold">
            <h2>
              Settings
            </h2>
          </div>
          <div className='space-y-3'>
            <Button variant={'ghost'} className='w-full justify-start rounded-md hover:text-primary'>
              <Cog className='mr-2 h-4 w-4' />
              Settings
            </Button>
            <Button variant={'ghost'} className='w-full justify-start rounded-md text-red-400 hover:text-red-500'>
              <LogOut className='mr-2 h-4 w-4' />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;