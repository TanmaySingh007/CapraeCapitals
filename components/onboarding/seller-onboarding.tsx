"use client"

import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { StepIndicator } from "@/components/ui/step-indicator"
import { SellerOnboardingData } from "@/types/onboarding"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

const SELLER_STEPS = [
  "Business Details",
  "Financial Metrics", 
  "Preferences"
]

const INDUSTRIES = [
  { value: "technology", label: "Technology" },
  { value: "healthcare", label: "Healthcare" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "retail", label: "Retail" },
  { value: "food-beverage", label: "Food & Beverage" },
  { value: "services", label: "Professional Services" },
  { value: "construction", label: "Construction" },
  { value: "transportation", label: "Transportation" },
  { value: "energy", label: "Energy" },
  { value: "other", label: "Other" }
]

const URGENCY_OPTIONS = [
  { value: "low", label: "Low - Flexible timeline" },
  { value: "medium", label: "Medium - Some urgency" },
  { value: "high", label: "High - Immediate need" }
]

const FLEXIBILITY_OPTIONS = [
  { value: "low", label: "Low - Specific requirements" },
  { value: "medium", label: "Medium - Some flexibility" },
  { value: "high", label: "High - Very flexible" }
]

const BUYER_TYPES = [
  "Strategic Buyer",
  "Financial Buyer", 
  "Private Equity",
  "Individual Investor",
  "Employee Buyout",
  "Family Office"
]

