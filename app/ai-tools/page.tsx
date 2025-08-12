"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Brain, 
  FileText, 
  TrendingUp, 
  Shield, 
  Calculator, 
  BarChart3,
  Zap,
  Rocket,
  Sparkles,
  Activity,
  PieChart,
  LineChart,
  Target,
  Star,
  Crown,
  Gem,
  Trophy,
  Send,
  X,
  CheckCircle
} from "lucide-react"

const aiTools = [
  {
    id: 1,
    title: "AI Chat Assistant",
    description: "Get instant answers to your business questions with our intelligent AI chat system.",
    icon: Brain,
    color: "from-violet-500 to-violet-600",
    features: ["24/7 availability", "Business intelligence", "Multi-language support"],
    status: "active",
    component: "chat"
  },
  {
    id: 2,
    title: "Document Analyzer",
    description: "AI-powered document analysis for contracts, financial statements, and legal documents.",
    icon: FileText,
    color: "from-emerald-500 to-emerald-600",
    features: ["OCR technology", "Risk assessment", "Summary generation"],
    status: "active",
    component: "document"
  },
  {
    id: 3,
    title: "Financial Summary",
    description: "Automated financial analysis and reporting with AI-driven insights.",
    icon: TrendingUp,
    color: "from-amber-500 to-amber-600",
    features: ["Real-time data", "Trend analysis", "Forecasting"],
    status: "active",
    component: "financial"
  },
  {
    id: 4,
    title: "Risk Assessment",
    description: "Comprehensive risk evaluation using advanced AI algorithms and market data.",
    icon: Shield,
    color: "from-rose-500 to-rose-600",
    features: ["Market analysis", "Portfolio risk", "Compliance checks"],
    status: "active",
    component: "risk"
  },
  {
    id: 5,
    title: "Valuation Estimator",
    description: "AI-powered business valuation using multiple methodologies and market data.",
    icon: Calculator,
    color: "from-blue-500 to-blue-600",
    features: ["DCF analysis", "Comparable sales", "Industry benchmarks"],
    status: "active",
    component: "valuation"
  },
  {
    id: 6,
    title: "Match Explanation",
    description: "Understand why AI matched you with specific opportunities or partners.",
    icon: Target,
    color: "from-indigo-500 to-indigo-600",
    features: ["Transparency", "Criteria breakdown", "Improvement suggestions"],
    status: "active",
    component: "match"
  }
]

