'use client'

import confetti from 'canvas-confetti'

export function ConfettiButton({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <button
      onClick={() =>
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#a855f7', '#ec4899', '#3b82f6', '#10b981', '#f59e0b'],
        })
      }
      className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-12 py-8 text-2xl font-bold text-white shadow-2xl transition-all hover:scale-105 hover:shadow-pink-500/25 active:scale-95 ${className}`}
    >
      {children}
    </button>
  )
}
