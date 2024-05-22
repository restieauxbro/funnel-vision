"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Clock, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { storeSidebarPref } from "./actions";
import { SideBarPanelButton } from "./side-bar-buttons";
import { useSearchParams, usePathname } from "next/navigation";
import { formatDate } from "@/lib/utils";
import { linkWithAddedParam } from "@/lib/url-handling";

const Sidebar = ({
  threads,
  openPreference,
}: {
  threads:
    | {
        created_at: any;
        thread_id: any;
        thread_name: any;
      }[]
    | null;
  openPreference: boolean;
}) => {
  const [open, setOpen] = useState(openPreference);
  const changeOpenState = async (preference: boolean) => {
    setOpen(preference);
    await storeSidebarPref(preference);
  };
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sidebarPanel = searchParams.get("sidebar");
  const generateLinkWithParam = (newParams: Record<string, string>) =>
    linkWithAddedParam({
      newParams,
      existingParams: searchParams,
      pathname,
    });

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="sticky top-0 h-lvh bg-slate-100 border-r p-4 pl-4">
      <div className="flex gap-4 mb-4 justify-between flex-row-reverse relative">
        <SideBarPanelButton {...{ changeOpenState, open }} />
      </div>
      <div className="flex">
        <div className="border-slate-300 pr-0 flex flex-col gap-4">
          {[
            {
              icon: <Clock size={20} />,
              text: "History",
              link: generateLinkWithParam({ sidebar: "history" }),
            },
            {
              icon: <Bot size={20} />,
              text: "Bots",
              link: generateLinkWithParam({ sidebar: "bots" }),
            },
            {
              icon: <Bot size={20} />,
              text: "Bongo",
              link: generateLinkWithParam({ sidebar: "bongo" }),
            },
          ].map(({ icon, text, link }) => (
            <Link href={link} key={text}>
              <TooltipProvider>
                <Tooltip delayDuration={100}>
                  <TooltipTrigger>
                    <div
                      className="aspect-square w-10 rounded-md bg-background grid place-items-center border border-slate-300 shadow"
                      onClick={async () => {
                        await changeOpenState(true);
                      }}
                    >
                      {icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="right">{text}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          ))}
        </div>
        <div>
          <motion.div
            initial={{ width: openPreference ? "19rem" : 0 }}
            animate={{ width: open ? "19rem" : 0 }}
            className="h-[calc(100lvh-5.5rem)] w-[20rem] overflow-hidden pb-1"
          >
            <AnimatePresence mode="wait">
              {sidebarContent({ str: sidebarPanel, threads, isClient })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const sidebarContent = ({
  str,
  threads,
  isClient,
}: {
  str: string | null;
  threads: Threads;
  isClient: boolean;
}) => {
  console.log(str);
  switch (str) {
    case "history": {
      return <HistoryContent {...{ threads, isClient }} />;
    }
    case "bots": {
      return <Panel {...{ isClient }}>Bots</Panel>;
    }
    default: {
      return <HistoryContent {...{ threads, isClient }} />;
    }
  }
};
type Threads =
  | {
      created_at: any;
      thread_id: any;
      thread_name: any;
    }[]
  | null;

const Panel = ({
  children,
  isClient,
}: {
  children: ReactNode;
  isClient: boolean;
}) => {
  return (
    <motion.div
      className="p-4 ml-4 bg-background rounded-lg border shadow overflow-y-auto h-full w-72"
      initial={{ opacity: isClient ? 0 : 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 5 } }}
    >
      {children}
    </motion.div>
  );
};

const HistoryContent = ({
  threads,
  isClient,
}: {
  threads: Threads;
  isClient: boolean;
}) => {
  return (
    <Panel {...{ isClient }} key={"history"}>
      <div className="grid text-sm">
        <Input placeholder="Search history" className="mb-4" />
        <hr className="mx-2" />
        {threads
          ?.filter((x) => x.thread_name !== "New chat")
          .map((thread) => (
            <motion.div
              //layout
              key={thread.thread_id}
              exit={{ opacity: 0, height: 0 }}
              className="bg-background max-w-[16rem] text-slate-700 overflow-hidden"
            >
              <Link href={`/?thread=${thread.thread_id}`} className="">
                <div className="py-3 px-2 overflow-hidden relative">
                  <div className="font-medium flex gap-2 items-center">
                    <div className="aspect-square opacity-80">
                      <MessageSquare size={12} strokeWidth={3} />
                    </div>{" "}
                    <div className="whitespace-nowrap">
                      {thread.thread_name}{" "}
                    </div>
                  </div>
                  <div className="text-[0.7rem] font-light text-slate-500">
                    {formatDate(new Date(thread.created_at))}
                  </div>
                  <div className="absolute top-0 right-0 h-full w-6 bg-gradient-to-r from-transparent to-background"></div>
                </div>
              </Link>
              <hr className="mx-2" />
            </motion.div>
          ))}
      </div>
    </Panel>
  );
};
