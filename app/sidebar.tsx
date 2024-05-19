"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { MessageSquare, Plus, Speech } from "lucide-react";

const Sidebar = ({
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const newChat = Number(searchParams.get("new"));

  return (
    <div className="sticky top-0 h-lvh bg-slate-100 border-r p-4">
      <div className="p-6 px-4 bg-white rounded-lg border shadow h-[calc(100lvh-2rem)] w-[18rem] overflow-y-auto">
        <div className="grid text-sm truncate">
          <Button
            onClick={() => {
              router.push(`/?new=${newChat + 1}`);
              router.refresh();
            }}
            variant={"outline"}
            className="py-3 text-left w-full justify-start px-2 mb-4"
          >
            <div className="flex gap-2 items-center">
              <Plus size={16} strokeWidth={2.5} /> New chat
            </div>
          </Button>{" "}
          <hr className="mx-2" />
          <LayoutGroup>
            <AnimatePresence>
              {threads
                ?.filter((x) => x.thread_name !== "New chat")
                .map((thread) => (
                  <motion.div
                    layout
                    key={thread.thread_id}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    animate={{ opacity: 1 }}
                    className="bg-white"
                  >
                    <Link href={`/?thread=${thread.thread_id}`} className="">
                      <div className="py-3 px-2">
                        <div className="font-medium flex gap-2 items-center">
                          <MessageSquare size={12} strokeWidth={3} /> {thread.thread_name}
                        </div>
                        <div className="text-[0.7rem] font-light text-slate-500">
                          {new Date(thread.created_at).toLocaleString("en-AU", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                      </div>
                    </Link>
                    <hr className="mx-2" />
                  </motion.div>
                ))}
            </AnimatePresence>
          </LayoutGroup>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
