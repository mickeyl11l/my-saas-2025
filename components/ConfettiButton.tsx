'use client'

import confetti from 'canvas-confetti'

export function ConfettiButton({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <button
      onClick={() => confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#a855f7', '#ec4899', '#3b82f6', '#10b981', '#f59e0b']
      })}
      className={`px-12 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-xl shadow-2xl hover:shadow-pink-500/50 transition-all hover:scale-105 active:scale-95 ${className}`}
    >
      {children}
    </button>
  )
}
