"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Target,
  TrendingUp,
  MapPin,
  DollarSign,
  Users,
  Building2,
  Lightbulb,
  BarChart3,
  CheckCircle,
  AlertTriangle,
  Info,
  Sparkles
} from "lucide-react"

interface MatchFactor {
  category: string
  score: number
  weight: number
  details: string
  positiveFactors: string[]
  concerns: string[]
  recommendations: string[]
}

interface MatchExplanationProps {
  matchFactors: MatchFactor[]
  buyerName: string
  businessName: string
}

export function MatchExplanation({ 
  matchFactors, 
  buyerName, 
  businessName 
}: MatchExplanationProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreBadgeColor = (score: number) => {
    if (score >= 80) return 'bg-green-100 text-green-800 border-green-200'
    if (score >= 60) return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    return 'bg-red-100 text-red-800 border-red-200'
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Industry Alignment': return <Building2 className="w-5 h-5" />
      case 'Financial Fit': return <DollarSign className="w-5 h-5" />
      case 'Location Fit': return <MapPin className="w-5 h-5" />
      case 'Size Fit': return <Users className="w-5 h-5" />
      case 'Timeline Fit': return <TrendingUp className="w-5 h-5" />
      default: return <Target className="w-5 h-5" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Industry Alignment': return 'from-blue-500 to-blue-600'
      case 'Financial Fit': return 'from-green-500 to-green-600'
      case 'Location Fit': return 'from-purple-500 to-purple-600'
      case 'Size Fit': return 'from-orange-500 to-orange-600'
      case 'Timeline Fit': return 'from-indigo-500 to-indigo-600'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const overallScore = matchFactors.reduce((acc, factor) => acc + (factor.score * factor.weight), 0) / 
                      matchFactors.reduce((acc, factor) => acc + factor.weight, 0)

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">AI Match Analysis</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover why {buyerName} and {businessName} are a great match, 
          with detailed insights powered by artificial intelligence.
        </p>
      </div>

      {/* Overall Match Score */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center text-blue-900">
            <Sparkles className="w-6 h-6 mr-2" />
            Overall Match Score
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text-6xl font-bold text-blue-900 mb-4">
            {Math.round(overallScore)}%
          </div>
          <div className="w-full bg-blue-200 rounded-full h-3 mb-4">
            <div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-1000"
              style={{ width: `${overallScore}%` }}
            />
          </div>
          <p className="text-blue-700 font-medium">
            {overallScore >= 80 ? 'Excellent Match' : 
             overallScore >= 60 ? 'Good Match' : 
             overallScore >= 40 ? 'Fair Match' : 'Poor Match'}
          </p>
        </CardContent>
      </Card>

      {/* Match Factors Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart3 className="w-5 h-5 mr-2" />
            Match Factors Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {matchFactors.map((factor) => (
              <div key={factor.category} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-gradient-to-r ${getCategoryColor(factor.category)} rounded-lg flex items-center justify-center`}>
                      {getCategoryIcon(factor.category)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{factor.category}</h4>
                      <p className="text-sm text-gray-600">Weight: {(factor.weight * 100).toFixed(0)}%</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${getScoreColor(factor.score)}`}>
                      {factor.score}%
                    </div>
                    <Badge variant="outline" className={getScoreBadgeColor(factor.score)}>
                      {factor.score >= 80 ? 'Excellent' : 
                       factor.score >= 60 ? 'Good' : 
                       factor.score >= 40 ? 'Fair' : 'Poor'}
                    </Badge>
                  </div>
                </div>

                <p className="text-sm text-gray-700 mb-3">{factor.details}</p>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700">Match Score</span>
                  <span className="text-sm text-gray-600">{factor.score}%</span>
                </div>
                <Progress value={factor.score} max={100} className="h-2 mb-4" />

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setExpandedCategory(expandedCategory === factor.category ? null : factor.category)}
                  className="w-full"
                >
                  {expandedCategory === factor.category ? 'Hide Details' : 'Show Details'}
                </Button>

                {expandedCategory === factor.category && (
                  <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                    {/* Positive Factors */}
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Positive Factors
                      </h5>
                      <div className="space-y-2">
                        {factor.positiveFactors.map((positive, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{positive}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Concerns */}
                    {factor.concerns.length > 0 && (
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                          <AlertTriangle className="w-4 h-4 text-orange-600 mr-2" />
                          Areas of Concern
                        </h5>
                        <div className="space-y-2">
                          {factor.concerns.map((concern, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{concern}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Recommendations */}
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                        <Lightbulb className="w-4 h-4 text-blue-600 mr-2" />
                        AI Recommendations
                      </h5>
                      <div className="space-y-2">
                        {factor.recommendations.map((recommendation, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{recommendation}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Insights Summary */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center text-green-900">
            <Lightbulb className="w-5 h-5 mr-2" />
            AI Match Insights Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-green-900 mb-3">Why This Match Works</h4>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-green-800">Strong alignment in business model and growth objectives</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-green-800">Financial capacity matches business valuation expectations</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-green-800">Timeline alignment for both parties</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-green-900 mb-3">Next Steps</h4>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <Target className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-green-800">Schedule initial meeting to discuss deal structure</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Target className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-green-800">Review detailed financial documentation</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Target className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-green-800">Begin due diligence process</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
          <Target className="w-4 h-4 mr-2" />
          Initiate Contact
        </Button>
        <Button variant="outline" size="lg">
          <Info className="w-4 h-4 mr-2" />
          Request More Details
        </Button>
        <Button variant="outline" size="lg">
          <BarChart3 className="w-4 h-4 mr-2" />
          View Full Analysis
        </Button>
      </div>
    </div>
  )
}
