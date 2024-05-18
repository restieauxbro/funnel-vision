"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

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
  return (
    <div className="sticky top-0 h-lvh bg-slate-100 border-r p-4">
      <div className="p-6 px-4 bg-white rounded-lg border shadow h-[calc(100lvh-2rem)] w-[18rem]">
        <div className="grid text-sm">
          <Button
            onClick={() => {
              router.push("/");
              router.refresh();
            }}
            variant={"ghost"}
            className="py-3 text-left w-full justify-start px-2"
          >
            New chat
          </Button>{" "}
          <hr className="mx-2" />
          {threads
            ?.filter((x) => x.thread_name !== "New chat")
            .map((thread) => (
              <>
                <Link
                  href={`/?thread=${thread.thread_id}`}
                  key={thread.thread_id}
                  className="py-3 px-2"
                >
                  <div className="font-medium">{thread.thread_name}</div>
                  <div className="text-[0.7rem] font-light text-slate-500">
                    {new Date(thread.created_at).toLocaleString("en-AU", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </Link>
                <hr className="mx-2" />
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
