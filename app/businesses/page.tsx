"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Filter,
  MapPin,
  DollarSign,
  TrendingUp,
  Users,
  Building2,
  Target,
  Star,
  Heart,
  Eye,
  Share2,
  ArrowRight,
  Crown,
  Gem,
  Trophy,
  Zap,
  Shield,
  Rocket,
  Sparkles,
  FilterX,
  SortAsc,
  SortDesc,
  List
} from "lucide-react"
import { mockBusinessListings, mockBusinessCategories } from "@/lib/mock-data/businesses"
import { BusinessListing, BusinessCategory } from "@/types/business"

export default function BusinessListingsPage() {
  const [businesses, setBusinesses] = useState<BusinessListing[]>(mockBusinessListings)
  const [filteredBusinesses, setFilteredBusinesses] = useState<BusinessListing[]>(mockBusinessListings)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [priceRange, setPriceRange] = useState({ min: "", max: "" })
  const [sortBy, setSortBy] = useState("relevance")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [favorites, setFavorites] = useState<string[]>([])

  // Filter businesses based on search criteria
  useEffect(() => {
    let filtered = businesses.filter(business => {
      const matchesSearch = business.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           business.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           business.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesIndustry = !selectedIndustry || selectedIndustry === "all" || business.businessDetails.industry === selectedIndustry
      const matchesLocation = !selectedLocation || selectedLocation === "all" || business.location.city === selectedLocation || business.location.state === selectedLocation
      
      const matchesPrice = (!priceRange.min || business.askingPrice.amount >= parseInt(priceRange.min)) &&
                          (!priceRange.max || business.askingPrice.amount <= parseInt(priceRange.max))
      
      return matchesSearch && matchesIndustry && matchesLocation && matchesPrice
    })

    // Sort businesses
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.askingPrice.amount - b.askingPrice.amount)
        break
      case "price-high":
        filtered.sort((a, b) => b.askingPrice.amount - a.askingPrice.amount)
        break
      case "revenue":
        filtered.sort((a, b) => b.businessDetails.annualRevenue - a.businessDetails.annualRevenue)
        break
      case "profit":
        filtered.sort((a, b) => b.businessDetails.annualProfit - a.businessDetails.annualProfit)
        break
      case "growth":
        filtered.sort((a, b) => b.businessDetails.growthRate - a.businessDetails.growthRate)
        break
      default:
        // Relevance - keep original order
        break
    }

    setFilteredBusinesses(filtered)
  }, [businesses, searchTerm, selectedIndustry, selectedLocation, priceRange, sortBy])

  const toggleFavorite = (businessId: string) => {
    setFavorites(prev => 
      prev.includes(businessId) 
        ? prev.filter(id => id !== businessId)
        : [...prev, businessId]
    )
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedIndustry("")
    setSelectedLocation("")
    setPriceRange({ min: "", max: "" })
    setSortBy("relevance")
  }

  const formatPrice = (amount: number) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`
    }
    return `$${amount.toLocaleString()}`
  }

  const getIndustryColor = (industry: string) => {
    const colors = {
      'Technology': 'from-violet-500 to-violet-600',
      'Manufacturing': 'from-green-500 to-green-600',
      'Restaurant': 'from-red-500 to-red-600',
      'Healthcare': 'from-yellow-500 to-yellow-600',
      'Retail': 'from-orange-500 to-orange-600'
    }
    return colors[industry as keyof typeof colors] || 'from-gray-500 to-gray-600'
  }

  const getStatusColor = (status: string) => {
    const colors = {
      'active': 'from-green-500 to-green-600',
      'pending': 'from-yellow-500 to-yellow-600',
      'sold': 'from-red-500 to-red-600',
      'expired': 'from-gray-500 to-gray-600'
    }
    return colors[status as keyof typeof colors] || 'from-gray-500 to-gray-600'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Enhanced 8K Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border-2 border-amber-400/40 rounded-full"
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
          className="absolute top-40 right-20 w-24 h-24 border-2 border-orange-400/40 transform rotate-45"
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
          className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-red-400/40 rounded-lg"
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
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 via-orange-200/30 to-red-200/30 animate-pulse" />
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
          <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <Building2 className="w-12 h-12 text-white" />
          </div>
          <h1 
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
            style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 50%, #dc2626 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Business Listings
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exceptional business opportunities across all industries. 
            Our AI-powered platform matches you with the perfect investment.
          </p>
        </motion.div>

        {/* Search and Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-effect-8k rounded-3xl p-8 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              <Input
                placeholder="Search businesses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 glass-effect-8k text-gray-800 placeholder:text-gray-500 focus:ring-4 focus:ring-amber-500/25"
              />
            </div>

            {/* Industry Filter */}
            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <SelectTrigger className="glass-effect-8k text-gray-800 focus:ring-4 focus:ring-amber-500/25">
                <SelectValue placeholder="All Industries" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200 text-gray-800">
                <SelectItem value="all">All Industries</SelectItem>
                {mockBusinessCategories.map((category) => (
                  <SelectItem key={category.id} value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Location Filter */}
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="glass-effect-8k text-gray-800 focus:ring-4 focus:ring-amber-500/25">
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200 text-gray-800">
                <SelectItem value="all">All Locations</SelectItem>
                {Array.from(new Set(businesses.map(b => b.location.city))).map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Range */}
            <div className="flex space-x-2">
              <Input
                placeholder="Min Price"
                value={priceRange.min}
                onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                className="glass-effect-8k text-gray-800 placeholder:text-gray-500 focus:ring-4 focus:ring-amber-500/25"
              />
              <Input
                placeholder="Max Price"
                value={priceRange.max}
                onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                className="glass-effect-8k text-gray-800 placeholder:text-gray-500 focus:ring-4 focus:ring-amber-500/25"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Button
                onClick={clearFilters}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
              >
                <FilterX className="w-4 h-4 mr-2" />
                Clear Filters
              </Button>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="glass-effect-8k text-gray-800 focus:ring-4 focus:ring-amber-500/25 w-48">
                  <SelectValue placeholder="Sort by..." />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200 text-gray-800">
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="revenue">Revenue</SelectItem>
                  <SelectItem value="profit">Profit</SelectItem>
                  <SelectItem value="growth">Growth Rate</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                onClick={() => setViewMode("grid")}
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                className={`${viewMode === "grid" ? 'bg-amber-500 hover:bg-amber-600' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
              >
                <Target className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => setViewMode("list")}
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                className={`${viewMode === "list" ? 'bg-amber-500 hover:bg-amber-600' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <div className="text-gray-600">
            Showing <span className="text-gray-800 font-semibold">{filteredBusinesses.length}</span> of{" "}
            <span className="text-gray-800 font-semibold">{businesses.length}</span> businesses
          </div>
        </motion.div>

        {/* No Results */}
        {filteredBusinesses.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-20"
          >
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">No businesses found</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Try adjusting your search criteria or filters to find more business opportunities.
            </p>
            <Button
              onClick={clearFilters}
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white"
            >
              Clear All Filters
            </Button>
          </motion.div>
        )}

        {/* Business Listings Grid */}
        <AnimatePresence>
          {filteredBusinesses.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`grid gap-6 ${
                viewMode === "grid" 
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
                  : "grid-cols-1"
              }`}
            >
              {filteredBusinesses.map((business, index) => (
                <motion.div
                  key={business.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group"
                >
                  <Card className="glass-effect-8k card-3d h-full overflow-hidden">
                    {/* Business Header */}
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${getIndustryColor(business.businessDetails.industry)} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <Building2 className="w-8 h-8 text-white" />
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleFavorite(business.id)}
                          className={`p-2 rounded-full transition-all duration-300 ${
                            favorites.includes(business.id) 
                              ? 'text-red-500 hover:text-red-400' 
                              : 'text-gray-500 hover:text-gray-700'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${favorites.includes(business.id) ? 'fill-current' : ''}`} />
                        </Button>
                      </div>
                      
                      <div className="space-y-2">
                        <CardTitle className="text-xl font-bold text-gray-800 line-clamp-2 group-hover:text-amber-600 transition-colors duration-300">
                          {business.title}
                        </CardTitle>
                        
                        <div className="flex items-center space-x-2 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{business.location.city}, {business.location.state}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Badge className={`bg-gradient-to-r ${getStatusColor(business.status)} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                            {business.status.charAt(0).toUpperCase() + business.status.slice(1)}
                          </Badge>
                          <Badge className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                            {business.businessDetails.industry}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <CardDescription className="text-gray-600 line-clamp-3">
                        {business.summary}
                      </CardDescription>
                      
                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-white/50 rounded-lg">
                          <div className="text-lg font-bold text-gray-800">{formatPrice(business.askingPrice.amount)}</div>
                          <div className="text-xs text-gray-500">Asking Price</div>
                        </div>
                        <div className="text-center p-3 bg-white/50 rounded-lg">
                          <div className="text-lg font-bold text-gray-800">{formatPrice(business.businessDetails.annualRevenue)}</div>
                          <div className="text-xs text-gray-500">Annual Revenue</div>
                        </div>
                      </div>
                      
                      {/* Additional Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{business.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{business.businessDetails.employeeCount}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-4 h-4" />
                          <span>{(business.businessDetails.growthRate * 100).toFixed(0)}%</span>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex space-x-2 pt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                        >
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
