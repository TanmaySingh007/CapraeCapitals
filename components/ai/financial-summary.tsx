"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  Info
} from "lucide-react"

interface FinancialMetric {
  name: string
  value: number
  change: number
  trend: 'up' | 'down' | 'stable'
  aiInsight: string
  riskLevel: 'low' | 'medium' | 'high'
  recommendation: string
}

interface FinancialSummaryProps {
  metrics: FinancialMetric[]
  businessName: string
  period: string
}

export function FinancialSummary({ metrics, businessName, period }: FinancialSummaryProps) {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-600" />
      case 'down': return <TrendingDown className="w-4 h-4 text-red-600" />
      default: return <BarChart3 className="w-4 h-4 text-gray-600" />
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-600'
      case 'down': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-100 text-green-800 border-green-200'
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'high': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'low': return <CheckCircle className="w-4 h-4" />
      case 'medium': return <AlertTriangle className="w-4 h-4" />
      case 'high': return <AlertTriangle className="w-4 h-4" />
      default: return <Info className="w-4 h-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Financial Summary</h2>
          <p className="text-gray-600">{businessName} • {period}</p>
        </div>
        <Button variant="outline">
          <Lightbulb className="w-4 h-4 mr-2" />
          Generate AI Report
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric) => (
          <Card key={metric.name} className="hover:shadow-lg transition-all duration-200 hover:scale-105">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-gray-900">{metric.name}</CardTitle>
                <Badge variant="outline" className={getRiskColor(metric.riskLevel)}>
                  {getRiskIcon(metric.riskLevel)}
                  <span className="ml-1">{metric.riskLevel}</span>
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Main Value */}
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {metric.name.includes('Revenue') || metric.name.includes('Profit') 
                    ? `$${metric.value.toLocaleString()}`
                    : metric.name.includes('Ratio') || metric.name.includes('Rate') || metric.name.includes('Margin')
                    ? `${(metric.value * 100).toFixed(1)}%`
                    : metric.value.toLocaleString()
                  }
                </div>
                
                {/* Change Indicator */}
                <div className={`flex items-center justify-center space-x-1 ${getTrendColor(metric.trend)}`}>
                  {getTrendIcon(metric.trend)}
                  <span className="text-sm font-medium">
                    {metric.change > 0 ? '+' : ''}{metric.change > 0 ? metric.change : Math.abs(metric.change)}
                    {metric.name.includes('Ratio') || metric.name.includes('Rate') || metric.name.includes('Margin') ? '%' : ''}
                  </span>
                  <span className="text-xs">vs last period</span>
                </div>
              </div>

              {/* AI Insight */}
              <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400">
                <div className="flex items-start space-x-2">
                  <Lightbulb className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-blue-900 mb-1">AI Insight</p>
                    <p className="text-xs text-blue-700">{metric.aiInsight}</p>
                  </div>
                </div>
              </div>

              {/* Recommendation */}
              <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-400">
                <div className="flex items-start space-x-2">
                  <TrendingUp className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-green-900 mb-1">Recommendation</p>
                    <p className="text-xs text-green-700">{metric.recommendation}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Summary Card */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center text-blue-900">
            <Lightbulb className="w-5 h-5 mr-2" />
            AI-Powered Financial Analysis Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-blue-900 mb-3">Key Strengths</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-blue-800">Strong revenue growth trajectory</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-blue-800">Healthy profit margins maintained</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-blue-800">Efficient cost management</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-blue-900 mb-3">Areas of Concern</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600" />
                  <span className="text-sm text-blue-800">Debt ratio trending upward</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600" />
                  <span className="text-sm text-blue-800">Cash flow volatility</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600" />
                  <span className="text-sm text-blue-800">Market concentration risk</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-blue-200">
            <h4 className="font-medium text-blue-900 mb-3">Strategic Recommendations</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <h5 className="font-medium text-blue-900 mb-2">Short-term (3-6 months)</h5>
                <p className="text-xs text-blue-700">Focus on cash flow management and debt reduction strategies</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <h5 className="font-medium text-blue-900 mb-2">Medium-term (6-12 months)</h5>
                <p className="text-xs text-blue-700">Diversify revenue streams and optimize operational efficiency</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <h5 className="font-medium text-blue-900 mb-2">Long-term (1-2 years)</h5>
                <p className="text-xs text-blue-700">Strategic market expansion and technology investments</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
