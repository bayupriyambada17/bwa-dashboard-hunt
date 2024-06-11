"use client"
import { Button } from '@/components/ui/button';
import { Sign } from 'crypto';
import { Building2, CalendarDaysIcon, Cog, Files, Home, LogOut, MessageCircle, UserCheck2 } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react';

interface SidebarProps { }

const Sidebar: FC<SidebarProps> = ({ }) => {
  const router = useRouter();
  const [activePath, setActivePath] = useState<string>('');

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const handleNavigation = (path: string) => {
    router.push(path);
    setActivePath(path);
  };
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
            <Button onClick={() => handleNavigation('/')} variant={'ghost'} className={`w-full justify-start rounded-md ${activePath === '/' ? 'menu-active' : 'hover:text-primary'}`}>
              <Home className='mr-2 h-4 w-4' />
              Home
            </Button>
            <Button onClick={() => handleNavigation('/message')} variant={'ghost'} className={`w-full justify-start rounded-md ${activePath === '/message' ? 'menu-active' : 'hover:text-primary'}`}>
              <MessageCircle className='mr-2 h-4 w-4' />
              Message
            </Button>
            <Button onClick={() => handleNavigation('/company-profile')} variant={'ghost'} className={`w-full justify-start rounded-md ${activePath === '/company-profile' ? 'menu-active' : 'hover:text-primary'}`}>
              <Building2 className='mr-2 h-4 w-4' />
              Company Profile
            </Button>
            <Button onClick={() => handleNavigation('/all-applicants')} variant={'ghost'} className={`w-full justify-start rounded-md ${activePath === '/all-applicants' ? 'menu-active' : 'hover:text-primary'}`}>
              <UserCheck2 className='mr-2 h-4 w-4' />
              All Applicants
            </Button>
            <Button onClick={() => handleNavigation('/job-listings')} variant={'ghost'} className={`w-full justify-start rounded-md ${activePath === '/job-listings' ? 'menu-active' : 'hover:text-primary'}`}>
              <Files className='mr-2 h-4 w-4' />
              Job Listing
            </Button>
            <Button onClick={() => handleNavigation('/my-schedule')} variant={'ghost'} className={`w-full justify-start rounded-md ${activePath === '/my-schedule' ? 'menu-active' : 'hover:text-primary'}`}>
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
            <Button onClick={() => handleNavigation('/settings')} variant={'ghost'} className={`w-full justify-start rounded-md ${activePath === '/settings' ? 'font-semibold bg-primary hover:bg-none text-white' : 'hover:text-primary'}`}>
              <Cog className='mr-2 h-4 w-4' />
              Settings
            </Button>
            <Button onClick={() => signOut()} variant={'ghost'} className='w-full justify-start rounded-md text-red-400 hover:text-red-500'>
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
