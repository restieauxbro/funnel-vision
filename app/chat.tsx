"use client";

import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/client";
import { Message, useAssistant } from "ai/react";
import { FormEvent } from "react";

export default function Chat({
  threadId,
  messageData,
}: {
  threadId?: string;
  messageData: Message[];
}) {
  const { status, messages, input, submitMessage, handleInputChange } =
    useAssistant({ api: "/api/assistant", threadId });
  const supabase = createClient();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("input", input);
    // if there's no user messages rename the thread
    if (messages.filter((m) => m.role === "user").length === 0) {
      const { data, error } = await supabase.from("cbt_threads").upsert(
        {
          thread_id: threadId,
          thread_name: input.slice(0, 20),
        },
        { onConflict: "thread_id" }
      );
      console.log(data, error);
    }
    submitMessage(e);
  };

  return (
    <div className="w-screen max-w-screen-sm">
      {messageData.map((m: Message) => (
        <div key={m.id}>
          <strong>{`${m.role}: `}</strong>
          {m.role !== "data" && m.content}
          {m.role === "data" && (
            <>
              {(m.data as any).description}
              <br />
              <pre className={"bg-gray-200"}>
                {JSON.stringify(m.data, null, 2)}
              </pre>
            </>
          )}
        </div>
      ))}
      {messages.map((m: Message) => (
        <div key={m.id}>
          <strong>{`${m.role}: `}</strong>
          {m.role !== "data" && m.content}
          {m.role === "data" && (
            <>
              {(m.data as any).description}
              <br />
              <pre className={"bg-gray-200"}>
                {JSON.stringify(m.data, null, 2)}
              </pre>
            </>
          )}
        </div>
      ))}

      {status === "in_progress" && <div />}

      <form onSubmit={handleSubmit}>
        <Input
          disabled={status !== "awaiting_message"}
          value={input}
          placeholder="What is the temperature in the living room?"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
