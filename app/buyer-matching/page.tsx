"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import {
  Brain,
  Heart,
  X,
  User,
  MapPin,
  DollarSign,
  TrendingUp,
  Building2,
  Target,
  Star,
  Filter,
  Search,
  ArrowRight,
  Zap,
  Shield,
  Rocket,
  Sparkles,
  Activity,
  BarChart3,
  PieChart,
  LineChart,
  RefreshCw,
  MessageSquare
} from "lucide-react"

// Mock data for buyers since the import might be failing
const mockBuyers = [
  {
    id: "1",
    name: "Sarah Johnson",
    title: "Investment Director",
    company: "Venture Capital Partners",
    location: "San Francisco, CA",
    maxBudget: 5000000,
    experienceLevel: "Expert",
    preferredIndustries: ["Technology", "Healthcare"],
    bio: "Experienced investor with 15+ years in venture capital. Looking for high-growth tech and healthcare companies with strong IP and market traction."
  },
  {
    id: "2",
    name: "Michael Chen",
    title: "Private Equity Manager",
    company: "Golden Gate Capital",
    location: "New York, NY",
    maxBudget: 10000000,
    experienceLevel: "Advanced",
    preferredIndustries: ["Manufacturing", "Retail"],
    bio: "Specializing in manufacturing and retail acquisitions. Seeking companies with $2M+ EBITDA and strong operational efficiency."
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    title: "Business Development Lead",
    company: "Strategic Growth Fund",
    location: "Austin, TX",
    maxBudget: 3000000,
    experienceLevel: "Intermediate",
    preferredIndustries: ["Technology", "SaaS"],
    bio: "Focused on B2B SaaS and technology companies. Looking for recurring revenue models with 20%+ growth rates."
  },
  {
    id: "4",
    name: "David Thompson",
    title: "Acquisition Specialist",
    company: "Heritage Investment Group",
    location: "Chicago, IL",
    maxBudget: 8000000,
    experienceLevel: "Expert",
    preferredIndustries: ["Healthcare", "Manufacturing"],
    bio: "Healthcare and manufacturing expert with 20+ years experience. Seeking companies with strong regulatory compliance and market leadership."
  }
]

