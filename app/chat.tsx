"use client";

import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/client";
import { Message, useAssistant } from "ai/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import ResizingContainer from "./components/animations/resizing-container";
import { cn } from "@/lib/utils";
import { Sparkles, User } from "lucide-react";

export default function Chat({
  threadId,
  messageData,
}: {
  threadId?: string;
  messageData: Message[];
}) {
  const {
    status,
    messages,
    input,
    submitMessage,
    handleInputChange,
    setMessages,
  } = useAssistant({ api: "/api/assistant", threadId });
  const supabase = createClient();
  const router = useRouter();
  const searchParams = useSearchParams();
  const thread = searchParams.get("thread");
  const newChat = searchParams.get("new");

  useEffect(() => {
    setMessages([]);
  }, [thread, newChat]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("input", input);
    // if there's no user messages rename the thread
    if (messageData.filter((m) => m.role === "user").length === 0) {
      const { data, error } = await supabase.from("cbt_threads").upsert(
        {
          thread_id: threadId,
          thread_name: input.slice(0, 40),
        },
        { onConflict: "thread_id" }
      );
      console.log(data, error);
    }
    await submitMessage(e);
  };

  return (
    <div className="w-screen max-w-screen-sm py-12 px-4">
      <div className="">
        <LayoutGroup>
          <MessageList
            {...{ threadId, messages, startingMessages: messageData }}
          />

          {status === "in_progress" && <div />}

          <motion.form
            onSubmit={handleSubmit}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Input
              disabled={status !== "awaiting_message"}
              value={input}
              className="bg-slate-50 px-6 py-6 rounded-full focus-visible:ring-0 focus-visible:ring-transparent"
              placeholder="Ask something"
              onChange={handleInputChange}
              autoFocus
            />
          </motion.form>
        </LayoutGroup>
      </div>
    </div>
  );
}

const MessageList = ({
  messages,
  startingMessages,
  threadId,
}: {
  messages: Message[];
  startingMessages?: Message[];
  threadId?: string;
}) => {
  return (
    <AnimatePresence mode="popLayout">
      {[...(startingMessages || []), ...messages].map((message, i) => {
        const isUser = message.role === "user";
        return (
          <motion.div
            key={i + `-${threadId}`}
            exit={{ opacity: 0, y: 10 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "min-h-[5.5rem] py-8 relative",
              i !== 0 && "border-t"
            )}
            layout
            transition={{ type: "spring", stiffness: 320, damping: 20 }}
          >
            <ResizingContainer className="overflow-hidden" heightOnly>
              <div
                className={cn(
                  "absolute top-7 -left-16 size-8 bg-slate-600 border border-slate-600 rounded grid place-items-center text-white/80",
                  isUser && "bg-white text-slate-700"
                )}
              >
                {i % 2 === 0 ? (
                  <User strokeWidth={1.5} size={20} />
                ) : (
                  <Sparkles strokeWidth={1.5} size={20} />
                )}
              </div>
              {message.content}
            </ResizingContainer>
          </motion.div>
        );
      })}
    </AnimatePresence>
  );
};
