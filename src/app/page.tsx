import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { LandingPage } from "@/components/landing-page";

export default async function Page() {
  const { userId } = auth();

  if (!userId) {
    redirect("/dashboard");
  }

  return <LandingPage />;
}