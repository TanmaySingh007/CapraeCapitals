"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  AlertTriangle,
  Shield,
  TrendingDown,
  CheckCircle,
  BarChart3,
  Target,
  Lightbulb,
  Activity
} from "lucide-react"

interface RiskFactor {
  id: string
  name: string
  category: 'financial' | 'operational' | 'market' | 'regulatory' | 'strategic'
  probability: number // 0-1
  impact: number // 0-1
  riskScore: number // probability * impact
  description: string
  mitigationStrategies: string[]
  status: 'low' | 'medium' | 'high' | 'critical'
  lastAssessed: Date
}

interface RiskAssessmentProps {
  riskFactors: RiskFactor[]
}

export function RiskAssessment({ riskFactors }: RiskAssessmentProps) {
  const getRiskColor = (status: string) => {
    switch (status) {
      case 'low': return 'bg-green-100 text-green-800 border-green-200'
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'critical': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getRiskIcon = (status: string) => {
    switch (status) {
      case 'low': return <CheckCircle className="w-4 h-4" />
      case 'medium': return <AlertTriangle className="w-4 h-4" />
      case 'high': return <AlertTriangle className="w-4 h-4" />
      case 'critical': return <AlertTriangle className="w-4 h-4" />
      default: return <BarChart3 className="w-4 h-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'financial': return 'bg-blue-500'
      case 'operational': return 'bg-green-500'
      case 'market': return 'bg-purple-500'
      case 'regulatory': return 'bg-orange-500'
      case 'strategic': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const overallRiskScore = riskFactors.reduce((acc, risk) => acc + risk.riskScore, 0) / riskFactors.length
  const criticalRisks = riskFactors.filter(risk => risk.status === 'critical' || risk.status === 'high')
  const mitigatedRisks = riskFactors.filter(risk => risk.mitigationStrategies.length > 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">AI Risk Assessment</h2>
          <p className="text-gray-600">Comprehensive risk analysis powered by AI</p>
        </div>
        <Button variant="outline">
          <Activity className="w-4 h-4 mr-2" />
          Update Assessment
        </Button>
      </div>

      {/* Risk Overview Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">
                Overall Risk
              </Badge>
            </div>
            <div className="text-3xl font-bold text-red-900 mb-2">
              {(overallRiskScore * 100).toFixed(1)}%
            </div>
            <p className="text-sm text-red-700">
              {overallRiskScore > 0.7 ? 'High Risk' : overallRiskScore > 0.4 ? 'Medium Risk' : 'Low Risk'}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <TrendingDown className="w-8 h-8 text-orange-600" />
              <Badge variant="outline" className="bg-orange-100 text-orange-800 border-orange-200">
                Critical Risks
              </Badge>
            </div>
            <div className="text-3xl font-bold text-orange-900 mb-2">
              {criticalRisks.length}
            </div>
            <p className="text-sm text-orange-700">
              Require immediate attention
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Shield className="w-8 h-8 text-green-600" />
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                Mitigated
              </Badge>
            </div>
            <div className="text-3xl font-bold text-green-900 mb-2">
              {mitigatedRisks.length}
            </div>
            <p className="text-sm text-green-700">
              {((mitigatedRisks.length / riskFactors.length) * 100).toFixed(0)}% of total
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <BarChart3 className="w-8 h-8 text-blue-600" />
              <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                Total Factors
              </Badge>
            </div>
            <div className="text-3xl font-bold text-blue-900 mb-2">
              {riskFactors.length}
            </div>
            <p className="text-sm text-blue-700">
              Risk factors analyzed
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Risk Heat Map */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart3 className="w-5 h-5 mr-2" />
            Risk Heat Map
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-4 mb-4">
            <div className="text-center">
              <div className="text-sm font-medium text-gray-700 mb-2">Probability</div>
              <div className="space-y-1">
                <div className="text-xs text-gray-600">High</div>
                <div className="text-xs text-gray-600">Medium</div>
                <div className="text-xs text-gray-600">Low</div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-gray-700 mb-2">Critical</div>
              <div className="space-y-1">
                <div className="w-8 h-8 bg-red-500 rounded"></div>
                <div className="w-8 h-8 bg-red-400 rounded"></div>
                <div className="w-8 h-8 bg-red-300 rounded"></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-gray-700 mb-2">High</div>
              <div className="space-y-1">
                <div className="w-8 h-8 bg-orange-500 rounded"></div>
                <div className="w-8 h-8 bg-orange-400 rounded"></div>
                <div className="w-8 h-8 bg-orange-300 rounded"></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-gray-700 mb-2">Medium</div>
              <div className="space-y-1">
                <div className="w-8 h-8 bg-yellow-500 rounded"></div>
                <div className="w-8 h-8 bg-yellow-400 rounded"></div>
                <div className="w-8 h-8 bg-yellow-300 rounded"></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-gray-700 mb-2">Low</div>
              <div className="space-y-1">
                <div className="w-8 h-8 bg-green-500 rounded"></div>
                <div className="w-8 h-8 bg-green-400 rounded"></div>
                <div className="w-8 h-8 bg-green-300 rounded"></div>
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-500 text-center">
            Impact →
          </div>
        </CardContent>
      </Card>

      {/* Risk Factors List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Risk Factors Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {riskFactors.map((risk) => (
              <div key={risk.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{risk.name}</h4>
                      <Badge variant="outline" className={getRiskColor(risk.status)}>
                        {getRiskIcon(risk.status)}
                        <span className="ml-1">{risk.status}</span>
                      </Badge>
                      <div className={`w-3 h-3 rounded-full ${getCategoryColor(risk.category)}`} title={risk.category}></div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{risk.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">Probability</span>
                          <span className="text-sm text-gray-600">{(risk.probability * 100).toFixed(0)}%</span>
                        </div>
                        <Progress value={risk.probability * 100} max={100} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">Impact</span>
                          <span className="text-sm text-gray-600">{(risk.impact * 100).toFixed(0)}%</span>
                        </div>
                        <Progress value={risk.impact * 100} max={100} className="h-2" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Risk Score: {(risk.riskScore * 100).toFixed(1)}%</span>
                      <span>Last assessed: {risk.lastAssessed.toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                {risk.mitigationStrategies.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h5 className="font-medium text-gray-900 mb-2">Mitigation Strategies</h5>
                    <div className="space-y-2">
                      {risk.mitigationStrategies.map((strategy, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Target className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{strategy}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Recommendations */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center text-blue-900">
            <Lightbulb className="w-5 h-5 mr-2" />
            AI Risk Mitigation Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-blue-900 mb-3">Immediate Actions (Next 30 days)</h4>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-blue-800">Review and update insurance coverage for high-risk areas</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-blue-800">Implement emergency response procedures for critical risks</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-blue-800">Conduct risk assessment training for key personnel</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-blue-900 mb-3">Strategic Initiatives (Next 90 days)</h4>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <Target className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-blue-800">Develop comprehensive risk management framework</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Target className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-blue-800">Establish regular risk monitoring and reporting systems</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Target className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-blue-800">Create contingency plans for high-impact scenarios</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
