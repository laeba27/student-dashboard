"use client";
import React from "react";
import {
  LaptopMinimal,
  CalendarDays,
  ClipboardList,
  BookOpenCheck,
  School,
  MessageCircle,
  Settings,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
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
      icon: BookOpenCheck,
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
      icon: MessageCircle,
    },
  ];

  const path = usePathname();
  const [activepath, setactivepath] = useState(path);
  useEffect(() => {
    path && setactivepath(path);
  }, [path]);

  return (
    <div className="p-5 py-2 h-screen shadow-xl rounded-3xl ">
      <div className="flex justify-center">
        <Link href={"/dashboard"}>
          <Image
            className=""
            src="/logo2.png"
            width={500}
            height={500}
            alt="logo"
          />
        </Link>
      </div>
     
      <div className="flex flex-col justify-between h-[85%] item-center">
        <div className=" flex flex-col gap-5">
          {menu.map((item, index) => (
            <Link key={index} href={item.path}>
              <Button
                variant="ghost"
                size="sm"
                className="w-full  flex gap-2 
                        justify-start border border-white hover:border-sky-600
                        hover:bg-blue-200
                        hover:text-sky-800
                        font-normal
                        text-lg"
              >
                <item.icon className="text-sky-600" /> {item.name}
              </Button>
            </Link>
          ))}
        </div>

        <div className=" flex py-5 flex-col gap-5">
          <Link href="/setting">
            <div className="flex gap-2 cursor-pointer">
              <Button
                variant="ghost"
                size="sm"
                className="w-full  flex gap-2 
                        justify-start border border-white hover:border-blue-600
                        hover:bg-blue-100
                        hover:text-blue-800
                        font-normal
                        text-lg"
              >
                <Settings />
                <h2 className="text-lg">Setting</h2>
              </Button>
            </div>
          </Link>

          <div className="flex gap-3 cursor-pointer">
            <LogOut className="text-orange-500" />
            <h2 className="text-lg text-orange-500">Logout</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
