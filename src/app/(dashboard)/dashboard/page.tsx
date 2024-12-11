import DashboardHeader from "@/components/dashboard/header"
import { DashboardStats } from "@/components/dashboard/stats"
import { RecentCertificates } from "@/components/dashboard/recent-certificates"
import { LeaderboardPreview } from "@/components/dashboard/leaderboard-preview"
export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader />
      <DashboardStats />
      <div className="grid gap-8 md:grid-cols-2">
        <RecentCertificates />
        <LeaderboardPreview />
      </div>
    </div>
  )
}