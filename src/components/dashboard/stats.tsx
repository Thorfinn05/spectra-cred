import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Certificate } from "crypto"
  import {  Award, Gift, Scale, Trophy } from "lucide-react"
  
  export function DashboardStats() {
    const stats = [
      {
        title: "Total Certificates",
        value: "2",
        icon: Certificate,
        description: "Verified certificates in your portfolio",
      },
      {
        title: "Rewards Earned",
        value: "2",
        icon: Gift,
        description: "Total airdrop tokens received",
      },
      {
        title: "Programs Completed",
        value: "1",
        icon: Award,
        description: "Free certificate programs completed",
      },
      {
        title: "Leaderboard Rank",
        value: "#1",
        icon: Trophy,
        description: "Your current position",
      },
    ]
  
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          // const School = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Scale className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    )
  }