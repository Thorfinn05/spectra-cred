import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Badge } from "@/components/ui/badge"
  import { formatDistanceToNow } from "date-fns"
  
  export function RecentCertificates() {
    const certificates = [
      {
        id: 1,
        title: "Web Development Fundamentals",
        issuer: "Tech Academy",
        date: new Date("2024-03-15"),
        status: "verified",
      },
      {
        id: 2,
        title: "Blockchain Basics",
        issuer: "Crypto Institute",
        date: new Date("2024-03-10"),
        status: "pending",
      },
    ]
  
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Certificates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div>
                  <h3 className="font-medium">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatDistanceToNow(cert.date, { addSuffix: true })}
                  </p>
                </div>
                <Badge
                  variant={cert.status === "verified" ? "default" : "secondary"}
                >
                  {cert.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }