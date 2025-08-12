"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Calculator,
  DollarSign,
  Lightbulb,
  Target,
  AlertTriangle,
  CheckCircle
} from "lucide-react"

interface ValuationInput {
  annualRevenue: number
  profitMargin: number
  growthRate: number
  industry: string
  employeeCount: number
  marketPosition: 'leader' | 'challenger' | 'niche' | 'startup'
  customerRetention: number
  intellectualProperty: boolean
  geographicReach: 'local' | 'regional' | 'national' | 'international'
}

interface ValuationResult {
  estimatedValue: number
  confidence: number
  valuationRange: {
    low: number
    high: number
  }
  multipliers: {
    revenue: number
    profit: number
    growth: number
  }
  factors: {
    positive: string[]
    negative: string[]
  }
  recommendations: string[]
  riskAssessment: 'low' | 'medium' | 'high'
}

export function ValuationEstimator() {
  const [inputs, setInputs] = useState<ValuationInput>({
    annualRevenue: 1000000,
    profitMargin: 0.15,
    growthRate: 0.20,
    industry: 'Technology',
    employeeCount: 25,
    marketPosition: 'challenger',
    customerRetention: 0.85,
    intellectualProperty: true,
    geographicReach: 'regional'
  })

  const [result, setResult] = useState<ValuationResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const handleInputChange = (field: keyof ValuationInput, value: string | number | boolean) => {
    setInputs(prev => ({ ...prev, [field]: value }))
  }

  const calculateValuation = async () => {
    setIsCalculating(true)

    // Simulate AI calculation delay
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Mock AI calculation logic
    const baseMultiplier = 2.5
    const revenueMultiplier = baseMultiplier * (1 + inputs.growthRate)
    const profitMultiplier = baseMultiplier * (1 + inputs.profitMargin)

    const estimatedValue = inputs.annualRevenue * revenueMultiplier * profitMultiplier

    // Adjust for market position
    const marketPositionMultiplier = {
      leader: 1.3,
      challenger: 1.1,
      niche: 0.9,
      startup: 0.7
    }[inputs.marketPosition]

    const adjustedValue = estimatedValue * marketPositionMultiplier

    // Adjust for IP and geographic reach
    const ipMultiplier = inputs.intellectualProperty ? 1.2 : 1.0
    const geoMultiplier = {
      local: 0.8,
      regional: 1.0,
      national: 1.3,
      international: 1.6
    }[inputs.geographicReach]

    const finalValue = adjustedValue * ipMultiplier * geoMultiplier

    const confidence = Math.min(0.95, 0.7 + (inputs.customerRetention * 0.2) + (inputs.growthRate * 0.1))

    setResult({
      estimatedValue: finalValue,
      confidence,
      valuationRange: {
        low: finalValue * 0.8,
        high: finalValue * 1.2
      },
      multipliers: {
        revenue: revenueMultiplier,
        profit: profitMultiplier,
        growth: baseMultiplier
      },
      factors: {
        positive: [
          'Strong growth trajectory',
          'Healthy profit margins',
          'Intellectual property assets',
          'Customer retention above industry average'
        ],
        negative: [
          'Market position could be stronger',
          'Geographic concentration risk',
          'Dependency on key personnel'
        ]
      },
      recommendations: [
        'Strengthen market positioning through strategic partnerships',
        'Expand geographic reach to reduce concentration risk',
        'Develop additional IP assets to increase valuation',
        'Implement customer success programs to improve retention'
      ],
      riskAssessment: confidence > 0.8 ? 'low' : confidence > 0.6 ? 'medium' : 'high'
    })

    setIsCalculating(false)
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-100 text-green-800 border-green-200'
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'high': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">AI Business Valuation Estimator</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get an AI-powered estimate of your business value based on financial metrics,
          market position, and industry benchmarks.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calculator className="w-5 h-5 mr-2" />
              Business Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Annual Revenue
                </label>
                <Input
                  type="number"
                  value={inputs.annualRevenue}
                  onChange={(e) => handleInputChange('annualRevenue', parseFloat(e.target.value) || 0)}
                  placeholder="1000000"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Profit Margin
                </label>
                <Input
                  type="number"
                  step="0.01"
                  value={inputs.profitMargin}
                  onChange={(e) => handleInputChange('profitMargin', parseFloat(e.target.value) || 0)}
                  placeholder="0.15"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Growth Rate
                </label>
                <Input
                  type="number"
                  step="0.01"
                  value={inputs.growthRate}
                  onChange={(e) => handleInputChange('growthRate', parseFloat(e.target.value) || 0)}
                  placeholder="0.20"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Employee Count
                </label>
                <Input
                  type="number"
                  value={inputs.employeeCount}
                  onChange={(e) => handleInputChange('employeeCount', parseInt(e.target.value) || 0)}
                  placeholder="25"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Industry
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={inputs.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
              >
                <option value="Technology">Technology</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Retail">Retail</option>
                <option value="Services">Services</option>
                <option value="Finance">Finance</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Market Position
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={inputs.marketPosition}
                  onChange={(e) => handleInputChange('marketPosition', e.target.value as 'leader' | 'challenger' | 'niche' | 'startup')}
                >
                  <option value="startup">Startup</option>
                  <option value="niche">Niche Player</option>
                  <option value="challenger">Challenger</option>
                  <option value="leader">Market Leader</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Geographic Reach
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={inputs.geographicReach}
                  onChange={(e) => handleInputChange('geographicReach', e.target.value as 'local' | 'regional' | 'national' | 'international')}
                >
                  <option value="local">Local</option>
                  <option value="regional">Regional</option>
                  <option value="national">National</option>
                  <option value="international">International</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Customer Retention
                </label>
                <Input
                  type="number"
                  step="0.01"
                  value={inputs.customerRetention}
                  onChange={(e) => handleInputChange('customerRetention', parseFloat(e.target.value) || 0)}
                  placeholder="0.85"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="intellectualProperty"
                  checked={inputs.intellectualProperty}
                  onChange={(e) => handleInputChange('intellectualProperty', e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="intellectualProperty" className="text-sm font-medium text-gray-700">
                  Intellectual Property
                </label>
              </div>
            </div>

            <Button
              onClick={calculateValuation}
              disabled={isCalculating}
              className="w-full"
              size="lg"
            >
              {isCalculating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Calculating...
                </>
              ) : (
                <>
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate Valuation
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="space-y-6">
          {result && (
            <>
              {/* Main Valuation */}
              <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-900">
                    <DollarSign className="w-5 h-5 mr-2" />
                    Estimated Business Value
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-blue-900 mb-2">
                      ${result.estimatedValue.toLocaleString()}
                    </div>
                    <p className="text-blue-700">
                      Range: ${result.valuationRange.low.toLocaleString()} - ${result.valuationRange.high.toLocaleString()}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-900">AI Confidence</span>
                        <Badge variant="outline" className={getRiskColor(result.riskAssessment)}>
                          {(result.confidence * 100).toFixed(1)}%
                        </Badge>
                      </div>
                      <Progress value={result.confidence * 100} max={100} className="h-2" />
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-white rounded-lg p-3 border border-blue-200">
                        <div className="text-sm text-blue-600 mb-1">Revenue Multiplier</div>
                        <div className="text-lg font-semibold text-blue-900">
                          {result.multipliers.revenue.toFixed(2)}x
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-blue-200">
                        <div className="text-sm text-blue-600 mb-1">Profit Multiplier</div>
                        <div className="text-lg font-semibold text-blue-900">
                          {result.multipliers.profit.toFixed(2)}x
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-blue-200">
                        <div className="text-sm text-blue-600 mb-1">Base Multiplier</div>
                        <div className="text-lg font-semibold text-blue-900">
                          {result.multipliers.growth.toFixed(2)}x
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AI Analysis */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2" />
                    AI Analysis & Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Positive Factors</h4>
                    <div className="space-y-2">
                      {result.factors.positive.map((factor, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-700">{factor}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Areas for Improvement</h4>
                    <div className="space-y-2">
                      {result.factors.negative.map((factor, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-orange-600" />
                          <span className="text-sm text-gray-700">{factor}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Strategic Recommendations</h4>
                    <div className="space-y-2">
                      {result.recommendations.map((recommendation, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Target className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{recommendation}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {!result && (
            <Card className="text-center py-12">
              <Calculator className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Ready to Calculate</h3>
              <p className="text-gray-600">
                Fill in your business information and click &ldquo;Calculate Valuation&rdquo;
                to get an AI-powered estimate of your business value.
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
