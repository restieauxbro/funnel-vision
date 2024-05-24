"use client";
import React from "react";
import { MessageSquare } from "lucide-react";
import { cn, formatDate } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";

const HistoryContent = ({
  threads,
}: {
  threads:
    | {
        created_at: any;
        thread_id: any;
        thread_name: any;
      }[]
    | null;
}) => {
  const searchParams = useSearchParams();
  const threadParam = searchParams.get("thread");
  return (
    <div className="grid text-sm">
      <Input placeholder="Search history" className="mb-4" />
      <hr className="mx-2" />

      {threads
        ?.filter((x) => x.thread_name !== "New chat")
        .map((thread) => {
          const isActive = thread.thread_id === threadParam;
          return (
            <motion.div
              //layout
              key={thread.thread_id}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              animate={{ opacity: 1 }}
              className="bg-background max-w-[16rem] text-slate-700"
            >
              <Link href={`/chat?thread=${thread.thread_id}`} className="">
                <div className="py-3 px-2 overflow-hidden relative">
                  <div className="font-medium flex gap-2 items-center">
                    <div className={cn("aspect-square", isActive && 'text-blue-500')}>
                      <MessageSquare size={12} strokeWidth={3} />
                    </div>{" "}
                    <div className={cn("whitespace-nowrap", isActive && 'text-blue-500')}>{thread.thread_name} </div>
                  </div>
                  <div className="text-[0.7rem] font-light text-slate-500">
                    {formatDate(new Date(thread.created_at))}
                  </div>
                  <div className="absolute top-0 right-0 h-full w-6 bg-gradient-to-r from-transparent to-background"></div>
                </div>
              </Link>
              <hr className="mx-2" />
            </motion.div>
          );
        })}
    </div>
  );
};

export default HistoryContent;
