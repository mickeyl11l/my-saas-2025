import { ConfettiButton } from '@/components/ConfettiButton'
import { M, MS, MH1, MP } from '@/components/Motion'
import { Sparkles, Zap, Shield, Rocket, Star, Users, Check } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* 3D Parallax Hero */}
      <MS className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse" />
        
        <M className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <Sparkles className="h-24 w-24 mx-auto mb-8 text-yellow-300 floating" />
          <MH1 className="text-7xl md:text-9xl font-black mb-8 gradient-text">
            Launch Your SaaS
          </MH1>
          <MP className="text-2xl md:text-3xl text-gray-200 mb-12">
            The most beautiful starter of 2025 with 3D, glass and magic
          </MP>
          <ConfettiButton className="mb-8">
            Get It Now – $149 →
          </ConfettiButton>
        </M>
      </MS>

      {/* Glassmorphism Features */}
      <section className="py-32 bg-black/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-20 text-white">Why This Is Magic</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              { icon: Zap, title: "3D Hero", desc: "Instant wow-effect" },
              { icon: Shield, title: "Glass Design", desc: "Looks expensive" },
              { icon: Rocket, title: "Confetti Magic", desc: "Users smile = they buy" },
              { icon: Users, title: "Team Ready", desc: "Invites & shared billing" },
              { icon: Star, title: "Animations", desc: "Framer Motion everywhere" },
              { icon: Check, title: "Mobile Perfect", desc: "Adaptive & smooth" },
            ].map((f, i) => (
              <M
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="glass rounded-3xl p-10 card-hover"
              >
                <f.icon className="h-16 w-16 mx-auto mb-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-gray-300">{f.desc}</p>
              </M>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8 text-white">One-Time. Lifetime Magic.</h2>
          <div className="glass rounded-3xl p-12 max-w-md mx-auto shadow-2xl">
            <h3 className="text-7xl font-black mb-4 text-transparent bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text">$149</h3>
            <p className="text-xl text-gray-300 mb-8">One-time • Full source • Free updates forever</p>
            <ConfettiButton className="w-full">
              Buy Now
            </ConfettiButton>
          </div>
        </div>
      </section>
    </>
  )
}
