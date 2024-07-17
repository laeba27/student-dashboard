"use client";
import React, { useState, useEffect } from "react";
import {
  LaptopMinimal,
  CalendarDays,
  ClipboardList,
  BookOpenCheck,
  School,
  MessageCircle,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "../../../../components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const path = usePathname();
  const [activePath, setActivePath] = useState(path);

  useEffect(() => {
    path && setActivePath(path);
  }, [path]);

  const menu = [
    { id: 1, name: "Dashboard", path: "/dashboard", icon: LaptopMinimal },
    { id: 2, name: "Calendar", path: "/dashboard/calender", icon: CalendarDays },
    { id: 3, name: "Task", path: "/dashboard/task", icon: ClipboardList },
    { id: 4, name: "Lesson", path: "/dashboard/lesson", icon: BookOpenCheck },
    { id: 5, name: "Resume Builder", path: "/dashboard/resume", icon: School },
    { id: 6, name: "Inbox", path: "/dashboard/inbox", icon: MessageCircle },
  ];

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const sidebarVariants = {
    expanded: { width: "240px" },
    collapsed: { width: "80px" },
  };

  return (
    <motion.div
      className="relative h-screen shadow-xl bg-blue-50 overflow-hidden"
      initial="expanded"
      animate={isCollapsed ? "collapsed" : "expanded"}
      variants={sidebarVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="p-5 py-2 h-full flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/dashboard">
                  <Image src="/logo2.png" width={120} height={40} alt="logo" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="rounded-full hover:bg-gray-100"
          >
            {isCollapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
          </Button>
        </div>

        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-2">
            {menu.map((item) => (
              <Link key={item.id} href={item.path}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`w-full flex gap-3 justify-start items-center rounded-lg transition-all duration-200 ${
                    activePath === item.path
                      ? "bg-blue-100 text-blue-700"
                      : "hover:bg-blue-200"
                  }`}
                >
                  <item.icon size={24} />
                  <AnimatePresence>
                    {!isCollapsed && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2 }}
                        className="whitespace-nowrap overflow-hidden"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2 mt-auto">
            <Link href="/setting">
              <Button
                variant="ghost"
                size="sm"
                className="w-full flex gap-3 justify-start items-center rounded-lg hover:bg-blue-200"
              >
                <Settings size={24} />
                <AnimatePresence>
                  {!isCollapsed && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2 }}
                      className="whitespace-nowrap overflow-hidden"
                    >
                      Settings
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="w-full flex gap-3 justify-start items-center rounded-lg text-red-500 hover:bg-red-50 hover:text-red-700"
            >
              <LogOut size={24} />
              <AnimatePresence>
                {!isCollapsed && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                    className="whitespace-nowrap overflow-hidden"
                  >
                    Logout
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Sidebar;