"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Send, 
  Bot, 
  User, 
  Lightbulb,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Sparkles
} from "lucide-react"

interface ChatMessage {
  id: string
  type: 'user' | 'ai'
  content: string
  timestamp: Date
  aiInsights?: {
    type: 'insight' | 'recommendation' | 'warning'
    content: string
    icon: React.ComponentType<{ className?: string }>
  }[]
}

export function AIChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hello! I'm your AI business advisor. I can help you with financial analysis, market insights, deal structuring, and strategic recommendations. What would you like to discuss today?",
      timestamp: new Date(),
      aiInsights: [
        {
          type: 'insight',
          content: 'I can analyze your business metrics and provide personalized insights',
          icon: Lightbulb
        }
      ]
    }
  ])
  
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue)
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (userInput: string): ChatMessage => {
    const lowerInput = userInput.toLowerCase()
    
    if (lowerInput.includes('valuation') || lowerInput.includes('worth')) {
      return {
        id: Date.now().toString(),
        type: 'ai',
        content: "Based on your business profile, I can help you estimate your company's valuation. I'll need to analyze your financial metrics, market position, and growth trajectory. Would you like me to walk you through the valuation process?",
        timestamp: new Date(),
        aiInsights: [
          {
            type: 'recommendation',
            content: 'Consider using our AI valuation estimator for a detailed analysis',
            icon: TrendingUp
          },
          {
            type: 'insight',
            content: 'Your industry typically commands 2.5-4x revenue multiples',
            icon: Lightbulb
          }
        ]
      }
    } else if (lowerInput.includes('risk') || lowerInput.includes('concern')) {
      return {
        id: Date.now().toString(),
        type: 'ai',
        content: "I can help you identify and assess business risks. Let me analyze your current risk profile and suggest mitigation strategies. What specific areas are you concerned about?",
        timestamp: new Date(),
        aiInsights: [
          {
            type: 'warning',
            content: 'Market concentration risk detected in your current portfolio',
            icon: AlertTriangle
          },
          {
            type: 'recommendation',
            content: 'Consider diversifying your customer base to reduce risk',
            icon: CheckCircle
          }
        ]
      }
    } else if (lowerInput.includes('growth') || lowerInput.includes('expand')) {
      return {
        id: Date.now().toString(),
        content: "Growth strategies are crucial for business success. I can help you identify opportunities, assess market potential, and develop expansion plans. What type of growth are you considering?",
        timestamp: new Date(),
        type: 'ai',
        aiInsights: [
          {
            type: 'insight',
            content: 'Your current growth rate of 20% is above industry average',
            icon: TrendingUp
          },
          {
            type: 'recommendation',
            content: 'Consider strategic partnerships for faster market entry',
            icon: Lightbulb
          }
        ]
      }
    } else {
      return {
        id: Date.now().toString(),
        type: 'ai',
        content: "That's an interesting question! I can help you with various aspects of your business, including financial analysis, market research, deal structuring, and strategic planning. Could you provide more specific details about what you'd like to explore?",
        timestamp: new Date(),
        aiInsights: [
          {
            type: 'insight',
            content: 'I can access real-time market data and industry benchmarks',
            icon: Lightbulb
          }
        ]
      }
    }
  }

  const getInsightColor = (type: string) => {
    switch (type) {
      case 'insight': return 'bg-blue-50 border-blue-200 text-blue-800'
      case 'recommendation': return 'bg-green-50 border-green-200 text-green-800'
      case 'warning': return 'bg-orange-50 border-orange-200 text-orange-800'
      default: return 'bg-gray-50 border-gray-200 text-gray-800'
    }
  }

  const getInsightIconColor = (type: string) => {
    switch (type) {
      case 'insight': return 'text-blue-600'
      case 'recommendation': return 'text-green-600'
      case 'warning': return 'text-orange-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">AI Business Advisor</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get instant insights, recommendations, and analysis from our AI-powered business advisor. 
          Ask questions about valuation, risk assessment, growth strategies, and more.
        </p>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
          <CardTitle className="flex items-center text-blue-900">
            <Bot className="w-5 h-5 mr-2" />
            AI Business Advisor Chat
            <Badge variant="secondary" className="ml-2">
              <Sparkles className="w-3 h-3 mr-1" />
              AI Powered
            </Badge>
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                  <div className={`flex items-start space-x-2 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                    }`}>
                      {message.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    
                    <div className={`rounded-lg px-4 py-2 ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                      
                      {/* AI Insights */}
                      {message.aiInsights && (
                        <div className="mt-3 space-y-2">
                          {message.aiInsights.map((insight, index) => {
                            const Icon = insight.icon
                            return (
                              <div key={index} className={`flex items-start space-x-2 p-2 rounded border ${getInsightColor(insight.type)}`}>
                                <Icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${getInsightIconColor(insight.type)}`} />
                                <span className="text-xs">{insight.content}</span>
                              </div>
                            )
                          })}
                        </div>
                      )}
                      
                      <div className={`text-xs mt-2 ${
                        message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-xs lg:max-w-md">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-100 rounded-lg px-4 py-2">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t p-4">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me about your business, valuation, risks, or growth strategies..."
                className="flex-1"
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="mt-3 text-xs text-gray-500 text-center">
              AI responses are for informational purposes only. Always consult with qualified professionals for business decisions.
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Questions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            "What's my business worth?",
            "How can I reduce risks?",
            "Growth opportunities?",
            "Market analysis"
          ].map((question, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => setInputValue(question)}
              className="text-xs h-auto py-2 px-3 text-left"
            >
              {question}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
