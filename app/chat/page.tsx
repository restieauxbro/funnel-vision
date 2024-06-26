import React from "react";
import Chat from "./chat";
import { Message } from "ai/react";
import { openai } from "@/utils/openai";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import PasswordPromptDialog from "@/components/auth/password-prompt";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const ChatPage = async ({
  searchParams,
}: {
  searchParams: { thread?: string };
}) => {
  const cookiesStore = cookies();

  const supabase = createClient();
  const userId = cookiesStore.get("ip-id")?.value;

  console.log({ userId });
  const { data: threads, error } = await supabase
    .from("cbt_threads")
    .select("created_at, thread_id, thread_name")
    .eq("user_ip", userId)
    .order("created_at", { ascending: false })
    .limit(20);
 // console.log({ threads, error });
  let startingThread = searchParams.thread;

  async function createThread() {
    const thread = await openai.beta.threads.create();
    await supabase.from("cbt_threads").insert({
      thread_id: thread.id,
      user_ip: userId,
      created_at: new Date(),
    });
    return thread;
  }
  // if empty thread has already been created, use that
  const emptyChatFromDB = threads?.filter(
    (x) => x.thread_name === "New chat"
  )?.length;
  if (!startingThread && emptyChatFromDB && emptyChatFromDB > 0) {
    startingThread = threads?.filter((x) => x.thread_name === "New chat")[0]
      .thread_id;
  }
  // Only create a new empty thread if there are no empty threads
  if (!startingThread && emptyChatFromDB === 0) {
    console.log("No threads found, creating one");
    startingThread = (await createThread()).id;
  }

  const activeThreadFromList = threads?.find(
    (x) => x.thread_id === startingThread
  );

  const isNewChat =
    !activeThreadFromList || activeThreadFromList?.thread_name === "New chat";

  const messages: Message[] = !isNewChat
    ? (await openai.beta.threads.messages.list(startingThread as string)).data
        .sort((a, b) => a.created_at - b.created_at)
        // convert to correct type for ai sdk
        .map((x) => ({
          id: x.id,
          role: x.role,
          // @ts-ignore
          content: x.content[0].text?.value,
          data: "",
        }))
    : [];
  return (
    <>
      <Chat {...{ messageData: messages, threadId: startingThread }} />
      <div className="fixed top-0 right-0 m-4">
        <form action={handleLogOut}>
          <Button
            type="submit"
            variant={"secondary"}
            className="aspect-square p-2"
          >
            <div className="flex gap-1.5 items-center">
              <LogOut size={16} strokeWidth={2.5} />
            </div>
          </Button>
        </form>
      </div>{" "}
    </>
  );
};

export default ChatPage;

async function handleLogOut() {
  "use server";
  console.log("deleting cookie");
  cookies().delete("hasAccess");
}
