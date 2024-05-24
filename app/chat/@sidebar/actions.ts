"use server";

import { cookies } from "next/headers";

export async function storeSidebarPref(open: boolean) {
  cookies().set("sidebarOpen", open ? "true" : "false", {
    maxAge: 60 * 60 * 24 * 14,
    path: "/",
  });
}
