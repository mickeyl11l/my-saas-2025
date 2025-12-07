import { ConfettiButton } from '@/components/ConfettiButton'
import { M, MS, MH1, MP } from '@/components/Motion'
import { Sparkles, Zap, Shield, Rocket, Star } from 'lucide-react'

export default function Home() {
  return (
    <>
      <MS className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:60px_60px]" />
        
        <M className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <Sparkles className="h-20 w-20 mx-auto mb-8 text-yellow-300 floating" />
          
          <MH1 className="text-7xl md:text-9xl font-black mb-8 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
            Launch in Days
          </MH1>
          
          <MP className="text-2xl md:text-3xl text-gray-200 mb-12">
            The most beautiful SaaS starter of 2025
          </MP>
          
          <ConfettiButton className="text-2xl px-16 py-8 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-2xl">
            Get It Now – $149 →
          </ConfettiButton>
        </M>
      </MS>

      <section className="py-32 bg-black/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-20 text-white">Why Founders Love It</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              { icon: Zap, title: "3D Hero", desc: "Instant wow-effect" },
              { icon: Shield, title: "Glass Design", desc: "Looks expensive" },
              { icon: Rocket, title: "Confetti Magic", desc: "Users smile = they buy" },
            ].map((f, i) => (
              <M
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="glass rounded-3xl p-10 hover:scale-105 transition-transform"
              >
                <f.icon className="h-16 w-16 mx-auto mb-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-gray-300">{f.desc}</p>
              </M>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
