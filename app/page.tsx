import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Shield, Rocket, Sparkles, Users, Star, Check } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  const features = [
    { icon: Zap, title: "Next.js 14 App Router", desc: "Server Actions, Streaming, SSR" },
    { icon: Shield, title: "Supabase Auth + DB", desc: "Google/GitHub login + RLS" },
    { icon: Rocket, title: "Stripe + Lemon Squeezy", desc: "Subscriptions, teams, coupons" },
    { icon: Users, title: "Team Management", desc: "Invites, roles, shared billing" },
    { icon: Star, title: "Stunning Design", desc: "Shadcn + Aceternity + animations" },
    { icon: Check, title: "Dark mode + Mobile", desc: "Perfect everywhere" },
  ]

  return (
    <>
      {/* Premium Hero with 3D gradient and parallax */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 pt-32 pb-24 min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-medium text-white mb-8 border border-white/20"
          >
            <Sparkles className="h-4 w-4" />
            Premium 2025 Boilerplate — Launch in Days
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-6xl text-6xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-6"
          >
            Launch Your SaaS in <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Days</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto max-w-3xl text-xl text-white/90 mb-12"
          >
            Production-ready starter with stunning animations, Supabase auth, Stripe billing, and mobile-first design.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="text-lg px-10 bg-white text-indigo-900 hover:bg-white/90 shadow-2xl">
              Get Started – $129 <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 border-white/30 text-white hover:bg-white/10">
              Live Demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Animated Features with glassmorphism */}
      <section className="container mx-auto px-6 py-24">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-5xl font-bold mb-20 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          Everything You Need to Ship Fast
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 text-center hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-4 shadow-xl"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                <feature.icon className="h-10 w-10 text-blue-400 group-hover:text-blue-300" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Premium Pricing with toggle */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-8 text-white"
          >
            One-time Payment. Lifetime Value.
          </motion.h2>
          <div className="inline-block rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-12 shadow-2xl max-w-md">
            <div className="text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              $129
            </div>
            <p className="text-xl text-gray-300 mb-8">One-time • Full source code • Free updates forever</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="space-y-4"
            >
              <Button size="lg" className="w-full text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
                Buy Now <ArrowRight className="ml-2" />
              </Button>
              <div className="text-sm text-gray-400">
                30-day money back guarantee
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
