'use client'

import { Button } from '@/components/ui/button'
import { forwardRef } from 'react'
import confetti from 'canvas-confetti'

const ConfettiButton = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
      if (props.onClick) props.onClick(e)
    }

    return <Button {...props} ref={ref} onClick={handleClick} />
  }
)

ConfettiButton.displayName = 'ConfettiButton'

export { ConfettiButton }
