"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Crown,
  Trophy,
  Gem,
  Target,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Building2,
  Star,
  ArrowRight,
  Rocket,
  Brain,
  Globe,
  FileText,
  CheckCircle,
  DollarSign,
  ChartBar,
  TrendingDown,
  Activity
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Financial Elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-300/40 rounded-full"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 border-2 border-indigo-300/40 transform rotate-45"
          animate={{
            x: [0, -15, 0],
            y: [0, 15, 0],
            rotate: [45, 225, 405],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-purple-300/40 rounded-lg"
          animate={{
            x: [0, 25, 0],
            y: [0, -25, 0],
            rotate: [0, 90, 180],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 right-1/3 w-28 h-28 border-2 border-pink-300/40 transform rotate-12"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            rotate: [12, 192, 372],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 via-indigo-200/30 to-purple-200/30 animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div className="glass-effect-8k rounded-full px-6 py-3 text-gray-800 flex items-center gap-3 animate-finance-bounce">
            <Trophy className="w-6 h-6 text-amber-500" />
            <span className="font-semibold">Trusted by 10,000+ Business Professionals</span>
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 
            className="text-6xl md:text-8xl font-bold text-gray-800 mb-6 text-shadow-8k"
            style={{ 
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            The Future of Business Acquisitions
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            AI-powered platform connecting qualified buyers with exceptional business opportunities. 
            Make informed decisions with comprehensive analytics and intelligent insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                className="finance-glow text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                size="lg"
              >
                <FileText className="w-5 h-5 mr-2" />
                Get Started
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline"
                className="border-2 border-indigo-300 bg-white/80 backdrop-blur-xl text-indigo-700 hover:bg-indigo-50 hover:border-indigo-400 font-semibold px-8 py-4 text-lg rounded-xl shadow-2xl transition-all duration-300"
                size="lg"
              >
                <Zap className="w-5 h-5 mr-2" />
                Explore AI Tools
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {[
            { number: "2,500+", label: "Businesses Listed", icon: Building2, color: "from-blue-500 to-blue-600" },
            { number: "$50M+", label: "Total Value", icon: TrendingUp, color: "from-green-500 to-green-600" },
            { number: "98%", label: "Success Rate", icon: Star, color: "from-purple-500 to-purple-600" },
            { number: "10K+", label: "Active Users", icon: Users, color: "from-pink-500 to-pink-600" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:shadow-3xl transition-all duration-300 animate-investment-float`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-shadow-8k">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16 text-shadow-8k">
            Why Choose Caprae Capitals?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "Advanced AI Technology",
                description: "AI meets human expertise for the ultimate business acquisition experience",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: Target,
                title: "AI-Powered Insights",
                description: "Get comprehensive analytics and intelligent insights for informed decisions",
                color: "from-green-500 to-green-600"
              },
              {
                icon: Shield,
                title: "Precise Matching",
                description: "Our AI finds the perfect buyer-seller matches based on comprehensive criteria",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Rocket,
                title: "Secure Transactions",
                description: "Bank-level security and escrow services ensure safe business transfers",
                color: "from-pink-500 to-pink-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <Card className="glass-effect-8k card-3d h-full">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:shadow-3xl transition-all duration-300 animate-trading-wave`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 text-shadow-8k">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center"
        >
          <div className="glass-effect-8k rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-shadow-8k">
              Ready to Transform Your Business Future?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join thousands of successful entrepreneurs who have found their perfect business match through our platform.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                className="finance-glow text-white font-semibold px-10 py-4 text-xl rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                size="lg"
              >
                <CheckCircle className="w-6 h-6 mr-3" />
                Start Your Journey Today
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
