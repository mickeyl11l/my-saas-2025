'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'

const MotionDiv = forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>((props, ref) => (
  <motion.div ref={ref} {...props} />
))

MotionDiv.displayName = 'MotionDiv'

const MotionSection = forwardRef<HTMLElement, HTMLMotionProps<'section'>>((props, ref) => (
  <motion.section ref={ref} {...props} />
))

MotionSection.displayName = 'MotionSection'

const MotionH1 = forwardRef<HTMLHeadingElement, HTMLMotionProps<'h1'>>((props, ref) => (
  <motion.h1 ref={ref} {...props} />
))

MotionH1.displayName = 'MotionH1'

const MotionP = forwardRef<HTMLParagraphElement, HTMLMotionProps<'p'>>((props, ref) => (
  <motion.p ref={ref} {...props} />
))

MotionP.displayName = 'MotionP'

const MotionButton = forwardRef<HTMLButtonElement, HTMLMotionProps<'button'>>((props, ref) => (
  <motion.button ref={ref} {...props} />
))

MotionButton.displayName = 'MotionButton'

export { MotionDiv, MotionSection, MotionH1, MotionP, MotionButton }
