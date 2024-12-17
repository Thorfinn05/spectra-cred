import { supabase } from "@/lib/supabaseClient";

export const validateUserWallet = async (userId: string) => {
  const { data, error } = await supabase
    .from("wallets")
    .select("public_key")
    .eq("user_id", userId)
    .single();

  if (error || !data) {
    throw new Error("Wallet not found");
  }
  return data.public_key;
};
