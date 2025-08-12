"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  FileText, CheckCircle2, Clock, Shield, Upload, 
  MessageSquare, Handshake, DollarSign, ArrowRight, Sparkles,
  Plus, Edit3, Trash2, Eye, Calendar, Users, Target, TrendingUp
} from "lucide-react"

const pipelineSteps = [
  { id: 1, title: "Introduction & NDA", icon: Shield, color: "from-rose-500 to-pink-600", description: "Securely initiate conversations and sign NDAs with one click.", status: "completed" },
  { id: 2, title: "Document Exchange", icon: Upload, color: "from-emerald-500 to-teal-600", description: "Upload financials, contracts, and KPIs with AI redaction.", status: "in-progress" },
  { id: 3, title: "AI Review & Summary", icon: FileText, color: "from-violet-500 to-purple-600", description: "AI summarizes key insights, risks, and opportunities.", status: "pending" },
  { id: 4, title: "Q&A & Alignment", icon: MessageSquare, color: "from-amber-500 to-orange-600", description: "Structured Q&A threads with decision tracking.", status: "pending" },
  { id: 5, title: "Terms & Valuation", icon: DollarSign, color: "from-indigo-500 to-blue-600", description: "Negotiate LOI with assistive pricing ranges and comps.", status: "pending" },
  { id: 6, title: "Due Diligence", icon: CheckCircle2, color: "from-green-500 to-emerald-600", description: "Track diligence checklist, owners, and blockers.", status: "pending" },
  { id: 7, title: "Closing", icon: Handshake, color: "from-red-500 to-rose-600", description: "eSign, escrow instructions, and handover plan.", status: "pending" },
]

const mockDeals = [
  {
    id: "1",
    companyName: "TechFlow Solutions",
    industry: "Technology",
    dealSize: "$15M",
    stage: "Document Exchange",
    progress: 25,
    lastActivity: "2 hours ago",
    teamMembers: ["Alex Chen", "Sarah Johnson"],
    nextAction: "Upload financial documents",
    riskLevel: "Low",
    estimatedClose: "Q2 2024"
  },
  {
    id: "2",
    companyName: "HealthTech Innovations",
    industry: "Healthcare",
    dealSize: "$8.5M",
    stage: "AI Review & Summary",
    progress: 40,
    lastActivity: "1 day ago",
    teamMembers: ["Mike Rodriguez", "Emily Davis"],
    nextAction: "Review AI analysis report",
    riskLevel: "Medium",
    estimatedClose: "Q3 2024"
  },
  {
    id: "3",
    companyName: "Green Manufacturing Co",
    industry: "Manufacturing",
    dealSize: "$22M",
    stage: "Introduction & NDA",
    progress: 15,
    lastActivity: "3 days ago",
    teamMembers: ["David Thompson"],
    nextAction: "Send NDA for signature",
    riskLevel: "Low",
    estimatedClose: "Q4 2024"
  }
]

