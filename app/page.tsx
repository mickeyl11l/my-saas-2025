import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Zap, Shield, Sparkles, Rocket, Star, Users } from 'lucide-react'
import { MotionSection, MotionH1, MotionP, MotionDiv } from '@/components/MotionWrapper'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <MotionSection 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden bg-gradient-to-b from-background to-muted/50 pt-32 pb-24"
      >
        <div className="container mx-auto px-6 text-center">
          <MotionDiv 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-8"
          >
            <Sparkles className="h-4 w-4" />
            2025 Boilerplate – Next.js 14 + Supabase + Stripe
          </MotionDiv>
          <MotionH1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-5xl text-5xl font-bold tracking-tight md:text-7xl"
          >
            Launch Your SaaS in Days,
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Not Months</span>
          </MotionH1>
          <MotionP 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Production-ready starter kit with authentication, payments, dashboard, team management, dark mode and stunning design.
          </MotionP>
          <MotionDiv 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="text-lg px-10">
              Get Started – $99 <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10">
              Live Demo
            </Button>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* Features */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-center text-4xl font-bold mb-16">Everything you need to ship fast</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { icon: Zap, title: "Next.js 14 App Router", desc: "Server Components, Server Actions, Streaming" },
            { icon: Shield, title: "Supabase Auth + DB", desc: "Email, Google, GitHub login out of the box" },
            { icon: Rocket, title: "Stripe & Lemon Squeezy", desc: "Subscriptions, one-time, teams – ready" },
          ].map((f, i) => (
            <div key={i} className="rounded-2xl border bg-card p-8 text-center hover:shadow-lg transition">
              <f.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
