import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { buttonVariants } from "@/components/ui/button";
import { Plus, SidebarIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { TooltipPortal } from "@radix-ui/react-tooltip";

const NewChatButton = ({ newChatNumber }: { newChatNumber: number }) => {
  const router = useRouter();

  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger
          className={cn(buttonVariants(), "aspect-square p-2")}
          onMouseDown={() => {
            router.push(`/?new=${newChatNumber + 1}`);
            router.refresh();
          }}
        >
          <div className="flex gap-2 items-center">
            <Plus size={16} strokeWidth={2.5} />
          </div>
        </TooltipTrigger>
        <TooltipContent variant={"dark"} side="right">
          <p>New chat</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default NewChatButton;

export const SideBarPanelButton = ({
  changeOpenState,
  open,
}: {
  changeOpenState: (preference: boolean) => void;
  open: boolean;
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "aspect-square p-2 bg-slate-100 border border-slate-300 shadow"
          )}
          onClick={async () => {
            await changeOpenState(!open);
          }}
        >
          <SidebarIcon size={18} />
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent side="left" size="sm">
            {open ? "Hide" : "Open"} sidebar
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </TooltipProvider>
  );
};
