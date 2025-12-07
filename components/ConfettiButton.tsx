'use client'
import { Button } from '@/components/ui/button'
import confetti from 'canvas-confetti'

export function ConfettiButton({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <Button
      className={className}
      onClick={() => confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } })}
    >
      {children}
    </Button>
  )
}
