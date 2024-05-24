"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SidebarIcon, Clock, Bot } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { storeSidebarPref } from "./actions";
import { useSearchParams } from "next/navigation";

const SidebarLayoutClient = ({
  openPreference,
  children,
}: {
  openPreference: boolean;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(openPreference);
  const changeOpenState = async (preference: boolean) => {
    setOpen(preference);
    await storeSidebarPref(preference);
  };
  const searchParamsStr = useSearchParams().toString();
  return (
    <>
      <div className="flex gap-4 mb-4 justify-between flex-row-reverse">
        <Button
          className="aspect-square p-2 bg-slate-100 border border-slate-300 shadow"
          variant={"ghost"}
          onClick={async () => {
            await changeOpenState(!open);
          }}
        >
          <SidebarIcon size={18} />
        </Button>
      </div>
      <div className="flex">
        <div className="border-slate-300 pr-0 flex flex-col gap-4">
          <Link href={`/chat?${searchParamsStr}`} scroll={false}>
            <div className="aspect-square w-10 rounded-md bg-background grid place-items-center border border-slate-300 shadow">
              <Clock size={20} />
            </div>
          </Link>
          <Link href={`/chat/models?${searchParamsStr}`} scroll={false}>
            <div className="aspect-square w-10 rounded-md bg-background grid place-items-center border border-slate-300 shadow">
              <Bot size={20} />
            </div>
          </Link>
        </div>
        <div>
          <motion.div
            initial={{ width: openPreference ? "19rem" : 0 }}
            animate={{ width: open ? "19rem" : 0 }}
            className="h-[calc(100lvh-5.5rem)] w-[20rem] overflow-hidden pb-1"
          >
            <motion.div
              layoutScroll
              className="p-4 ml-4 bg-background rounded-lg border shadow overflow-y-auto h-full w-72"
            >
              {children}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SidebarLayoutClient;
