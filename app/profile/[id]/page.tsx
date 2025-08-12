"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  User,
  Edit3,
  Save,
  X,
  MapPin,
  DollarSign,
  TrendingUp,
  Building2,
  Target,
  Star,
  Award,
  Briefcase,
  Calendar,
  Phone,
  Mail,
  Globe,
  Linkedin,
  Twitter,
  Github,
  Shield,
  Zap,
  Rocket,
  Sparkles,
  Activity,
  BarChart3,
  PieChart,
  LineChart,
  Settings,
  Bell,
  Lock,
  Eye,
  EyeOff,
  Trash,
  Plus
} from "lucide-react"

export default function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "Alexandra Chen",
    title: "Senior Investment Manager",
    company: "Caprae Capital Partners",
    email: "alexandra.chen@caprae.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "Experienced investment professional with 8+ years in private equity and business acquisitions. Specialized in technology and healthcare sectors with a proven track record of successful deals.",
    experience: "8+ years",
    education: "MBA, Stanford Graduate School of Business",
    certifications: ["CFA", "Series 7", "Series 63"],
    skills: ["Financial Modeling", "Due Diligence", "Deal Structuring", "Portfolio Management", "Risk Assessment"],
    languages: ["English", "Mandarin", "Spanish"],
    social: {
      linkedin: "linkedin.com/in/alexandrachen",
      twitter: "@alexandrachen",
      github: "github.com/alexandrachen"
    }
  })

  const [originalProfile] = useState({ ...profile })

  const [stats] = useState({
    dealsCompleted: 47,
    totalValue: "$2.3B",
    successRate: "94%",
    clientSatisfaction: "98%",
    yearsExperience: 8,
    teamSize: 12
  })

  const [recentActivity] = useState([
    { type: "Deal Closed", description: "Tech startup acquisition - $45M", date: "2 days ago", status: "completed" },
    { type: "Due Diligence", description: "Healthcare company review", date: "1 week ago", status: "in-progress" },
    { type: "Client Meeting", description: "Portfolio review with ABC Corp", date: "2 weeks ago", status: "completed" },
    { type: "Deal Sourcing", description: "New opportunity identified", date: "3 weeks ago", status: "pending" }
  ])

  const handleSave = () => {
    setIsEditing(false)
    // In a real app, this would save to the backend
    console.log("Profile saved:", profile)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setProfile({ ...originalProfile })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
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
          className="absolute top-40 right-20 w-24 h-24 border-2 border-rose-300/40 transform rotate-45"
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
        
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/30 via-rose-200/30 to-blue-200/30 animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Card className="glass-effect-8k overflow-hidden">
            <div className="relative">
              {/* Cover Image Placeholder */}
              <div className="h-48 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 relative">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 right-4">
                  <Button
                    onClick={() => setIsEditing(!isEditing)}
                    variant="outline"
                    className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                  >
                    {isEditing ? <X className="w-4 h-4 mr-2" /> : <Edit3 className="w-4 h-4 mr-2" />}
                    {isEditing ? 'Cancel' : 'Edit Profile'}
                  </Button>
                </div>
              </div>
              
              {/* Profile Info */}
              <div className="px-8 pb-8">
                <div className="flex flex-col md:flex-row items-start md:items-end gap-6 -mt-16">
                  {/* Profile Picture */}
                  <div className="w-32 h-32 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                    <User className="w-16 h-16 text-white" />
                  </div>
                  
                  {/* Profile Details */}
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2 bg-white/80 px-4 py-2 rounded-lg shadow-sm">
                      {isEditing ? (
                        <Input
                          value={profile.name}
                          onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                          className="text-4xl font-bold text-center md:text-left bg-white border-2 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                      ) : (
                        profile.name
                      )}
                    </h1>
                    <p className="text-xl text-gray-600 mb-2 bg-white/60 px-3 py-1 rounded-lg">
                      {isEditing ? (
                        <Input
                          value={profile.title}
                          onChange={(e) => setProfile(prev => ({ ...prev, title: e.target.value }))}
                          className="text-xl text-center md:text-left bg-white border-2 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                      ) : (
                        profile.title
                      )}
                    </p>
                    <p className="text-lg text-gray-500 mb-4 bg-white/60 px-3 py-1 rounded-lg">
                      {isEditing ? (
                        <Input
                          value={profile.company}
                          onChange={(e) => setProfile(prev => ({ ...prev, company: e.target.value }))}
                          className="text-lg text-center md:text-left bg-white border-2 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                      ) : (
                        profile.company
                      )}
                    </p>
                    
                    {/* Contact Info */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        {isEditing ? (
                          <Input
                            value={profile.email}
                            onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                            className="w-48 bg-white border-2 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                          />
                        ) : (
                          profile.email
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        {isEditing ? (
                          <Input
                            value={profile.phone}
                            onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                            className="w-40 bg-white border-2 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                          />
                        ) : (
                          profile.phone
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {isEditing ? (
                          <Input
                            value={profile.location}
                            onChange={(e) => setProfile(prev => ({ ...prev, location: e.target.value }))}
                            className="w-40 bg-white border-2 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                          />
                        ) : (
                          profile.location
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  {isEditing && (
                    <div className="flex gap-2">
                      <Button onClick={handleSave} className="finance-glow text-white">
                        <Save className="w-4 h-4 mr-2" />
                        Save
                      </Button>
                      <Button onClick={handleCancel} variant="outline">
                        <X className="w-4 h-4 mr-2" />
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Stats & Skills */}
          <div className="lg:col-span-1 space-y-6">
            {/* Key Statistics */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="glass-effect-8k">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-800">
                    <Activity className="w-5 h-5" />
                    Key Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { label: "Deals Completed", value: stats.dealsCompleted, icon: Target, color: "from-emerald-500 to-emerald-600" },
                    { label: "Total Value", value: stats.totalValue, icon: DollarSign, color: "from-blue-500 to-blue-600" },
                    { label: "Success Rate", value: stats.successRate, icon: Star, color: "from-yellow-500 to-yellow-600" },
                    { label: "Client Satisfaction", value: stats.clientSatisfaction, icon: Award, color: "from-purple-500 to-purple-600" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-white/50 rounded-lg"
                    >
                      <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-500">{stat.label}</div>
                        <div className="text-lg font-bold text-gray-800">{stat.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills & Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="glass-effect-8k">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-800">
                    <Zap className="w-5 h-5" />
                    Skills & Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Certifications</h4>
                    {isEditing ? (
                      <div className="space-y-2">
                        {profile.certifications.map((cert, index) => (
                          <div key={index} className="flex gap-2">
                            <Input
                              value={cert}
                              onChange={(e) => {
                                const newCerts = [...profile.certifications]
                                newCerts[index] = e.target.value
                                setProfile(prev => ({ ...prev, certifications: newCerts }))
                              }}
                              className="flex-1 bg-white border-2 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            />
                            <Button
                              onClick={() => {
                                const newCerts = profile.certifications.filter((_, i) => i !== index)
                                setProfile(prev => ({ ...prev, certifications: newCerts }))
                              }}
                              variant="outline"
                              size="sm"
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                        <Button
                          onClick={() => setProfile(prev => ({ ...prev, certifications: [...prev.certifications, ""] }))}
                          variant="outline"
                          size="sm"
                          className="w-full"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Add Certification
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {profile.certifications.map((cert, index) => (
                          <Badge key={index} className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Skills</h4>
                    {isEditing ? (
                      <div className="space-y-2">
                        {profile.skills.map((skill, index) => (
                          <div key={index} className="flex gap-2">
                            <Input
                              value={skill}
                              onChange={(e) => {
                                const newSkills = [...profile.skills]
                                newSkills[index] = e.target.value
                                setProfile(prev => ({ ...prev, skills: newSkills }))
                              }}
                              className="flex-1 bg-white border-2 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            />
                            <Button
                              onClick={() => {
                                const newSkills = profile.skills.filter((_, i) => i !== index)
                                setProfile(prev => ({ ...prev, skills: newSkills }))
                              }}
                              variant="outline"
                              size="sm"
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                        <Button
                          onClick={() => setProfile(prev => ({ ...prev, skills: [...prev.skills, ""] }))}
                          variant="outline"
                          size="sm"
                          className="w-full"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Add Skill
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {profile.skills.map((skill, index) => (
                          <Badge key={index} className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Languages</h4>
                    {isEditing ? (
                      <div className="space-y-2">
                        {profile.languages.map((language, index) => (
                          <div key={index} className="flex gap-2">
                            <Input
                              value={language}
                              onChange={(e) => {
                                const newLanguages = [...profile.languages]
                                newLanguages[index] = e.target.value
                                setProfile(prev => ({ ...prev, languages: newLanguages }))
                              }}
                              className="flex-1 bg-white border-2 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            />
                            <Button
                              onClick={() => {
                                const newLanguages = profile.languages.filter((_, i) => i !== index)
                                setProfile(prev => ({ ...prev, languages: newLanguages }))
                              }}
                              variant="outline"
                              size="sm"
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                        <Button
                          onClick={() => setProfile(prev => ({ ...prev, languages: [...prev.languages, ""] }))}
                          variant="outline"
                          size="sm"
                          className="w-full"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Add Language
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {profile.languages.map((language, index) => (
                          <Badge key={index} className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Bio & Activity */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="glass-effect-8k">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-800">
                    <User className="w-5 h-5" />
                    About Me
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <Textarea
                      value={profile.bio}
                      onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                      className="min-h-[120px] bg-white border-2 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none"
                      placeholder="Tell us about yourself..."
                    />
                  ) : (
                    <p className="text-gray-600 leading-relaxed">{profile.bio}</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card className="glass-effect-8k">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-800">
                    <Activity className="w-5 h-5" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                        className="flex items-center gap-4 p-3 bg-white/50 rounded-lg"
                      >
                        <div className={`w-3 h-3 rounded-full ${
                          activity.status === 'completed' ? 'bg-green-500' :
                          activity.status === 'in-progress' ? 'bg-yellow-500' : 'bg-blue-500'
                        }`} />
                        <div className="flex-1">
                          <div className="font-medium text-gray-800">{activity.type}</div>
                          <div className="text-sm text-gray-600">{activity.description}</div>
                        </div>
                        <div className="text-xs text-gray-500">{activity.date}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Card className="glass-effect-8k">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-800">
                    <Globe className="w-5 h-5" />
                    Social Links
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {isEditing ? (
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium text-gray-700">LinkedIn</label>
                          <Input
                            value={profile.social.linkedin}
                            onChange={(e) => setProfile(prev => ({ 
                              ...prev, 
                              social: { ...prev.social, linkedin: e.target.value } 
                            }))}
                            className="bg-white border-2 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            placeholder="linkedin.com/in/username"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700">Twitter</label>
                          <Input
                            value={profile.social.twitter}
                            onChange={(e) => setProfile(prev => ({ 
                              ...prev, 
                              social: { ...prev.social, twitter: e.target.value } 
                            }))}
                            className="bg-white border-2 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            placeholder="@username"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700">GitHub</label>
                          <Input
                            value={profile.social.github}
                            onChange={(e) => setProfile(prev => ({ 
                              ...prev, 
                              social: { ...prev.social, github: e.target.value } 
                            }))}
                            className="bg-white border-2 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            placeholder="github.com/username"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-4">
                        <Button variant="outline" className="flex items-center gap-2">
                          <Linkedin className="w-4 h-4" />
                          LinkedIn
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2">
                          <Twitter className="w-4 h-4" />
                          Twitter
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2">
                          <Github className="w-4 h-4" />
                          GitHub
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
