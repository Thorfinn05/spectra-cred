import { auth } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardHeader() {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId) {
    return null; // Or redirect to sign-in page
  }

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">
          Welcome back, {user?.firstName || 'User'}!
        </h1>
        <p className="text-muted-foreground">
          Manage your certificates and track your progress
        </p>
      </div>
      <Button>
        <Upload className="mr-2 h-4 w-4" />
        Upload Certificate
      </Button>
    </div>
  );
}