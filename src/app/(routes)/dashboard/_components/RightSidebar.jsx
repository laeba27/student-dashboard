import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";

function RightSidebar() {
  return (
    <div className="p-8 ">
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
  );
}

export default RightSidebar;
