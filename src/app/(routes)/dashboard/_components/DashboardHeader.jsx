"use client";
import { Input } from "../../../../components/ui/input";
import { BellPlus, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";

import React, { useEffect, useState } from "react";
import Image from "next/image";

function DashboardHeader() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      const dateTimeString = now.toLocaleDateString(undefined, options);
      setCurrentDateTime(dateTimeString);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[6vh] pt-5 mb-4 pb-6">
      <div className="px-10  flex gap-10  justify-between items-center ">
        <Input placeholder="Search" className="max-w-md " />

        <div className="flex items-center gap-4">
          <div className="text-sky-700">{currentDateTime}</div>
          <div className="rounded-full h-fit w-fit p-2 border border-slate-200">
            <BellPlus className="text-sky-800" />
          </div>
          <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center px-3 cursor-pointer">
            <Image src="/user.png" alt="user" height={40} width={40} />
            <h2 className="ml-2 flex items-center text-md font-semibold text-gray-800">
              User <ChevronDown className="h-5 w-5" />
            </h2>{" "}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default DashboardHeader;
