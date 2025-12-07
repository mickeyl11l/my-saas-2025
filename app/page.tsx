import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Shield, Rocket, Sparkles, Users, Star } from 'lucide-react'
import { MotionDiv, MotionSection, MotionH1, MotionP } from '@/components/Motion'
import { ConfettiButton } from '@/components/ConfettiButton'

export default function Home() {
  return (
    <>
      <MotionSection 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
      >
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:60px_60px]" />
        <MotionDiv 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 text-center px-6"
        >
          <Sparkles className="h-16 w-16 mx-auto mb-8 text-yellow-300 animate-pulse" />
          <MotionH1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
            Launch Your SaaS in Days
          </MotionH1>
          <MotionP className="text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Premium 2025 boilerplate with glassmorphism, 3D animations, confetti and magic design
          </MotionP>
          <ConfettiButton size="lg" className="text-xl px-12 py-8 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
            Get It Now – $149 <ArrowRight className="ml-3 h-6 w-6" />
          </ConfettiButton>
        </MotionDiv>
      </MotionSection>

      <section className="py-32 bg-black/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-20 text-white">Why This Is Different</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              { icon: Zap, title: "3D Hero & Parallax", desc: "Your users will say 'WOW' in first 3 seconds" },
              { icon: Shield, title: "Glass + Neumorphism", desc: "Design that stands out in 2025" },
              { icon: Rocket, title: "Confetti on Purchase", desc: "Emotional connection = higher conversion" },
            ].map((f, i) => (
              <MotionDiv
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="glass rounded-3xl p-10 border border-white/10 hover:border-purple-500/50 transition-all"
              >
                <f.icon className="h-16 w-16 mx-auto mb-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-white mb-4">{f.title}</h3>
                <p className="text-gray-300">{f.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
