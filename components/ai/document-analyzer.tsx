"use client"

import React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  FileText, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Download,
  Share2,
  Eye
} from "lucide-react"

interface DocumentAnalysisResult {
  id: string
  documentName: string
  documentType: string
  confidence: number
  keyFindings: string[]
  riskFactors: string[]
  recommendations: string[]
  financialMetrics: {
    revenue: number
    profitMargin: number
    growthRate: number
    debtRatio: number
  }
  status: 'completed' | 'processing' | 'error'
  analyzedAt: Date
}

interface DocumentAnalyzerProps {
  results: DocumentAnalysisResult[]
}

export function DocumentAnalyzer({ results }: DocumentAnalyzerProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200'
      case 'processing': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'error': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />
      case 'processing': return <TrendingUp className="w-4 h-4" />
      case 'error': return <AlertTriangle className="w-4 h-4" />
      default: return <FileText className="w-4 h-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">AI Document Analysis</h2>
        <Button variant="outline">
          <FileText className="w-4 h-4 mr-2" />
          Analyze New Document
        </Button>
      </div>

      <div className="grid gap-6">
        {results.map((result) => (
          <Card key={result.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {result.documentName}
                    </h3>
                    <Badge variant="outline" className={getStatusColor(result.status)}>
                      {getStatusIcon(result.status)}
                      <span className="ml-1">{result.status}</span>
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    {result.documentType} • Analyzed {result.analyzedAt.toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
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
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Financial Metrics */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Financial Metrics</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-sm text-blue-600 mb-1">Revenue</div>
                    <div className="text-lg font-semibold text-blue-900">
                      ${result.financialMetrics.revenue.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-sm text-green-600 mb-1">Profit Margin</div>
                    <div className="text-lg font-semibold text-green-900">
                      {(result.financialMetrics.profitMargin * 100).toFixed(1)}%
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <div className="text-sm text-purple-600 mb-1">Growth Rate</div>
                    <div className="text-lg font-semibold text-purple-900">
                      {(result.financialMetrics.growthRate * 100).toFixed(1)}%
                    </div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3">
                    <div className="text-sm text-orange-600 mb-1">Debt Ratio</div>
                    <div className="text-lg font-semibold text-orange-900">
                      {(result.financialMetrics.debtRatio * 100).toFixed(1)}%
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Findings */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Key Findings</h4>
                <div className="space-y-2">
                  {result.keyFindings.map((finding, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{finding}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Risk Factors */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Risk Factors</h4>
                <div className="space-y-2">
                  {result.riskFactors.map((risk, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{risk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Recommendations */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">AI Recommendations</h4>
                <div className="space-y-2">
                  {result.recommendations.map((recommendation, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <TrendingUp className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{recommendation}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Confidence Score */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">AI Confidence Score</span>
                  <Badge variant="secondary" className="text-sm">
                    {(result.confidence * 100).toFixed(1)}%
                  </Badge>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${result.confidence * 100}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
