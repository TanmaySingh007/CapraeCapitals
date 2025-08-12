"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Crown,
  Building2,
  Brain,
  Rocket,
  Zap,
  Bell,
  User,
  Menu,
  Search,
  X,
  Target,
  Shield,
  Gem,
  Trophy
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/", icon: Building2, color: "from-blue-500 to-blue-600" },
  { name: "Business Listings", href: "/businesses", icon: Target, color: "from-green-500 to-green-600" },
  { name: "Buyer Matching", href: "/buyer-matching", icon: Brain, color: "from-purple-500 to-purple-600" },
  { name: "AI Tools", href: "/ai-tools", icon: Zap, color: "from-pink-500 to-pink-600" },
  { name: "Deal Pipeline", href: "/pipeline", icon: Rocket, color: "from-indigo-500 to-indigo-600" },
  { name: "Profile", href: "/profile/1", icon: Shield, color: "from-emerald-500 to-emerald-600" },
  { name: "Settings", href: "/settings", icon: Gem, color: "from-rose-500 to-rose-600" }
]

const getIconColor = (color: string) => {
  return `bg-gradient-to-r ${color}`
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="glass-effect-8k sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 rounded-xl ${getIconColor('from-blue-500 to-blue-600')} flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-300`}
              >
                <Crown className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-2xl font-bold text-gray-800 text-shadow-8k">
                Caprae
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                        isActive 
                          ? 'bg-blue-100/80 text-blue-800 shadow-lg' 
                          : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/80'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <div className={`w-8 h-8 rounded-lg ${getIconColor(item.color)} flex items-center justify-center shadow-lg`}>
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium">{item.name}</span>
                      </div>
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-blue-100/80 rounded-lg -z-10"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                )
              })}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:block">
                <Input
                  placeholder="Search businesses, buyers..."
                  className="glass-effect-8k text-gray-800 placeholder:text-gray-500 focus:ring-4 focus:ring-blue-500/25 w-64"
                />
              </div>

              {/* Notifications */}
              <Button
                variant="ghost"
                size="sm"
                className="relative text-gray-700 hover:bg-blue-50/80 p-2 rounded-lg"
              >
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center p-0">
                  3
                </Badge>
              </Button>

              {/* User Profile */}
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-700 hover:bg-blue-50/80 p-2 rounded-lg"
              >
                <User className="w-5 h-5" />
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden text-gray-700 hover:bg-blue-50/80 p-2 rounded-lg"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Search */}
      <AnimatePresence>
        {mobileSearchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-effect-8k"
          >
            <div className="px-4 py-4">
              <Input
                placeholder="Search businesses, buyers..."
                className="glass-effect-8k text-gray-800 placeholder:text-gray-500 focus:ring-4 focus:ring-blue-500/25"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-effect-8k"
          >
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive 
                          ? 'bg-blue-100/80 text-blue-800' 
                          : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/80'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className={`w-8 h-8 rounded-lg ${getIconColor(item.color)} flex items-center justify-center shadow-lg`}>
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">{item.name}</span>
                    </motion.div>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="animate-float"
        >
          <Button
            size="lg"
            className="w-16 h-16 rounded-full finance-glow text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
          >
            <Rocket className="w-8 h-8" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
