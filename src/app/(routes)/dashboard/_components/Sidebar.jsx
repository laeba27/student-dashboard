"use client"
import React from 'react'
import { LaptopMinimal , CalendarDays ,ClipboardList , BookOpenCheck , School ,MessageCircle  } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import  { useEffect, useState } from 'react'
import Image from 'next/image';
function Sidebar() {
    const menu = [
        {
          id: 1,
          name: "Dasboard",
          path: "/dashboard",
          icon: LaptopMinimal,
        },
        {
          id: 2,
          name: "Calender",
          path: "/dashboard/calender",
          icon: CalendarDays,
        },
        {
          id: 3,
          name: "Task",
          path: "/dashboard/task",
          icon: ClipboardList,
        },
        {
          id: 4,
          name: "Lesson",
          path: "/dashboard/lesson",
          icon: BookOpenCheck ,
        },
        {
            id: 4,
            name: "Examination",
            path: "/dashboard/examination",
            icon: School,
          },
          {
            id: 4,
            name: "Inbox",
            path: "/dashboard/inbox",
            icon: MessageCircle  ,
          },
      ];
    

      const path=usePathname();
  const [activepath, setactivepath] = useState(path)
  useEffect(() => {
    path&&setactivepath(path)
  }, [ path])


  return (
    <div className="p-5 py-14  ">
    <div className="flex justify-center">
      <Link href={'/dashboard'}>
      <Image src="/logo2.png" width={500} height={500} alt="logo" />
      </Link>
       
      </div>
      <div className="mt-5 flex flex-col gap-5">
        {menu.map((item, index) => (
          <Link key={index} href={item.path}>
            <Button
              variant="ghost"
              className="w-full flex gap-2 
                        justify-start
                        hover:bg-blue-100
                        font-normal
                        text-lg"
                        >
              <item.icon /> {item.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
