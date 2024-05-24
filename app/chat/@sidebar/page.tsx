import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import HistoryContent from "./history-content";

const SideBar = async () => {
  const supabase = createClient();
  const cookiesStore = cookies();
  const userId = cookiesStore.get("ip-id")?.value;
  const { data: threads, error } = await supabase
    .from("cbt_threads")
    .select("created_at, thread_id, thread_name")
    .eq("user_ip", userId)
    .order("created_at", { ascending: false })
    .limit(20);
  return <HistoryContent {...{ threads }} />;
};

export default SideBar;
