import { cookies } from "next/headers";
import React from "react";
import SidebarLayoutClient from "./sidebar-layout-client";
import Link from "next/link";

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  const sidebarCookies = cookies().get("sidebarOpen");
  const openPreference = sidebarCookies?.value
    ? sidebarCookies?.value === "true"
      ? true
      : false
    : true;
  return (
    <div className="sticky top-0 h-lvh bg-slate-100 border-r p-4 pl-4">
      <SidebarLayoutClient openPreference={openPreference}>
        {children}
      </SidebarLayoutClient>
    </div>
  );
};

export default SidebarLayout;