export default function BuyerMatchingPage() {
  const [buyers, setBuyers] = useState(mockBuyers)
  const [filteredBuyers, setFilteredBuyers] = useState(mockBuyers)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [likedBuyers, setLikedBuyers] = useState<string[]>([])
  const [rejectedBuyers, setRejectedBuyers] = useState<string[]>([])
  const [filters, setFilters] = useState({
    minBudget: [0],
    maxBudget: [10000000],
    location: "",
    industry: "",
    experience: ""
  })
  const [showLikedBuyers, setShowLikedBuyers] = useState(false)
  const [showRejectedBuyers, setShowRejectedBuyers] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<"budget" | "experience" | "location">("budget")

  useEffect(() => {
    const filtered = buyers.filter(buyer => {
      const matchesBudget = buyer.maxBudget >= filters.minBudget[0] && buyer.maxBudget <= filters.maxBudget[0]
      const matchesLocation = !filters.location || buyer.location.toLowerCase().includes(filters.location.toLowerCase())
      const matchesIndustry = !filters.industry || filters.industry === "all" || buyer.preferredIndustries.includes(filters.industry)
      const matchesExperience = !filters.experience || filters.experience === "all" || buyer.experienceLevel === filters.experience
      const matchesSearch = !searchQuery || 
        buyer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        buyer.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        buyer.bio.toLowerCase().includes(searchQuery.toLowerCase())
      
      return matchesBudget && matchesLocation && matchesIndustry && matchesExperience && matchesSearch
    })
    
    // Sort buyers
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "budget":
          return b.maxBudget - a.maxBudget
        case "experience":
          const expOrder = { "Beginner": 1, "Intermediate": 2, "Advanced": 3, "Expert": 4 }
          return expOrder[b.experienceLevel as keyof typeof expOrder] - expOrder[a.experienceLevel as keyof typeof expOrder]
        case "location":
          return a.location.localeCompare(b.location)
        default:
          return 0
      }
    })
    
    setFilteredBuyers(filtered)
    setCurrentIndex(0)
  }, [buyers, filters, searchQuery, sortBy])

  const handleLike = () => {
    if (currentIndex < filteredBuyers.length) {
      const buyer = filteredBuyers[currentIndex]
      setLikedBuyers(prev => [...prev, buyer.id])
      setCurrentIndex(prev => prev + 1)
    }
  }

  const handleReject = () => {
    if (currentIndex < filteredBuyers.length) {
      const buyer = filteredBuyers[currentIndex]
      setRejectedBuyers(prev => [...prev, buyer.id])
      setCurrentIndex(prev => prev + 1)
    }
  }

  const resetMatches = () => {
    setCurrentIndex(0)
    setLikedBuyers([])
    setRejectedBuyers([])
  }

  const getLikedBuyersList = () => buyers.filter(buyer => likedBuyers.includes(buyer.id))
  const getRejectedBuyersList = () => buyers.filter(buyer => rejectedBuyers.includes(buyer.id))

  const currentBuyer = filteredBuyers[currentIndex]

  const renderLikedBuyers = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Liked Buyers</h2>
        <Button onClick={() => setShowLikedBuyers(false)} variant="outline">
          Back to Matching
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {getLikedBuyersList().map((buyer, index) => (
          <motion.div
            key={buyer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="glass-effect-8k card-3d">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-800">{buyer.name}</CardTitle>
                <CardDescription>{buyer.title} • {buyer.company}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center p-3 bg-white/50 rounded-lg">
                    <DollarSign className="w-5 h-5 text-green-500 mx-auto mb-1" />
                    <div className="font-medium">${buyer.maxBudget.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">Max Budget</div>
                  </div>
                  <div className="text-center p-3 bg-white/50 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                    <div className="font-medium">{buyer.location}</div>
                    <div className="text-xs text-gray-500">Location</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {buyer.preferredIndustries.map((industry, idx) => (
                    <Badge key={idx} className="bg-emerald-100 text-emerald-700">
                      {industry}
                    </Badge>
                  ))}
                </div>
                <div className="text-center">
                  <Button className="w-full finance-glow text-white">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Contact Buyer
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderRejectedBuyers = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Rejected Buyers</h2>
        <Button onClick={() => setShowRejectedBuyers(false)} variant="outline">
          Back to Matching
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {getRejectedBuyersList().map((buyer, index) => (
          <motion.div
            key={buyer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="glass-effect-8k card-3d opacity-75">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-600">{buyer.name}</CardTitle>
                <CardDescription className="text-gray-500">{buyer.title} • {buyer.company}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <Button 
                    onClick={() => {
                      setRejectedBuyers(prev => prev.filter(id => id !== buyer.id))
                      setLikedBuyers(prev => [...prev, buyer.id])
                    }}
                    variant="outline"
                    className="w-full"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Reconsider
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )

  if (showLikedBuyers) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 py-16">
          {renderLikedBuyers()}
        </div>
      </div>
    )
  }

  if (showRejectedBuyers) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 py-16">
          {renderRejectedBuyers()}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Enhanced 8K Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Financial Elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border-2 border-emerald-300/40 rounded-full"
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
          className="absolute top-40 right-20 w-24 h-24 border-2 border-teal-300/40 transform rotate-45"
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
          className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-cyan-300/40 rounded-lg"
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
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/30 via-teal-200/30 to-cyan-200/30 animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <Brain className="w-12 h-12 text-white" />
          </div>
          <h1 
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #0d9488 50%, #0891b2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            AI-Powered Buyer Matching
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced AI algorithm finds the perfect buyer-seller matches using machine learning, 
            behavioral analysis, and financial modeling.
          </p>
        </motion.div>

        {/* Search and Sort Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-effect-8k rounded-2xl p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <Input
                placeholder="Search buyers by name, company, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={sortBy} onValueChange={(value) => setSortBy(value as "budget" | "experience" | "location")}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="budget">Sort by Budget</SelectItem>
                <SelectItem value="experience">Sort by Experience</SelectItem>
                <SelectItem value="location">Sort by Location</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-2">
              <Button
                onClick={() => setShowLikedBuyers(true)}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Heart className="w-4 h-4" />
                Liked ({likedBuyers.length})
              </Button>
              <Button
                onClick={() => setShowRejectedBuyers(true)}
                variant="outline"
                className="flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Rejected ({rejectedBuyers.length})
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="glass-effect-8k">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Filter className="w-5 h-5" />
                  Smart Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Budget Range */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Budget Range
                  </label>
                  <div className="space-y-2">
                    <Slider
                      value={filters.minBudget}
                      onValueChange={(value) => setFilters(prev => ({ ...prev, minBudget: value }))}
                      max={10000000}
                      step={100000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>${filters.minBudget[0].toLocaleString()}</span>
                      <span>${filters.maxBudget[0].toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Location
                  </label>
                  <Input
                    placeholder="Enter location..."
                    value={filters.location}
                    onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
                    className="glass-effect-8k"
                  />
                </div>

                {/* Industry */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Industry
                  </label>
                  <Select value={filters.industry} onValueChange={(value) => setFilters(prev => ({ ...prev, industry: value }))}>
                    <SelectTrigger className="glass-effect-8k">
                      <SelectValue placeholder="All Industries" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Industries</SelectItem>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="Healthcare">Healthcare</SelectItem>
                      <SelectItem value="Retail">Retail</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Experience Level */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Experience Level
                  </label>
                  <Select value={filters.experience} onValueChange={(value) => setFilters(prev => ({ ...prev, experience: value }))}>
                    <SelectTrigger className="glass-effect-8k">
                      <SelectValue placeholder="All Levels" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Levels</SelectItem>
                      <SelectItem value="Beginner">Beginner</SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                      <SelectItem value="Expert">Expert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Stats */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">{likedBuyers.length}</div>
                      <div className="text-xs text-gray-500">Liked</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-500">{rejectedBuyers.length}</div>
                      <div className="text-xs text-gray-500">Rejected</div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="text-lg font-bold text-gray-800">{filteredBuyers.length}</div>
                    <div className="text-xs text-gray-500">Available Matches</div>
                  </div>
                </div>

                {/* Reset Button */}
                <Button
                  onClick={resetMatches}
                  variant="outline"
                  className="w-full"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Reset All
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Matching Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            {currentBuyer ? (
              <div className="space-y-6">
                {/* Progress Bar */}
                <div className="glass-effect-8k rounded-2xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Matching Progress</span>
                    <span className="text-sm text-gray-500">{currentIndex + 1} of {filteredBuyers.length}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentIndex + 1) / filteredBuyers.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Buyer Card */}
                <motion.div
                  key={currentBuyer.id}
                  initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <Card className="glass-effect-8k card-3d overflow-hidden">
                    <CardHeader className="text-center pb-4">
                      <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                        <User className="w-12 h-12 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-800">
                        {currentBuyer.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {currentBuyer.title} • {currentBuyer.company}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      {/* Key Information */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-white/50 rounded-lg">
                          <DollarSign className="w-6 h-6 text-green-500 mx-auto mb-2" />
                          <div className="text-lg font-bold text-gray-800">
                            ${currentBuyer.maxBudget.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-500">Max Budget</div>
                        </div>
                        <div className="text-center p-3 bg-white/50 rounded-lg">
                          <MapPin className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                          <div className="text-sm font-medium text-gray-800">
                            {currentBuyer.location}
                          </div>
                          <div className="text-xs text-gray-500">Location</div>
                        </div>
                      </div>

                      {/* Experience & Industries */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-gray-600">
                            Experience: <span className="font-medium">{currentBuyer.experienceLevel}</span>
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {currentBuyer.preferredIndustries.map((industry, index) => (
                            <Badge key={index} className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                              {industry}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Bio */}
                      <p className="text-gray-600 text-center leading-relaxed">
                        {currentBuyer.bio}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex gap-4 pt-4">
                        <Button
                          onClick={handleReject}
                          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl shadow-lg hover:shadow-red-500/25 transition-all duration-300"
                        >
                          <X className="w-5 h-5 mr-2" />
                          Pass
                        </Button>
                        <Button
                          onClick={handleLike}
                          className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                        >
                          <Heart className="w-5 h-5 mr-2" />
                          Like
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            ) : (
              /* No More Matches */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  No More Matches Found
                </h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  We&apos;ve shown you all the available buyers that match your criteria. 
                  Try adjusting your filters or check back later for new matches.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button
                    onClick={resetMatches}
                    className="finance-glow text-white"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Reset Matches
                  </Button>
                  <Button
                    variant="outline"
                    className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                    onClick={() => {
                      setFilters({
                        minBudget: [0],
                        maxBudget: [10000000],
                        location: "",
                        industry: "",
                        experience: ""
                      })
                      setSearchQuery("")
                    }}
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Clear Filters
                  </Button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
