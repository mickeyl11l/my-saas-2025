'use client'

import { ConfettiButton } from '@/components/ConfettiButton'
import { M, MS, MH1, MP } from '@/components/Motion'
import { Sparkles, Zap, Shield, Rocket, Star, Users, Check } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* 3D КОСМИЧЕСКИЙ HERO 2025 */}
      <MS className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-blue-950 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-purple-800/40 via-transparent to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-grid-white/[0.04] bg-[size:60px_60px]" />

        {/* Звёзды */}
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}

        <M className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <Sparkles className="h-32 w-32 mx-auto mb-12 text-yellow-300 floating drop-shadow-glow" />
          
          <MH1 className="text-7xl md:text-9xl font-black mb-10 leading-tight">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Launch Your SaaS
            </span>
            <br />
            <span className="text-white/90">in Days</span>
          </MH1>

          <MP className="text-2xl md:text-4xl text-gray-300 mb-16 font-light max-w-4xl mx-auto">
            Самый красивый и современный стартер 2025 года с 3D-эффектами, glassmorphism и магией
          </MP>

          <ConfettiButton className="text-2xl md:text-3xl px-16 py-8 rounded-3xl font-bold shadow-2xl hover:shadow-purple-500/40">
            Купить за $149
          </ConfettiButton>
        </M>
      </MS>

      {/* СЕКЦИЯ ФИЧ — СТЕКЛЯННЫЕ КАРТОЧКИ */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-white">
            Почему это покупают
          </h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              { icon: Zap, title: "3D Космический Hero", desc: "Вау-эффект с первых секунд" },
              { icon: Shield, title: "Glassmorphism UI", desc: "Выглядит дорого и современно" },
              { icon: Rocket, title: "Конфетти при покупке", desc: "Эмоция = покупка" },
              { icon: Users, title: "Готов к командам", desc: "Приглашения, роли, биллинг" },
              { icon: Star, title: "Плавные анимации", desc: "Framer Motion везде" },
              { icon: Check, title: "Идеально на мобильных", desc: "Адаптивный и быстрый" },
            ].map((f((f, i) => (
              <M
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass rounded-3xl p-10 border border-white/10 hover:border-purple-500/50 transition-all card-hover shadow-2xl"
              >
                <f.icon className="h-16 w-16 mx-auto mb-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-white mb-4">{f.title}</h3>
                <p className="text-gray-300 text-lg">{f.desc}</p>
              </M>
            ))}
          </div>
        </div>
      </section>

      {/* ЦЕНА */}
      <section className="py-32 bg-black/70">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-12 text-white">
            Один платёж. Вечная магия.
          </h2>
          <div className="glass rounded-3xl p-16 max-w-2xl mx-auto shadow-2xl border border-white/20">
            <h3 className="text-8xl font-black mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              $149
            </h3>
            <p className="text-2xl text-gray-300 mb-12">
              Разовый платёж • Полный код • Обновления навсегда
            </p>
            <ConfettiButton className="w-full text-2xl py-8 rounded-2xl">
              Купить сейчас
            </ConfettiButton>
          </div>
        </div>
      </section>
    </>
  )
}