export default function DealPipelinePage() {
  const [deals, setDeals] = useState(mockDeals)
  const [selectedDeal, setSelectedDeal] = useState<typeof mockDeals[0] | null>(null)
  const [isAddingDeal, setIsAddingDeal] = useState(false)
  const [newDeal, setNewDeal] = useState({
    companyName: "",
    industry: "",
    dealSize: "",
    stage: "Introduction & NDA",
    teamMembers: "",
    estimatedClose: ""
  })
  const [activeView, setActiveView] = useState<"pipeline" | "deals" | "analytics">("pipeline")

  const handleAddDeal = () => {
    if (newDeal.companyName && newDeal.industry && newDeal.dealSize) {
      const deal = {
        id: Date.now().toString(),
        companyName: newDeal.companyName,
        industry: newDeal.industry,
        dealSize: newDeal.dealSize,
        stage: newDeal.stage,
        progress: 15,
        lastActivity: "Just now",
        teamMembers: newDeal.teamMembers ? [newDeal.teamMembers] : [],
        nextAction: "Send NDA for signature",
        riskLevel: "Low",
        estimatedClose: newDeal.estimatedClose || "Q4 2024"
      }
      setDeals(prev => [...prev, deal])
      setNewDeal({
        companyName: "",
        industry: "",
        dealSize: "",
        stage: "Introduction & NDA",
        teamMembers: "",
        estimatedClose: ""
      })
      setIsAddingDeal(false)
    }
  }

  const updateDealStage = (dealId: string, newStage: string) => {
    setDeals(prev => prev.map(deal => {
      if (deal.id === dealId) {
        const stageIndex = pipelineSteps.findIndex(step => step.title === newStage)
        return {
          ...deal,
          stage: newStage,
          progress: Math.round(((stageIndex + 1) / pipelineSteps.length) * 100)
        }
      }
      return deal
    }))
  }

  const getStageColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-500"
      case "in-progress": return "bg-yellow-500"
      default: return "bg-gray-400"
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low": return "bg-green-100 text-green-700"
      case "Medium": return "bg-yellow-100 text-yellow-700"
      case "High": return "bg-red-100 text-red-700"
      default: return "bg-gray-100 text-gray-700"
    }
  }

  const renderPipelineView = () => (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Deal Pipeline Overview</h2>
        <p className="text-gray-600">Track your deals through each stage of the acquisition process</p>
      </motion.div>

      {/* Pipeline Steps */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pipelineSteps.map((step, idx) => (
          <motion.div 
            key={step.id} 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: idx * 0.05 }} 
            viewport={{ once: true }}
          >
            <Card className="glass-effect-8k card-3d hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center pb-2">
                <div className={`w-14 h-14 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-gray-800 text-lg">{step.title}</CardTitle>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <div className={`w-3 h-3 rounded-full ${getStageColor(step.status)}`}></div>
                  <span className="text-sm text-gray-500 capitalize">{step.status}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm text-center mb-3">{step.description}</p>
                <div className="text-center">
                  <Badge className={`${
                    step.status === 'completed' ? 'bg-green-100 text-green-700' :
                    step.status === 'in-progress' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {step.status === 'completed' ? 'Complete' : 
                     step.status === 'in-progress' ? 'In Progress' : 'Pending'}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderDealsView = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Active Deals</h2>
        <Button onClick={() => setIsAddingDeal(true)} className="finance-glow text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add New Deal
        </Button>
      </div>

      {/* Add New Deal Modal */}
      {isAddingDeal && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-effect-8k rounded-2xl p-6"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">Add New Deal</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input
              placeholder="Company Name"
              value={newDeal.companyName}
              onChange={(e) => setNewDeal(prev => ({ ...prev, companyName: e.target.value }))}
            />
            <Input
              placeholder="Deal Size (e.g., $10M)"
              value={newDeal.dealSize}
              onChange={(e) => setNewDeal(prev => ({ ...prev, dealSize: e.target.value }))}
            />
            <Select value={newDeal.industry} onValueChange={(value) => setNewDeal(prev => ({ ...prev, industry: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select Industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Technology">Technology</SelectItem>
                <SelectItem value="Healthcare">Healthcare</SelectItem>
                <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                <SelectItem value="Retail">Retail</SelectItem>
                <SelectItem value="Financial Services">Financial Services</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="Team Members (comma separated)"
              value={newDeal.teamMembers}
              onChange={(e) => setNewDeal(prev => ({ ...prev, teamMembers: e.target.value }))}
            />
          </div>
          <div className="flex gap-2">
            <Button onClick={handleAddDeal} className="finance-glow text-white">
              Add Deal
            </Button>
            <Button onClick={() => setIsAddingDeal(false)} variant="outline">
              Cancel
            </Button>
          </div>
        </motion.div>
      )}

      {/* Deals Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {deals.map((deal, index) => (
          <motion.div
            key={deal.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="glass-effect-8k card-3d hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-gray-800">{deal.companyName}</CardTitle>
                    <p className="text-gray-600">{deal.industry} • {deal.dealSize}</p>
                  </div>
                  <Badge className={getRiskColor(deal.riskLevel)}>{deal.riskLevel} Risk</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">{deal.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${deal.progress}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Stage:</span>
                    <p className="font-medium">{deal.stage}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Next Action:</span>
                    <p className="font-medium">{deal.nextAction}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Last Activity:</span>
                    <p className="font-medium">{deal.lastActivity}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Est. Close:</span>
                    <p className="font-medium">{deal.estimatedClose}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    onClick={() => setSelectedDeal(deal)}
                    variant="outline" 
                    className="flex-1"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button 
                    onClick={() => {
                      const currentStageIndex = pipelineSteps.findIndex(step => step.title === deal.stage)
                      if (currentStageIndex < pipelineSteps.length - 1) {
                        updateDealStage(deal.id, pipelineSteps[currentStageIndex + 1].title)
                      }
                    }}
                    variant="outline" 
                    className="flex-1"
                    disabled={deal.stage === "Closing"}
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Next Stage
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderAnalyticsView = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Pipeline Analytics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-effect-8k text-center p-6">
          <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">{deals.length}</h3>
          <p className="text-gray-600">Active Deals</p>
        </Card>
        
        <Card className="glass-effect-8k text-center p-6">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">
            ${deals.reduce((sum, deal) => sum + parseFloat(deal.dealSize.replace(/[^0-9.]/g, '')), 0).toFixed(1)}M
          </h3>
          <p className="text-gray-600">Total Deal Value</p>
        </Card>
        
        <Card className="glass-effect-8k text-center p-6">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">
            {deals.reduce((sum, deal) => sum + deal.teamMembers.length, 0)}
          </h3>
          <p className="text-gray-600">Team Members</p>
        </Card>
      </div>

      <Card className="glass-effect-8k p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Stage Distribution</h3>
        <div className="space-y-3">
          {pipelineSteps.map((step) => {
            const dealsInStage = deals.filter(deal => deal.stage === step.title).length
            const percentage = deals.length > 0 ? (dealsInStage / deals.length) * 100 : 0
            
            return (
              <div key={step.id} className="flex items-center justify-between">
                <span className="text-gray-600">{step.title}</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-500 w-12 text-right">{dealsInStage}</span>
                </div>
              </div>
            )
          })}
        </div>
      </Card>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Enhanced 8K Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border-2 border-rose-300/40 rounded-full"
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
          className="absolute top-40 right-20 w-24 h-24 border-2 border-pink-300/40 transform rotate-45"
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
        
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-200/30 via-pink-200/30 to-purple-200/30 animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-center mb-12"
        >
          <Badge className="glass-effect-8k text-gray-800 px-3 py-1">
            AI-assisted pipeline
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
            Close Deals Faster with the{" "}
            <span 
              style={{
                background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Caprae Pipeline
            </span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            A guided, collaborative workflow designed to remove friction and maximize completion rates.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="glass-effect-8k rounded-2xl p-2">
            <div className="flex gap-2">
              {[
                { id: "pipeline", label: "Pipeline Overview", icon: Target },
                { id: "deals", label: "Active Deals", icon: FileText },
                { id: "analytics", label: "Analytics", icon: TrendingUp }
              ].map((tab) => (
                <Button
                  key={tab.id}
                                      onClick={() => setActiveView(tab.id as "pipeline" | "deals" | "analytics")}
                  variant={activeView === tab.id ? "default" : "ghost"}
                  className={`flex items-center gap-2 ${
                    activeView === tab.id 
                      ? "finance-glow text-white" 
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Views */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeView === "pipeline" && renderPipelineView()}
            {activeView === "deals" && renderDealsView()}
            {activeView === "analytics" && renderAnalyticsView()}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }} 
          className="text-center mt-12"
        >
          <Button className="finance-glow text-white rounded-full px-8 py-6 text-lg">
            <a href="/onboarding" className="flex items-center">
              Start a New Deal <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
          <div className="mt-4 text-gray-600 text-sm flex items-center justify-center">
            <Sparkles className="w-4 h-4 mr-2" /> 
            AI assists at every step with summaries, risks and next-actions
          </div>
        </motion.div>
      </div>
    </div>
  )
}


