import PasswordPromptDialog from "@/components/auth/password-prompt";
import { cookies } from "next/headers";
import React from "react";

const Layout = ({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) => {
  const cookiesStore = cookies();

  const userId = cookiesStore.get("ip-id")?.value;
  const hasAccess = cookiesStore.get("hasAccess")?.value === "true";
  if (!hasAccess || !userId) {
    return <PasswordPromptDialog />;
  }
  return (
    <div className="flex">
      <div className="hidden lg:block">{sidebar}</div>
      <div className="relative min-h-lvh grow">
        <div className="p-0">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
