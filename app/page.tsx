import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Zap, Shield, Sparkles, Rocket, Star, Users } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/50 pt-32 pb-24">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-8">
            <Sparkles className="h-4 w-4" />
            2025 Boilerplate – Next.js 14 + Supabase + Stripe
          </div>
          <h1 className="mx-auto max-w-5xl text-5xl font-bold tracking-tight md:text-7xl">
            Launch Your SaaS in Days,
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Not Months
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Production-ready starter kit with authentication, payments, dashboard, team management, dark mode and stunning design.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-10">
              Get Started – $99 <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10">
              Live Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features + Pricing */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-center text-4xl font-bold mb-16">Everything you need to ship fast</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { icon: Zap, title: "Next.js 14 App Router", desc: "Server Actions, Streaming, SSR" },
            { icon: Shield, title: "Supabase Auth + DB", desc: "Google/GitHub login + RLS" },
            { icon: Rocket, title: "Stripe + Lemon Squeezy", desc: "Subscriptions, teams, coupons" },
            { icon: Users, title: "Team Management", desc: "Invites, roles, shared billing" },
            { icon: Star, title: "Stunning Design", desc: "Shadcn + Aceternity + animations" },
            { icon: Check, title: "Dark mode + Mobile", desc: "Perfect everywhere" },
          ].map((f, i) => (
            <div key={i} className="rounded-2xl border bg-card p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <f.icon className="h-9 w-9 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="inline-block rounded-2xl border bg-card p-12 shadow-2xl">
            <div className="text-6xl font-bold">$99</div>
            <p className="mt-4 text-xl text-muted-foreground">One-time • Full source • Lifetime updates</p>
            <Button size="lg" className="mt-8 text-lg px-12">
              Buy Now <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
