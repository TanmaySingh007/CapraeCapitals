"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Settings,
  User,
  Bell,
  Shield,
  Lock,
  Eye,
  EyeOff,
  Save,
  X,
  Edit3,
  Palette,
  Globe,
  Smartphone,
  Mail,
  Key,
  Trash2,
  Download,
  Upload,
  Database,
  Zap,
  Rocket,
  Sparkles,
  Activity,
  BarChart3,
  PieChart,
  LineChart,
  CreditCard,
  FileText,
  Users,
  Building2
} from "lucide-react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')
  const [isEditing, setIsEditing] = useState(false)
  const [settings, setSettings] = useState({
    profile: {
      firstName: "Alexandra",
      lastName: "Chen",
      email: "alexandra.chen@caprae.com",
      phone: "+1 (555) 123-4567",
      timezone: "America/Los_Angeles",
      language: "English"
    },
    notifications: {
      email: true,
      push: true,
      sms: false,
      dealAlerts: true,
      marketUpdates: true,
      weeklyReports: true
    },
    security: {
      twoFactor: true,
      biometric: false,
      sessionTimeout: 30,
      passwordExpiry: 90
    },
    appearance: {
      theme: "light",
      fontSize: "medium",
      compactMode: false,
      animations: true
    }
  })

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'data', label: 'Data & Privacy', icon: Database }
  ]

  const handleSave = () => {
    setIsEditing(false)
    // In a real app, this would save to the backend
  }

  const handleCancel = () => {
    setIsEditing(false)
    // Reset to original values
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Enhanced 8K Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Financial Elements */}
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
          className="absolute top-40 right-20 w-24 h-24 border-2 border-blue-300/40 transform rotate-45"
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
        <div className="absolute inset-0 bg-gradient-to-br from-rose-200/30 via-blue-200/30 to-indigo-200/30 animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-rose-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl animate-finance-bounce">
              <Settings className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 text-shadow-8k">
              Settings
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Customize your experience and manage your account preferences
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="glass-effect-8k">
              <CardContent className="p-4">
                <nav className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon
                    const isActive = activeTab === tab.id
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 text-left ${
                          isActive
                            ? 'bg-blue-100/80 text-blue-800 shadow-lg'
                            : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/80'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{tab.label}</span>
                      </button>
                    )
                  })}
                </nav>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Profile Settings */}
                {activeTab === 'profile' && (
                  <Card className="glass-effect-8k">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="flex items-center gap-2 text-gray-800">
                            <User className="w-5 h-5" />
                            Profile Information
                          </CardTitle>
                          <CardDescription>
                            Update your personal information and contact details
                          </CardDescription>
                        </div>
                        <Button
                          onClick={() => setIsEditing(!isEditing)}
                          variant="outline"
                        >
                          {isEditing ? <X className="w-4 h-4 mr-2" /> : <Edit3 className="w-4 h-4 mr-2" />}
                          {isEditing ? 'Cancel' : 'Edit'}
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            value={settings.profile.firstName}
                            onChange={(e) => setSettings(prev => ({
                              ...prev,
                              profile: { ...prev.profile, firstName: e.target.value }
                            }))}
                            disabled={!isEditing}
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={settings.profile.lastName}
                            onChange={(e) => setSettings(prev => ({
                              ...prev,
                              profile: { ...prev.profile, lastName: e.target.value }
                            }))}
                            disabled={!isEditing}
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={settings.profile.email}
                            onChange={(e) => setSettings(prev => ({
                              ...prev,
                              profile: { ...prev.profile, email: e.target.value }
                            }))}
                            disabled={!isEditing}
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            value={settings.profile.phone}
                            onChange={(e) => setSettings(prev => ({
                              ...prev,
                              profile: { ...prev.profile, phone: e.target.value }
                            }))}
                            disabled={!isEditing}
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="timezone">Timezone</Label>
                          <Select
                            value={settings.profile.timezone}
                            onValueChange={(value) => setSettings(prev => ({
                              ...prev,
                              profile: { ...prev.profile, timezone: value }
                            }))}
                            disabled={!isEditing}
                          >
                            <SelectTrigger className="mt-2">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="America/Los_Angeles">Pacific Time</SelectItem>
                              <SelectItem value="America/Denver">Mountain Time</SelectItem>
                              <SelectItem value="America/Chicago">Central Time</SelectItem>
                              <SelectItem value="America/New_York">Eastern Time</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="language">Language</Label>
                          <Select
                            value={settings.profile.language}
                            onValueChange={(value) => setSettings(prev => ({
                              ...prev,
                              profile: { ...prev.profile, language: value }
                            }))}
                            disabled={!isEditing}
                          >
                            <SelectTrigger className="mt-2">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="English">English</SelectItem>
                              <SelectItem value="Spanish">Spanish</SelectItem>
                              <SelectItem value="French">French</SelectItem>
                              <SelectItem value="German">German</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      {isEditing && (
                        <div className="flex gap-3 pt-4">
                          <Button onClick={handleSave} className="finance-glow text-white">
                            <Save className="w-4 h-4 mr-2" />
                            Save Changes
                          </Button>
                          <Button onClick={handleCancel} variant="outline">
                            <X className="w-4 h-4 mr-2" />
                            Cancel
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}

                {/* Notification Settings */}
                {activeTab === 'notifications' && (
                  <Card className="glass-effect-8k">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-gray-800">
                        <Bell className="w-5 h-5" />
                        Notification Preferences
                      </CardTitle>
                      <CardDescription>
                        Choose how and when you want to be notified
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {Object.entries(settings.notifications).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                          <div>
                            <Label className="text-base font-medium capitalize">
                              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                            </Label>
                            <p className="text-sm text-gray-500 mt-1">
                              Receive notifications about {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                            </p>
                          </div>
                          <Switch
                            checked={value}
                            onCheckedChange={(checked) => setSettings(prev => ({
                              ...prev,
                              notifications: { ...prev.notifications, [key]: checked }
                            }))}
                          />
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}

                {/* Security Settings */}
                {activeTab === 'security' && (
                  <Card className="glass-effect-8k">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-gray-800">
                        <Shield className="w-5 h-5" />
                        Security Settings
                      </CardTitle>
                      <CardDescription>
                        Manage your account security and authentication
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label className="text-base font-medium">Two-Factor Authentication</Label>
                            <p className="text-sm text-gray-500 mt-1">
                              Add an extra layer of security to your account
                            </p>
                          </div>
                          <Switch
                            checked={settings.security.twoFactor}
                            onCheckedChange={(checked) => setSettings(prev => ({
                              ...prev,
                              security: { ...prev.security, twoFactor: checked }
                            }))}
                          />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <Label className="text-base font-medium">Biometric Authentication</Label>
                            <p className="text-sm text-gray-500 mt-1">
                              Use fingerprint or face recognition
                            </p>
                          </div>
                          <Switch
                            checked={settings.security.biometric}
                            onCheckedChange={(checked) => setSettings(prev => ({
                              ...prev,
                              security: { ...prev.security, biometric: checked }
                            }))}
                          />
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                          <Select
                            value={settings.security.sessionTimeout.toString()}
                            onValueChange={(value) => setSettings(prev => ({
                              ...prev,
                              security: { ...prev.security, sessionTimeout: parseInt(value) }
                            }))}
                          >
                            <SelectTrigger className="mt-2">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="15">15 minutes</SelectItem>
                              <SelectItem value="30">30 minutes</SelectItem>
                              <SelectItem value="60">1 hour</SelectItem>
                              <SelectItem value="120">2 hours</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="passwordExpiry">Password Expiry (days)</Label>
                          <Select
                            value={settings.security.passwordExpiry.toString()}
                            onValueChange={(value) => setSettings(prev => ({
                              ...prev,
                              security: { ...prev.security, passwordExpiry: parseInt(value) }
                            }))}
                          >
                            <SelectTrigger className="mt-2">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="30">30 days</SelectItem>
                              <SelectItem value="60">60 days</SelectItem>
                              <SelectItem value="90">90 days</SelectItem>
                              <SelectItem value="180">180 days</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Appearance Settings */}
                {activeTab === 'appearance' && (
                  <Card className="glass-effect-8k">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-gray-800">
                        <Palette className="w-5 h-5" />
                        Appearance & Theme
                      </CardTitle>
                      <CardDescription>
                        Customize the look and feel of your interface
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="theme">Theme</Label>
                          <Select
                            value={settings.appearance.theme}
                            onValueChange={(value) => setSettings(prev => ({
                              ...prev,
                              appearance: { ...prev.appearance, theme: value }
                            }))}
                          >
                            <SelectTrigger className="mt-2">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">Light</SelectItem>
                              <SelectItem value="dark">Dark</SelectItem>
                              <SelectItem value="auto">Auto</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="fontSize">Font Size</Label>
                          <Select
                            value={settings.appearance.fontSize}
                            onValueChange={(value) => setSettings(prev => ({
                              ...prev,
                              appearance: { ...prev.appearance, fontSize: value }
                            }))}
                          >
                            <SelectTrigger className="mt-2">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="small">Small</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="large">Large</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label className="text-base font-medium">Compact Mode</Label>
                            <p className="text-sm text-gray-500 mt-1">
                              Reduce spacing for a more compact layout
                            </p>
                          </div>
                          <Switch
                            checked={settings.appearance.compactMode}
                            onCheckedChange={(checked) => setSettings(prev => ({
                              ...prev,
                              appearance: { ...prev.appearance, compactMode: checked }
                            }))}
                          />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <Label className="text-base font-medium">Animations</Label>
                            <p className="text-sm text-gray-500 mt-1">
                              Enable smooth transitions and animations
                            </p>
                          </div>
                          <Switch
                            checked={settings.appearance.animations}
                            onCheckedChange={(checked) => setSettings(prev => ({
                              ...prev,
                              appearance: { ...prev.appearance, animations: checked }
                            }))}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Billing Settings */}
                {activeTab === 'billing' && (
                  <Card className="glass-effect-8k">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-gray-800">
                        <CreditCard className="w-5 h-5" />
                        Billing & Subscription
                      </CardTitle>
                      <CardDescription>
                        Manage your subscription and payment methods
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg p-6 text-white">
                        <h3 className="text-xl font-semibold mb-2">Premium Plan</h3>
                        <p className="text-emerald-100 mb-4">You&apos;re currently on our premium plan with full access to all features.</p>
                        <div className="flex items-center gap-4">
                          <Badge className="bg-white/20 text-white">Active</Badge>
                          <span className="text-sm">Next billing: March 15, 2024</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Button variant="outline" className="w-full">
                          <CreditCard className="w-4 h-4 mr-2" />
                          Update Payment Method
                        </Button>
                        <Button variant="outline" className="w-full">
                          <FileText className="w-4 h-4 mr-2" />
                          View Billing History
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Data & Privacy Settings */}
                {activeTab === 'data' && (
                  <Card className="glass-effect-8k">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-gray-800">
                        <Database className="w-5 h-5" />
                        Data & Privacy
                      </CardTitle>
                      <CardDescription>
                        Control your data and privacy settings
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Button variant="outline" className="w-full">
                          <Download className="w-4 h-4 mr-2" />
                          Export My Data
                        </Button>
                        <Button variant="outline" className="w-full">
                          <Upload className="w-4 h-4 mr-2" />
                          Import Data
                        </Button>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label className="text-base font-medium">Data Analytics</Label>
                            <p className="text-sm text-gray-500 mt-1">
                              Allow us to use your data for improving our services
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <Label className="text-base font-medium">Marketing Communications</Label>
                            <p className="text-sm text-gray-500 mt-1">
                              Receive updates about new features and promotions
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <Button variant="destructive" className="w-full">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete Account
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
