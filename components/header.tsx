'use client'

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/10 dark:bg-black/10 border-b border-white/20 dark:border-black/20"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          SaaSKit 2025
        </motion.div>
        <div className="flex items-center gap-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="bg-white/10 dark:bg-black/10 border-white/20 dark:border-black/20 hover:bg-white/20 dark:hover:bg-black/20"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-400" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Sign In
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
