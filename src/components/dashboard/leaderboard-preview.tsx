import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
  
  export function LeaderboardPreview() {
    const topUsers = [
      {
        name: "Alice Johnson",
        points: 2500,
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },
      {
        name: "Bob Smith",
        points: 2350,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },
      {
        name: "Carol Williams",
        points: 2200,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      },
    ]
  
    return (
      <Card>
        <CardHeader>
          <CardTitle>Top Performers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topUsers.map((user, index) => (
              <div
                key={user.name}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <span className="font-bold text-lg">{index + 1}</span>
                  <Avatar>
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>
                      {user.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{user.name}</span>
                </div>
                <span className="font-semibold">{user.points} pts</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }