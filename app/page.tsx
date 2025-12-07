import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Zap, Shield, Sparkles, Rocket, Star, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { ConfettiButton } from '@/components/ConfettiButton'  // Добавь этот файл ниже

export default function Home() {
  return (
    <>
      {/* 3D Parallax Hero with Glassmorphism */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top, #1b1b4d 0%, #000000 100%)]">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        <motion.div 
          className="absolute inset-0" 
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.2) 0%, transparent 50%)' }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <div className="container mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="rounded-3xl p-10 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl max-w-4xl mx-auto"
          >
            <Sparkles className="h-12 w-12 mx-auto mb-6 text-purple-400 animate-spin-slow" />
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Launch Your Dream SaaS
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              With unusual 3D designs, glass effects and magic animations that make your product irresistible.
            </p>
            <ConfettiButton className="text-lg px-10">
              Get Started – $149 <ArrowRight className="ml-2" />
            </ConfettiButton>
          </motion.div>
        </div>
      </section>

      {/* Glassmorphism Features with Neomorphic Cards */}
      <section className="py-32 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 text-white">
            Features That Make It Desirable
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "3D Animations", desc: "Parallax and hover effects that wow users" },
              { icon: Shield, title: "Glassmorphism UI", desc: "Transparent, blurred elements for modern look" },
              { icon: Rocket, title: "Confetti Interactions", desc: "Celebration on every action to delight" },
              { icon: Users, title: "Team Collaboration", desc: "Invites and shared dashboards" },
              { icon: Star, title: "Custom Gradients", desc: "Unusual colors that stand out" },
              { icon: Check, title: "Mobile Magic", desc: "Adaptive designs that feel native" },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-neumorphic hover:shadow-neumorphic-hover transition-shadow"
              >
                <f.icon className="h-12 w-12 mx-auto mb-6 text-purple-400" />
                <h3 className="text-xl font-bold mb-4 text-white">{f.title}</h3>
                <p className="text-gray-400">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
