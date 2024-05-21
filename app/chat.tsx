"use client";

import { FormEvent, useEffect, useRef } from "react";
import { Message, useAssistant } from "ai/react";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/client";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import ResizingContainer from "../components/animations/resizing-container";
import { cn } from "@/lib/utils";
import { Baby, Beaker, DollarSign, Plus, Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    append,
  } = useAssistant({ api: "/api/assistant", threadId });
  const supabase = createClient();
  const router = useRouter();
  const searchParams = useSearchParams();
  const thread = searchParams.get("thread");
  const newChat = searchParams.get("new");
  const inputRef = useRef<HTMLInputElement>(null);
  const newChatNumber = Number(newChat);

  const allMessages = [...messageData, ...messages];
  const userMessages = allMessages.filter((m) => m.role === "user");

  useEffect(() => {
    setMessages([]);
  }, [thread, newChat]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("input", input);
    await submitMessage(e);
  };

  useEffect(() => {
    // focus input whenever the status changes to awaiting_message
    if (status === "awaiting_message") {
      inputRef.current?.focus();
    }
    async function conditionallySaveThread(date: Date = new Date()) {
      if (allMessages.filter((m) => m.role === "user").length === 1) {
        const { data, error } = await supabase.from("cbt_threads").upsert(
          {
            thread_id: threadId,
            thread_name: allMessages[0].content.slice(0, 50),
            created_at: date,
          },
          { onConflict: "thread_id" }
        );
        console.log(data, error);
      }
    }
    conditionallySaveThread();
  }, [status]);

  return (
    <>
      <div className="sticky top-4 left-0 m-4 inline-block">
        <Button
        className="aspect-square p-2"
          onClick={() => {
            router.push(`/?new=${newChatNumber + 1}`);
            router.refresh();
          }}
        >
          <div className="flex gap-2 items-center">
            <Plus size={16} strokeWidth={2.5} />
          </div>
        </Button>
      </div>
      <div className="grid place-items-center pt-6 min-h-(calc(100lvh-6rem))">
        <div className="w-screen max-w-screen-sm py-12">
          <div className="pb-32">
            <LayoutGroup>
              {userMessages.length === 0 && (
                <motion.div
                  layout
                  exit={{ opacity: 0 }}
                  className="relative bg-slate-50 text-slate-700 text-left text-sm rounded-lg p-8 h-full"
                >
                  <h1 className="text-3xl tracking-tight font-medium">
                    Bulk Nutrients Bot
                  </h1>
                  <p className="text-base mt-4 max-w-sm text-balance">
                    Ask something about the website and see how the base model
                    sources its information
                  </p>
                </motion.div>
              )}
              <MessageList {...{ threadId, messages: allMessages }} />
            </LayoutGroup>
          </div>
          <div className="absolute bottom-0 left-0 p-4 pb-24 w-full">
            <div className="w-screen max-w-screen-sm mx-auto">
              <ResizingContainer heightOnly className="overflow-hidden mb-2">
                <AnimatePresence mode="wait">
                  {allMessages.filter((m) => m.role === "user").length ===
                    0 && (
                    <motion.div
                      className="grid grid-cols-3 gap-4"
                      exit={{ opacity: 0 }}
                    >
                      {[
                        {
                          text: "What's a double shot?",
                          icon: <Beaker strokeWidth={1.5} size={16} />,
                        },
                        {
                          text: "What is the best value for money?",
                          icon: <DollarSign strokeWidth={1.5} size={16} />,
                        },
                        {
                          text: "I'm pregnant, what should I have?",
                          icon: <Baby strokeWidth={1.5} size={16} />,
                        },
                      ].map(({ text, icon }) => (
                        <div className="pb-4" key={text}>
                          <button
                            onMouseDown={() => {
                              append({ role: "user", content: text });
                            }}
                            className="relative bg-slate-50 text-slate-700 border border-slate-200 text-left text-sm rounded-lg p-6 h-full pl-12 hover:bg-slate-100 transition-colors"
                          >
                            <div className="absolute top-0 left-0 m-3 aspect-square rounded-full bg-slate-200 w-6 grid place-items-center">
                              {icon}
                            </div>
                            {text}
                          </button>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </ResizingContainer>
              <form onSubmit={handleSubmit}>
                <div className="relative">
                  <Input
                    disabled={status !== "awaiting_message"}
                    value={input}
                    ref={inputRef}
                    key={threadId} // rerenders on page change and thus auto focuses
                    className="bg-slate-50 px-6 py-6 pr-12 relative rounded-full focus-visible:ring-0 focus-visible:ring-transparent text-base border-slate-300"
                    placeholder="Ask something"
                    onChange={handleInputChange}
                    autoFocus
                  />
                  <div
                    className={cn(
                      "loading-spinner bg-slate-500 w-5 p-0.5 absolute top-0 right-0 m-3.5 transition-opacity opacity-0",
                      status === "in_progress" && "opacity-100"
                    )}
                  ></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const MessageList = ({
  messages,
  threadId,
}: {
  messages: Message[];
  threadId?: string;
}) => {
  return (
    <AnimatePresence mode="popLayout">
      {messages.map((message, i) => {
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
              <div
                dangerouslySetInnerHTML={{
                  __html: message.content.replace(/\n/g, "<br />"),
                }}
              />
            </ResizingContainer>
          </motion.div>
        );
      })}
    </AnimatePresence>
  );
};
