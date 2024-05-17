import React from "react";
import Chat from "./chat";
import { openai } from "@/utils/openai";
import { cookies } from "next/headers";

const Page = async ({
  searchParams,
}: {
  searchParams: { thread: string };
}) => {
  const emptyThreadIdFromCookie = cookies().get("threadId");
  //   const emptyThread = await openai.beta.threads.create();
  return (
    <div>
      {/* {emptyThread.id} */}
      <pre>{JSON.stringify(searchParams.thread, null, 2)}</pre>
      <Chat
        threadId={
          //emptyThread.id
          ""
        }
      />
    </div>
  );
};

export default Page;
