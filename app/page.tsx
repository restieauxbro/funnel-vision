import React from "react";
import Chat from "./chat";
import { openai } from "@/utils/openai";
import { cookies } from "next/headers";
import PasswordPromptDialog from "./components/auth/password-prompt";

const Page = async ({ searchParams }: { searchParams: { thread: string } }) => {
  const cookiesStore = cookies();

  const loginCookies = cookiesStore.get("hasAccess");
  const isLoggedIn = !!loginCookies?.value;

  if (!isLoggedIn) {
    return <PasswordPromptDialog />;
  }

  const userId = cookiesStore.get("userId")?.value;
  const emptyThreadIdFromCookie = cookiesStore.get("threadId");
  const emptyThread =
    searchParams.thread ?? (await openai.beta.threads.create()).id;
  return (
    <div>
      {emptyThread}
      <pre>{JSON.stringify(searchParams.thread, null, 2)}</pre>
      <form action={handleLogOut}>
        <button type="submit">Logout</button>
      </form>
      <Chat threadId={emptyThread} />
    </div>
  );
};

export default Page;

async function handleLogOut() {
  "use server";
  console.log("deleting cookie");
  cookies().delete("hasAccess");
}
