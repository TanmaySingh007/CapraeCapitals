"use client"

import React, { useState } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  FileText, 
  Upload, 
  Download,
  Share2,
  MessageCircle,
  Calendar,
  Users,
  TrendingUp,
  BarChart3,
  Lightbulb,
  Target,
  Flag,
  Send,
  Paperclip,
  Eye,
  Edit,
  Plus
} from "lucide-react"
import { mockMatches, mockDealRooms } from "@/lib/mock-data"

interface Milestone {
  id: string
  title: string
  description: string
  status: 'completed' | 'in-progress' | 'pending' | 'blocked'
  dueDate: string
  assignee: string
}

interface Document {
  id: string
  name: string
  type: string
  size: string
  uploadedBy: string
  uploadedAt: string
  status: 'pending' | 'approved' | 'rejected'
}

interface Message {
  id: string
  sender: string
  content: string
  timestamp: string
  attachments: string[]
}

export default function AcquisitionPage() {
  const params = useParams()
  const [activeTab, setActiveTab] = useState<'pipeline' | 'documents' | 'communication' | 'insights'>('pipeline')
  
  // In a real app, this would fetch from an API
  const match = mockMatches.find(m => m.id === params.id)
  const dealRoom = mockDealRooms.find(d => d.matchId === params.id)
  
  // Mock data for display - in a real app this would come from the API
  const mockBuyer = { firstName: 'John', lastName: 'Smith' }
  const mockSeller = { companyName: 'TechCorp Solutions' }
  const mockEstimatedValue = 2500000
  
  if (!match || !dealRoom) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Deal Not Found</h1>
          <p className="text-gray-600 mb-8">The requested acquisition deal could not be found.</p>
          <Button onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    )
  }

  // Mock milestones data
  const milestones: Milestone[] = [
    {
      id: '1',
      title: 'Initial Meeting',
      description: 'First meeting between buyer and seller',
      status: 'completed',
      dueDate: '2024-01-15',
      assignee: 'John Smith'
    },
    {
      id: '2',
      title: 'Letter of Intent',
      description: 'Submit and review LOI terms',
      status: 'completed',
      dueDate: '2024-01-30',
      assignee: 'Sarah Johnson'
    },
    {
      id: '3',
      title: 'Due Diligence',
      description: 'Financial and operational review',
      status: 'in-progress',
      dueDate: '2024-03-15',
      assignee: 'Mike Davis'
    },
    {
      id: '4',
      title: 'Purchase Agreement',
      description: 'Draft and negotiate final terms',
      status: 'pending',
      dueDate: '2024-04-30',
      assignee: 'Legal Team'
    },
    {
      id: '5',
      title: 'Closing',
      description: 'Finalize transaction and transfer ownership',
      status: 'pending',
      dueDate: '2024-06-15',
      assignee: 'All Parties'
    }
  ]

  // Mock documents data
  const documents: Document[] = [
    {
      id: '1',
      name: 'Financial Statements 2023.pdf',
      type: 'Financial',
      size: '2.4 MB',
      uploadedBy: 'Seller',
      uploadedAt: '2024-01-20',
      status: 'approved'
    },
    {
      id: '2',
      name: 'Business Plan.pdf',
      type: 'Strategic',
      size: '1.8 MB',
      uploadedBy: 'Seller',
      uploadedAt: '2024-01-25',
      status: 'pending'
    },
    {
      id: '3',
      name: 'Due Diligence Checklist.xlsx',
      type: 'Process',
      size: '156 KB',
      uploadedBy: 'Buyer',
      uploadedAt: '2024-02-01',
      status: 'approved'
    }
  ]

  // Mock messages data
  const messages: Message[] = [
    {
      id: '1',
      sender: 'John Smith (Buyer)',
      content: 'Great meeting today! Looking forward to reviewing the financial documents.',
      timestamp: '2024-01-20 14:30',
      attachments: []
    },
    {
      id: '2',
      sender: 'Sarah Johnson (Seller)',
      content: 'Thanks John! I\'ll upload the Q4 financials by end of day.',
      timestamp: '2024-01-20 15:45',
      attachments: ['Q4_Financials.pdf']
    },
    {
      id: '3',
      sender: 'Mike Davis (Advisor)',
      content: 'Due diligence team is ready to begin next week. Please confirm access to the data room.',
      timestamp: '2024-01-21 09:15',
      attachments: []
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200'
      case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'blocked': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />
      case 'in-progress': return <Clock className="w-4 h-4" />
      case 'pending': return <AlertCircle className="w-4 h-4" />
      case 'blocked': return <AlertCircle className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  const tabs = [
    { id: 'pipeline', label: 'Pipeline', icon: BarChart3 },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'communication', label: 'Communication', icon: MessageCircle },
    { id: 'insights', label: 'AI Insights', icon: Lightbulb }
  ]

  const overallProgress = (milestones.filter(m => m.status === 'completed').length / milestones.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => window.history.back()}
                className="text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div className="h-6 w-px bg-gray-300" />
              <nav className="flex space-x-1">
                <span className="text-sm text-gray-500">Acquisitions</span>
                <span className="text-sm text-gray-400">/</span>
                <span className="text-sm text-gray-500">Deal #{match.id}</span>
              </nav>
            </div>
            
            <div className="flex items-center space-x-3">
              <Badge variant="outline" className={getStatusColor(dealRoom.status)}>
                {dealRoom.status}
              </Badge>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button size="sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Deal Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {mockBuyer.firstName} {mockBuyer.lastName} → {mockSeller.companyName}
              </h1>
              <p className="text-gray-600 mb-6">
                Acquisition deal in progress. Estimated value: ${mockEstimatedValue.toLocaleString()}
              </p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                    <span className="text-sm text-gray-500">{Math.round(overallProgress)}%</span>
                  </div>
                  <Progress value={overallProgress} max={100} className="h-3" />
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">
                      {milestones.filter(m => m.status === 'completed').length}
                    </div>
                    <div className="text-sm text-blue-600">Completed</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-600">
                      {milestones.filter(m => m.status === 'in-progress').length}
                    </div>
                    <div className="text-sm text-yellow-600">In Progress</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-gray-600">
                      {milestones.filter(m => m.status === 'pending').length}
                    </div>
                    <div className="text-sm text-gray-600">Pending</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Deal Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Status</span>
                    <Badge variant="outline" className={getStatusColor(dealRoom.status)}>
                      {dealRoom.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Match Date</span>
                    <span className="text-sm font-medium">{match.createdAt.toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Last Activity</span>
                    <span className="text-sm font-medium">{match.lastActivityAt.toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Meeting
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Document
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as 'pipeline' | 'documents' | 'communication' | 'insights')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-4 h-4 inline mr-2" />
                    {tab.label}
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'pipeline' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">Deal Pipeline</h3>
                <Button variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Milestone
                </Button>
              </div>
              
              <div className="grid gap-6">
                {milestones.map((milestone) => (
                  <Card key={milestone.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(milestone.status)}`}>
                          {getStatusIcon(milestone.status)}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900">{milestone.title}</h4>
                              <p className="text-gray-600">{milestone.description}</p>
                            </div>
                            <div className="text-right">
                              <Badge variant="outline" className={getStatusColor(milestone.status)}>
                                {milestone.status.replace('-', ' ')}
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center space-x-4">
                              <span>Due: {milestone.dueDate}</span>
                              <span>Assignee: {milestone.assignee}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">Document Center</h3>
                <Button>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Document
                </Button>
              </div>
              
              <div className="grid gap-4">
                {documents.map((doc) => (
                  <Card key={doc.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <FileText className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{doc.name}</h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span>{doc.type}</span>
                              <span>{doc.size}</span>
                              <span>Uploaded by {doc.uploadedBy}</span>
                              <span>{doc.uploadedAt}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className={getStatusColor(doc.status)}>
                            {doc.status}
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'communication' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">Communication Thread</h3>
                <Button>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </div>
              
              <div className="space-y-4">
                {messages.map((message) => (
                  <Card key={message.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-gray-600" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-gray-900">{message.sender}</h4>
                            <span className="text-sm text-gray-500">{message.timestamp}</span>
                          </div>
                          
                          <p className="text-gray-700 mb-3">{message.content}</p>
                          
                          {message.attachments.length > 0 && (
                            <div className="flex items-center space-x-2">
                              <Paperclip className="w-4 h-4 text-gray-400" />
                              {message.attachments.map((attachment, index) => (
                                <Button key={index} variant="ghost" size="sm">
                                  {attachment}
                                </Button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button variant="outline">
                      <Paperclip className="w-4 h-4" />
                    </Button>
                    <Button>
                      <Send className="w-4 h-4 mr-2" />
                      Send
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'insights' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">AI-Powered Insights</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Lightbulb className="w-5 h-5 mr-2 text-yellow-600" />
                      Deal Risk Assessment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Overall Risk</span>
                        <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                          Low
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Financial Risk</span>
                          <span className="text-green-600">Low</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Operational Risk</span>
                          <span className="text-yellow-600">Medium</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Market Risk</span>
                          <span className="text-green-600">Low</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                      Market Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-sm text-gray-600">
                        <p className="mb-2">Industry trends show strong growth potential in this sector.</p>
                        <p>Market conditions are favorable for this type of acquisition.</p>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Market Growth</span>
                        <span className="text-green-600 font-medium">+12% YoY</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="w-5 h-5 mr-2 text-blue-600" />
                      Timeline Optimization
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-sm text-gray-600">
                        <p className="mb-2">Due diligence phase can be accelerated by 2 weeks.</p>
                        <p>Consider parallel processing for document review.</p>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Potential Savings</span>
                        <span className="text-blue-600 font-medium">2 weeks</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Flag className="w-5 h-5 mr-2 text-purple-600" />
                      Next Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-sm text-gray-600">
                        <p className="mb-2">Recommended actions based on current progress:</p>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          Complete financial document review
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          Schedule legal team meeting
                        </li>
                        <li className="flex items-center">
                          <Clock className="w-4 h-4 text-yellow-600 mr-2" />
                          Prepare LOI for next phase
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
