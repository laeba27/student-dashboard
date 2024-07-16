"use client"
import { Input } from '@/components/ui/input'
import { BellPlus } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import React, { useEffect, useState } from 'react';

function DashboardHeader() {
    const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      const dateTimeString = now.toLocaleDateString(undefined, options);
      setCurrentDateTime(dateTimeString);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
        <div className="p-10 flex gap-10  justify-between ">
     <Input placeholder="Search" className="max-w-md "/> 
     <div className='text-sky-700'>{currentDateTime}</div>
     <div className=''>
     <div className='rounded-full h-fit w-fit p-2 border border-slate-200'>
     <BellPlus className='text-sky-800' />
     </div>
     </div>
    </div>
    <div>
      
     </div>
    </div>
    
  )
}

export default DashboardHeader
