import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Dashboard() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Welcome to your Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-2xl font-semibold">$12,483</h3>
          <p className="text-muted-foreground">Total Revenue</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-2xl font-semibold">1,249</h3>
          <p className="text-muted-foreground">Active Users</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-2xl font-semibold">97.3%</h3>
          <p className="text-muted-foreground">Uptime</p>
        </Card>
      </div>
      <Button className="mt-12" size="lg">Upgrade Plan</Button>
    </div>
  )
}