export default function AIToolsPage() {
  const [activeTool, setActiveTool] = useState<string | null>(null)
  const [chatMessages, setChatMessages] = useState<Array<{type: 'user' | 'ai', message: string}>>([
    { type: 'ai', message: 'Hello! I\'m your AI business assistant. How can I help you today?' }
  ])
  const [chatInput, setChatInput] = useState("")
  const [documentText, setDocumentText] = useState("")
  const [financialData, setFinancialData] = useState("")
  const [riskFactors, setRiskFactors] = useState("")
  const [valuationInputs, setValuationInputs] = useState({
    revenue: "",
    profit: "",
    growth: "",
    industry: ""
  })

  const handleToolLaunch = (toolId: number) => {
    const tool = aiTools.find(t => t.id === toolId)
    if (tool) {
      setActiveTool(tool.component)
    }
  }

  const handleChatSend = () => {
    if (chatInput.trim()) {
      setChatMessages(prev => [...prev, { type: 'user', message: chatInput }])
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = `I understand you're asking about "${chatInput}". Here's my analysis: This is a simulated AI response that would provide business insights, recommendations, and actionable advice based on your question. In a real implementation, this would be powered by advanced language models and business intelligence systems.`
        setChatMessages(prev => [...prev, { type: 'ai', message: aiResponse }])
      }, 1000)
      
      setChatInput("")
    }
  }

  const renderActiveTool = () => {
    switch (activeTool) {
      case 'chat':
        return (
          <div className="space-y-4">
            <div className="glass-effect-8k rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">AI Chat Assistant</h3>
              <div className="h-96 overflow-y-auto space-y-4 mb-4">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md p-3 rounded-lg ${
                      msg.type === 'user' 
                        ? 'bg-violet-500 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {msg.message}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask me anything about business..."
                  className="flex-1"
                  onKeyPress={(e) => e.key === 'Enter' && handleChatSend()}
                />
                <Button onClick={handleChatSend} className="bg-violet-500 hover:bg-violet-600">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )
      
      case 'document':
        return (
          <div className="space-y-4">
            <div className="glass-effect-8k rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Document Analyzer</h3>
              <Textarea
                value={documentText}
                onChange={(e) => setDocumentText(e.target.value)}
                placeholder="Paste your document text here for AI analysis..."
                className="h-32 mb-4"
              />
              <Button 
                onClick={() => {
                  if (documentText.trim()) {
                    alert("AI Analysis Complete! Key findings: Document contains business content with financial metrics. Risk level: Low. Recommendations: Consider expanding market reach.")
                  }
                }}
                className="bg-emerald-500 hover:bg-emerald-600"
              >
                Analyze Document
              </Button>
            </div>
          </div>
        )
      
      case 'financial':
        return (
          <div className="space-y-4">
            <div className="glass-effect-8k rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Financial Summary</h3>
              <Textarea
                value={financialData}
                onChange={(e) => setFinancialData(e.target.value)}
                placeholder="Enter financial data or paste statements for analysis..."
                className="h-32 mb-4"
              />
              <Button 
                onClick={() => {
                  if (financialData.trim()) {
                    alert("Financial Analysis Complete! Revenue trend: Positive. Profit margin: 15%. Growth rate: 12% annually. Recommendation: Consider investment in R&D.")
                  }
                }}
                className="bg-amber-500 hover:bg-amber-600"
              >
                Generate Summary
              </Button>
            </div>
          </div>
        )
      
      case 'risk':
        return (
          <div className="space-y-4">
            <div className="glass-effect-8k rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Risk Assessment</h3>
              <Textarea
                value={riskFactors}
                onChange={(e) => setRiskFactors(e.target.value)}
                placeholder="Describe your business or investment for risk analysis..."
                className="h-32 mb-4"
              />
              <Button 
                onClick={() => {
                  if (riskFactors.trim()) {
                    alert("Risk Assessment Complete! Overall risk: Medium. Key risks: Market volatility, regulatory changes. Mitigation: Diversify portfolio, monitor compliance.")
                  }
                }}
                className="bg-rose-500 hover:bg-rose-600"
              >
                Assess Risk
              </Button>
            </div>
          </div>
        )
      
      case 'valuation':
        return (
          <div className="space-y-4">
            <div className="glass-effect-8k rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Valuation Estimator</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <Input
                  value={valuationInputs.revenue}
                  onChange={(e) => setValuationInputs(prev => ({ ...prev, revenue: e.target.value }))}
                  placeholder="Annual Revenue"
                />
                <Input
                  value={valuationInputs.profit}
                  onChange={(e) => setValuationInputs(prev => ({ ...prev, profit: e.target.value }))}
                  placeholder="Annual Profit"
                />
                <Input
                  value={valuationInputs.growth}
                  onChange={(e) => setValuationInputs(prev => ({ ...prev, growth: e.target.value }))}
                  placeholder="Growth Rate %"
                />
                <Input
                  value={valuationInputs.industry}
                  onChange={(e) => setValuationInputs(prev => ({ ...prev, industry: e.target.value }))}
                  placeholder="Industry"
                />
              </div>
              <Button 
                onClick={() => {
                  if (valuationInputs.revenue && valuationInputs.profit) {
                    const revenue = parseFloat(valuationInputs.revenue)
                    const profit = parseFloat(valuationInputs.profit)
                    const estimatedValue = revenue * 2.5 + profit * 8
                    alert(`Valuation Estimate: $${estimatedValue.toLocaleString()} based on revenue multiple and profit analysis.`)
                  }
                }}
                className="bg-blue-500 hover:bg-blue-600"
              >
                Calculate Valuation
              </Button>
            </div>
          </div>
        )
      
      case 'match':
        return (
          <div className="space-y-4">
            <div className="glass-effect-8k rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Match Explanation</h3>
              <p className="text-gray-600 mb-4">
                This tool explains why AI matched you with specific opportunities or partners.
              </p>
              <Button 
                onClick={() => {
                  alert("Match Analysis: You were matched based on industry expertise (85%), financial capacity (92%), location preference (78%), and timeline alignment (82%). Overall match score: 87%")
                }}
                className="bg-indigo-500 hover:bg-indigo-600"
              >
                Analyze Match
              </Button>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Enhanced 8K Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border-2 border-violet-300/40 rounded-full"
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
          className="absolute top-40 right-20 w-24 h-24 border-2 border-purple-300/40 transform rotate-45"
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
          className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-pink-300/40 rounded-lg"
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
        
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-200/30 via-purple-200/30 to-pink-200/30 animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header with Back Button */}
        <div className="flex items-center justify-between mb-8">
          {activeTool && (
            <Button
              onClick={() => setActiveTool(null)}
              variant="outline"
              className="border-violet-300 text-violet-700 hover:bg-violet-50"
            >
              <X className="w-4 h-4 mr-2" />
              Back to Tools
            </Button>
          )}
          <div className="flex-1 text-center">
            <h1 
              className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
              style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {activeTool ? 'AI Tool Active' : 'AI-Powered Business Tools'}
            </h1>
            {!activeTool && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leverage cutting-edge artificial intelligence to streamline your business operations, 
                make data-driven decisions, and accelerate growth with our comprehensive suite of AI tools.
              </p>
            )}
          </div>
        </div>

        {/* Active Tool or Tools Grid */}
        {activeTool ? (
          renderActiveTool()
        ) : (
          <>
            {/* AI Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiTools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <Card className="glass-effect-8k card-3d h-full overflow-hidden group">
                    <CardHeader className="text-center pb-4">
                      <div className={`w-20 h-20 bg-gradient-to-r ${tool.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <tool.icon className="w-10 h-10 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-violet-600 transition-colors duration-300">
                        {tool.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {tool.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* Features */}
                      <div className="space-y-2">
                        {tool.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Status Badge */}
                      <div className="flex justify-center">
                        <Badge className={`bg-gradient-to-r ${tool.color} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                          {tool.status === 'active' ? 'Active' : 'Coming Soon'}
                        </Badge>
                      </div>
                      
                      {/* Action Button */}
                      <Button 
                        onClick={() => handleToolLaunch(tool.id)}
                        className="w-full finance-glow text-white group-hover:shadow-lg transition-all duration-300"
                      >
                        <Zap className="w-4 h-4 mr-2" />
                        Launch Tool
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-20"
            >
              <div className="glass-effect-8k rounded-3xl p-12 max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses already using AI to gain competitive advantages, 
                  reduce costs, and accelerate growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="finance-glow text-white px-8 py-4 text-lg">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Get Started Today
                  </Button>
                  <Button variant="outline" className="border-violet-300 text-violet-700 hover:bg-violet-50 px-8 py-4 text-lg">
                    <Activity className="w-5 h-5 mr-2" />
                    View Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  )
}