export function SellerOnboarding() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<SellerOnboardingData>({
    companyName: "",
    industry: "",
    description: "",
    foundedYear: new Date().getFullYear(),
    employeeCount: 0,
    website: "",
    annualRevenue: 0,
    profitMargin: 0,
    growthRate: 0,
    customerCount: 0,
    marketShare: 0,
    exitReason: "",
    timeline: "",
    urgency: "medium",
    flexibility: "medium",
    preferredBuyerTypes: [],
    dealSize: { min: 0, max: 0 }
  })

  const updateFormData = (field: keyof SellerOnboardingData, value: SellerOnboardingData[keyof SellerOnboardingData]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < SELLER_STEPS.length) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSubmit = () => {
    console.log("Seller onboarding completed:", formData)
    // Here you would typically send the data to your backend
  }

  const renderBusinessDetails = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="companyName">Company Name *</Label>
          <Input
            id="companyName"
            value={formData.companyName}
            onChange={(e) => updateFormData("companyName", e.target.value)}
            placeholder="Enter company name"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="industry">Industry *</Label>
                      <Select
              value={formData.industry}
              onValueChange={(value) => updateFormData("industry", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                {INDUSTRIES.map((industry) => (
                  <SelectItem key={industry.value} value={industry.value}>
                    {industry.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Business Description *</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => updateFormData("description", e.target.value)}
          placeholder="Describe your business, products/services, and market position"
          rows={4}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="foundedYear">Founded Year *</Label>
          <Input
            id="foundedYear"
            type="number"
            value={formData.foundedYear}
            onChange={(e) => updateFormData("foundedYear", parseInt(e.target.value))}
            min="1900"
            max={new Date().getFullYear()}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="employeeCount">Number of Employees *</Label>
          <Input
            id="employeeCount"
            type="number"
            value={formData.employeeCount}
            onChange={(e) => updateFormData("employeeCount", parseInt(e.target.value))}
            min="1"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            type="url"
            value={formData.website}
            onChange={(e) => updateFormData("website", e.target.value)}
            placeholder="https://example.com"
          />
        </div>
      </div>
    </div>
  )

  const renderFinancialMetrics = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="annualRevenue">Annual Revenue (USD) *</Label>
          <Input
            id="annualRevenue"
            type="number"
            value={formData.annualRevenue}
            onChange={(e) => updateFormData("annualRevenue", parseInt(e.target.value))}
            placeholder="1000000"
            min="0"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="profitMargin">Profit Margin (%) *</Label>
          <Input
            id="profitMargin"
            type="number"
            value={formData.profitMargin}
            onChange={(e) => updateFormData("profitMargin", parseFloat(e.target.value))}
            placeholder="15"
            min="0"
            max="100"
            step="0.1"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="growthRate">Growth Rate (%) *</Label>
          <Input
            id="growthRate"
            type="number"
            value={formData.growthRate}
            onChange={(e) => updateFormData("growthRate", parseFloat(e.target.value))}
            placeholder="10"
            min="-100"
            max="1000"
            step="0.1"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="customerCount">Number of Customers *</Label>
          <Input
            id="customerCount"
            type="number"
            value={formData.customerCount}
            onChange={(e) => updateFormData("customerCount", parseInt(e.target.value))}
            placeholder="1000"
            min="0"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="marketShare">Market Share (%) *</Label>
          <Input
            id="marketShare"
            type="number"
            value={formData.marketShare}
            onChange={(e) => updateFormData("marketShare", parseFloat(e.target.value))}
            placeholder="5"
            min="0"
            max="100"
            step="0.1"
            required
          />
        </div>
      </div>
    </div>
  )

  const renderPreferences = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="exitReason">Exit Reason *</Label>
        <Textarea
          id="exitReason"
          value={formData.exitReason}
          onChange={(e) => updateFormData("exitReason", e.target.value)}
          placeholder="Why are you looking to sell your business?"
          rows={3}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="timeline">Preferred Timeline *</Label>
          <Input
            id="timeline"
            value={formData.timeline}
            onChange={(e) => updateFormData("timeline", e.target.value)}
            placeholder="e.g., 3-6 months, ASAP, Flexible"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="urgency">Urgency Level *</Label>
          <Select
            value={formData.urgency}
            onValueChange={(value) => updateFormData("urgency", value as SellerOnboardingData["urgency"])}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select urgency level" />
            </SelectTrigger>
            <SelectContent>
              {URGENCY_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="flexibility">Flexibility Level *</Label>
          <Select
            value={formData.flexibility}
            onValueChange={(value) => updateFormData("flexibility", value as SellerOnboardingData["flexibility"])}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select flexibility level" />
            </SelectTrigger>
              <SelectContent>
                {FLEXIBILITY_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label>Preferred Buyer Types *</Label>
          <div className="grid grid-cols-2 gap-2">
            {BUYER_TYPES.map((type) => (
              <label key={type} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.preferredBuyerTypes.includes(type)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      updateFormData("preferredBuyerTypes", [...formData.preferredBuyerTypes, type])
                    } else {
                      updateFormData("preferredBuyerTypes", formData.preferredBuyerTypes.filter(t => t !== type))
                    }
                  }}
                  className="rounded border-gray-300"
                />
                <span className="text-sm">{type}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="dealSizeMin">Minimum Deal Size (USD) *</Label>
          <Input
            id="dealSizeMin"
            type="number"
            value={formData.dealSize.min}
            onChange={(e) => updateFormData("dealSize", { ...formData.dealSize, min: parseInt(e.target.value) })}
            placeholder="500000"
            min="0"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="dealSizeMax">Maximum Deal Size (USD) *</Label>
          <Input
            id="dealSizeMax"
            type="number"
            value={formData.dealSize.max}
            onChange={(e) => updateFormData("dealSize", { ...formData.dealSize, max: parseInt(e.target.value) })}
            placeholder="5000000"
            min="0"
            required
          />
        </div>
      </div>
    </div>
  )

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderBusinessDetails()
      case 2:
        return renderFinancialMetrics()
      case 3:
        return renderPreferences()
      default:
        return null
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.companyName && formData.industry && formData.description && formData.foundedYear && formData.employeeCount
      case 2:
        return formData.annualRevenue > 0 && formData.profitMargin >= 0 && formData.growthRate >= -100 && formData.customerCount > 0 && formData.marketShare >= 0
      case 3:
        return formData.exitReason && formData.timeline && formData.urgency && formData.flexibility && formData.preferredBuyerTypes.length > 0 && formData.dealSize.min > 0 && formData.dealSize.max > 0
      default:
        return false
    }
  }

  if (currentStep > SELLER_STEPS.length) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Onboarding Complete!</CardTitle>
                         <CardDescription>
               Thank you for completing your seller profile. We&apos;ll review your information and get back to you within 24-48 hours.
             </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
                         <p className="text-sm text-muted-foreground mb-4">
               Your business has been successfully registered in our marketplace. You&apos;ll receive notifications about potential buyers and can start managing your listing.
             </p>
          </CardContent>
          <CardFooter className="justify-center">
            <Button onClick={() => window.location.href = '/'}>
              Go to Dashboard
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Seller Onboarding</CardTitle>
          <CardDescription>
            Complete your business profile to start attracting potential buyers
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <StepIndicator
            currentStep={currentStep}
            totalSteps={SELLER_STEPS.length}
            steps={SELLER_STEPS}
            className="mb-8"
          />
          
          <div className="min-h-[400px]">
            {renderCurrentStep()}
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </Button>
          
          {currentStep === SELLER_STEPS.length ? (
            <Button
              onClick={handleSubmit}
              disabled={!isStepValid()}
              className="flex items-center space-x-2"
            >
              <Check className="w-4 h-4" />
              Complete Onboarding
            </Button>
          ) : (
            <Button
              onClick={nextStep}
              disabled={!isStepValid()}
              className="flex items-center space-x-2"
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
