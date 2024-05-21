"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { Bot, Clock, MessageSquare, SidebarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { storeSidebarPref } from "./actions";

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

  return (
    <div className="sticky top-0 h-lvh bg-slate-100 border-r p-4 pl-4">
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
          <Link href="/">
            <div className="aspect-square w-10 rounded-md bg-background grid place-items-center border border-slate-300 shadow">
              <Clock size={20} />
            </div>
          </Link>
          <Link href="/">
            <div className="aspect-square w-10 rounded-md bg-background grid place-items-center border border-slate-300 shadow">
              <Bot size={20} />
            </div>
          </Link>
          <Link href="/">
            <div className="aspect-square w-10 rounded-md bg-background grid place-items-center border border-slate-300 shadow">
              <Clock size={20} />
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
              className="p-4 ml-4 bg-background rounded-lg border shadow h-full overflow-y-auto w-72"
            >
              <div className="grid text-sm">
                <Input placeholder="Search history" className="mb-4" />
                <hr className="mx-2" />
                <LayoutGroup>
                  <AnimatePresence>
                    {threads
                      ?.filter((x) => x.thread_name !== "New chat")
                      .map((thread) => (
                        <motion.div
                          layout
                          key={thread.thread_id}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                          animate={{ opacity: 1 }}
                          className="bg-background max-w-[16rem] text-slate-700"
                        >
                          <Link
                            href={`/?thread=${thread.thread_id}`}
                            className=""
                          >
                            <div className="py-3 px-2 overflow-hidden relative">
                              <div className="font-medium flex gap-2 items-center">
                                <div className="aspect-square">
                                  <MessageSquare size={12} strokeWidth={3} />
                                </div>{" "}
                                <div className="whitespace-nowrap">
                                  {thread.thread_name}{" "}
                                </div>
                              </div>
                              <div className="text-[0.7rem] font-light text-slate-500">
                                {new Date(thread.created_at).toLocaleString(
                                  "en-AU",
                                  {
                                    weekday: "long",
                                    month: "long",
                                    day: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  }
                                )}
                              </div>
                              <div className="absolute top-0 right-0 h-full w-6 bg-gradient-to-r from-transparent to-background"></div>
                            </div>
                          </Link>
                          <hr className="mx-2" />
                        </motion.div>
                      ))}
                  </AnimatePresence>
                </LayoutGroup>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
