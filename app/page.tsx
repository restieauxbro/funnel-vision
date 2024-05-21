import React from "react";
import Chat from "./chat";
import { openai } from "@/utils/openai";
import { cookies } from "next/headers";
import { Message } from "ai/react";
import PasswordPromptDialog from "../components/auth/password-prompt";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import Sidebar from "./sidebar";
import { LogOut } from "lucide-react";

export const maxDuration = 90; // a minute and a half for streaming

const Page = async ({
  searchParams,
}: {
  searchParams: { thread?: string };
}) => {
  const cookiesStore = cookies();
  const sidebarCookies = cookiesStore.get("sidebarOpen");
  const sidebarOpen = sidebarCookies?.value
    ? sidebarCookies?.value === "true"
      ? true
      : false
    : true;

  const loginCookies = cookiesStore.get("hasAccess");
  const isLoggedIn = !!loginCookies?.value;

  if (!isLoggedIn) {
    return <PasswordPromptDialog />;
  }

  const supabase = createClient();
  const userId = cookiesStore.get("userId")?.value;
  const { data: threads, error } = await supabase
    .from("cbt_threads")
    .select("created_at, thread_id, thread_name")
    .eq("user", userId)
    .order("created_at", { ascending: false })
    .limit(20);

  let startingThread = searchParams.thread;

  async function createThread() {
    const thread = await openai.beta.threads.create();
    const { data, error } = await supabase
      .from("cbt_threads")
      .insert({ thread_id: thread.id, user: userId, created_at: new Date() });
    console.log(data, error);
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
    <div className="flex">
      <div className="hidden lg:block">
        <Sidebar {...{ threads, openPreference: sidebarOpen }} />
      </div>
      <div className="relative min-h-lvh grow">
        <div className="p-0">
          <div className="fixed top-0 right-0 m-4">
            <form action={handleLogOut}>
              <Button type="submit" size="sm" variant={"secondary"}>
                <div className="flex gap-1.5 items-center">
                  Log out <LogOut size={14} strokeWidth={2.5} />
                </div>
              </Button>
            </form>
          </div>
          <Chat threadId={startingThread} messageData={messages} />
        </div>
      </div>
    </div>
  );
};

export default Page;

async function handleLogOut() {
  "use server";
  console.log("deleting cookie");
  cookies().delete("hasAccess");
}
