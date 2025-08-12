"use client"

import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { StepIndicator } from "@/components/ui/step-indicator"
import { BuyerOnboardingData } from "@/types/onboarding"
import { ArrowLeft, ArrowRight, Check, AlertCircle } from "lucide-react"
import { z } from "zod"

const BUYER_STEPS = [
  "Investment Criteria",
  "Experience & Background",
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

const INVESTMENT_TYPES = [
  { value: "acquisition", label: "Full Acquisition" },
  { value: "partnership", label: "Partnership" },
  { value: "investment", label: "Minority Investment" },
  { value: "all", label: "All Options" }
]

const DEAL_STRUCTURES = [
  { value: "cash", label: "Cash" },
  { value: "stock", label: "Stock" },
  { value: "mixed", label: "Mixed" },
  { value: "flexible", label: "Flexible" }
]

const EXPERIENCE_LEVELS = [
  { value: "beginner", label: "Beginner (0-2 deals)" },
  { value: "intermediate", label: "Intermediate (3-10 deals)" },
  { value: "expert", label: "Expert (10+ deals)" }
]

const TIMELINES = [
  { value: "immediate", label: "Immediate (0-3 months)" },
  { value: "3-6months", label: "3-6 months" },
  { value: "6-12months", label: "6-12 months" },
  { value: "flexible", label: "Flexible" }
]

const MANAGEMENT_OPTIONS = [
  { value: "hands-on", label: "Hands-on Management" },
  { value: "hands-off", label: "Hands-off Investment" },
  { value: "partnership", label: "Partnership Approach" }
]

const DUE_DILIGENCE_OPTIONS = [
  { value: "quick", label: "Quick (2-4 weeks)" },
  { value: "standard", label: "Standard (1-2 months)" },
  { value: "thorough", label: "Thorough (2-3 months)" }
]

// Zod validation schemas for each step
const investmentCriteriaSchema = z.object({
  investmentSize: z.object({
    min: z.number().min(10000, "Minimum investment must be at least $10,000"),
    max: z.number().min(10000, "Maximum investment must be at least $10,000")
  }).refine(data => data.max >= data.min, {
    message: "Maximum investment must be greater than or equal to minimum investment"
  }),
  preferredIndustries: z.array(z.string()).min(1, "Please select at least one industry"),
  investmentType: z.enum(["acquisition", "partnership", "investment", "all"]),
  dealStructure: z.enum(["cash", "stock", "mixed", "flexible"])
})

const experienceBackgroundSchema = z.object({
  investmentExperience: z.enum(["beginner", "intermediate", "expert"]),
  previousDeals: z.number().min(0, "Previous deals cannot be negative"),
  industryExperience: z.array(z.string()).min(1, "Please select at least one industry"),
  professionalBackground: z.string().min(10, "Professional background must be at least 10 characters")
})

const preferencesSchema = z.object({
  timeline: z.enum(["immediate", "3-6months", "6-12months", "flexible"]),
  locationPreferences: z.array(z.string()).min(1, "Please select at least one location"),
  managementInvolvement: z.enum(["hands-on", "hands-off", "partnership"]),
  dueDiligenceTime: z.enum(["quick", "standard", "thorough"])
})

export function BuyerOnboarding() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<BuyerOnboardingData>({
    investmentSize: { min: 0, max: 0 },
    preferredIndustries: [],
    investmentType: "all",
    dealStructure: "flexible",
    investmentExperience: "beginner",
    previousDeals: 0,
    industryExperience: [],
    professionalBackground: "",
    timeline: "flexible",
    locationPreferences: [],
    managementInvolvement: "partnership",
    dueDiligenceTime: "standard"
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const updateFormData = (field: keyof BuyerOnboardingData, value: BuyerOnboardingData[keyof BuyerOnboardingData]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  const validateCurrentStep = (): boolean => {
    let schema: z.ZodSchema<Partial<BuyerOnboardingData>>
    let stepData: Partial<BuyerOnboardingData>

    switch (currentStep) {
      case 1:
        schema = investmentCriteriaSchema
        stepData = {
          investmentSize: formData.investmentSize,
          preferredIndustries: formData.preferredIndustries,
          investmentType: formData.investmentType,
          dealStructure: formData.dealStructure
        }
        break
      case 2:
        schema = experienceBackgroundSchema
        stepData = {
          investmentExperience: formData.investmentExperience,
          previousDeals: formData.previousDeals,
          industryExperience: formData.industryExperience,
          professionalBackground: formData.professionalBackground
        }
        break
      case 3:
        schema = preferencesSchema
        stepData = {
          timeline: formData.timeline,
          locationPreferences: formData.locationPreferences,
          managementInvolvement: formData.managementInvolvement,
          dueDiligenceTime: formData.dueDiligenceTime
        }
        break
      default:
        return false
    }

    try {
      schema.parse(stepData)
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        error.issues.forEach((issue) => {
          const field = issue.path.join(".")
          newErrors[field] = issue.message
        })
        setErrors(newErrors)
      }
      return false
    }
  }

  const nextStep = () => {
    if (validateCurrentStep() && currentStep < BUYER_STEPS.length) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSubmit = () => {
    if (validateCurrentStep()) {
      console.log("Buyer onboarding completed:", formData)
      // Here you would typically send the data to your backend
    }
  }

  const renderInvestmentCriteria = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="investmentMin">Minimum Investment (USD) *</Label>
          <Input
            id="investmentMin"
            type="number"
            value={formData.investmentSize.min}
            onChange={(e) => updateFormData("investmentSize", { ...formData.investmentSize, min: parseInt(e.target.value) })}
            placeholder="100000"
            min="10000"
            required
          />
          {errors["investmentSize.min"] && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors["investmentSize.min"]}
            </p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="investmentMax">Maximum Investment (USD) *</Label>
          <Input
            id="investmentMax"
            type="number"
            value={formData.investmentSize.max}
            onChange={(e) => updateFormData("investmentSize", { ...formData.investmentSize, max: parseInt(e.target.value) })}
            placeholder="1000000"
            min="10000"
            required
          />
          {errors["investmentSize.max"] && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors["investmentSize.max"]}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Preferred Industries *</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {INDUSTRIES.map((industry) => (
            <label key={industry.value} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.preferredIndustries.includes(industry.value)}
                onChange={(e) => {
                  if (e.target.checked) {
                    updateFormData("preferredIndustries", [...formData.preferredIndustries, industry.value])
                  } else {
                    updateFormData("preferredIndustries", formData.preferredIndustries.filter(i => i !== industry.value))
                  }
                }}
                className="rounded border-gray-300"
              />
              <span className="text-sm">{industry.label}</span>
            </label>
          ))}
        </div>
        {errors["preferredIndustries"] && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors["preferredIndustries"]}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="investmentType">Investment Type *</Label>
          <Select
            value={formData.investmentType}
            onValueChange={(value) => updateFormData("investmentType", value as BuyerOnboardingData["investmentType"])}
            options={INVESTMENT_TYPES}
            placeholder="Select investment type"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="dealStructure">Preferred Deal Structure *</Label>
          <Select
            value={formData.dealStructure}
            onValueChange={(value) => updateFormData("dealStructure", value as BuyerOnboardingData["dealStructure"])}
            options={DEAL_STRUCTURES}
            placeholder="Select deal structure"
          />
        </div>
      </div>
    </div>
  )

  const renderExperienceBackground = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="investmentExperience">Investment Experience *</Label>
          <Select
            value={formData.investmentExperience}
            onValueChange={(value) => updateFormData("investmentExperience", value as BuyerOnboardingData["investmentExperience"])}
            options={EXPERIENCE_LEVELS}
            placeholder="Select experience level"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="previousDeals">Previous Deals Completed *</Label>
          <Input
            id="previousDeals"
            type="number"
            value={formData.previousDeals}
            onChange={(e) => updateFormData("previousDeals", parseInt(e.target.value))}
            placeholder="0"
            min="0"
            required
          />
          {errors["previousDeals"] && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors["previousDeals"]}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Industry Experience *</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {INDUSTRIES.map((industry) => (
            <label key={industry.value} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.industryExperience.includes(industry.value)}
                onChange={(e) => {
                  if (e.target.checked) {
                    updateFormData("industryExperience", [...formData.industryExperience, industry.value])
                  } else {
                    updateFormData("industryExperience", formData.industryExperience.filter(i => i !== industry.value))
                  }
                }}
                className="rounded border-gray-300"
              />
              <span className="text-sm">{industry.label}</span>
            </label>
          ))}
        </div>
        {errors["industryExperience"] && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors["industryExperience"]}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="professionalBackground">Professional Background *</Label>
        <Textarea
          id="professionalBackground"
          value={formData.professionalBackground}
          onChange={(e) => updateFormData("professionalBackground", e.target.value)}
          placeholder="Describe your professional background, expertise, and relevant experience"
          rows={4}
          required
        />
        {errors["professionalBackground"] && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors["professionalBackground"]}
          </p>
        )}
      </div>
    </div>
  )

  const renderPreferences = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="timeline">Investment Timeline *</Label>
          <Select
            value={formData.timeline}
            onValueChange={(value) => updateFormData("timeline", value as BuyerOnboardingData["timeline"])}
            options={TIMELINES}
            placeholder="Select timeline"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="managementInvolvement">Management Involvement *</Label>
          <Select
            value={formData.managementInvolvement}
            onValueChange={(value) => updateFormData("managementInvolvement", value as BuyerOnboardingData["managementInvolvement"])}
            options={MANAGEMENT_OPTIONS}
            placeholder="Select involvement level"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Location Preferences *</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {["United States", "Canada", "Europe", "Asia", "Australia", "Latin America", "Africa", "Remote/Any"].map((location) => (
            <label key={location} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.locationPreferences.includes(location)}
                onChange={(e) => {
                  if (e.target.checked) {
                    updateFormData("locationPreferences", [...formData.locationPreferences, location])
                  } else {
                    updateFormData("locationPreferences", formData.locationPreferences.filter(l => l !== location))
                  }
                }}
                className="rounded border-gray-300"
              />
              <span className="text-sm">{location}</span>
            </label>
          ))}
        </div>
        {errors["locationPreferences"] && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors["locationPreferences"]}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="dueDiligenceTime">Due Diligence Timeline *</Label>
        <Select
          value={formData.dueDiligenceTime}
                      onValueChange={(value) => updateFormData("dueDiligenceTime", value as BuyerOnboardingData["dueDiligenceTime"])}
          options={DUE_DILIGENCE_OPTIONS}
          placeholder="Select due diligence timeline"
        />
      </div>
    </div>
  )

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderInvestmentCriteria()
      case 2:
        return renderExperienceBackground()
      case 3:
        return renderPreferences()
      default:
        return null
    }
  }

  if (currentStep > BUYER_STEPS.length) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Onboarding Complete!</CardTitle>
                         <CardDescription>
               Thank you for completing your buyer profile. We&apos;ll review your information and start matching you with potential opportunities.
             </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
                         <p className="text-sm text-muted-foreground mb-4">
               Your investor profile has been successfully created. You&apos;ll receive notifications about new business listings that match your criteria and can start exploring opportunities.
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
          <CardTitle>Buyer Onboarding</CardTitle>
          <CardDescription>
            Complete your investor profile to start discovering business opportunities
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <StepIndicator
            currentStep={currentStep}
            totalSteps={BUYER_STEPS.length}
            steps={BUYER_STEPS}
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
          
          {currentStep === BUYER_STEPS.length ? (
            <Button
              onClick={handleSubmit}
              className="flex items-center space-x-2"
            >
              <Check className="w-4 h-4" />
              Complete Onboarding
            </Button>
          ) : (
            <Button
              onClick={nextStep}
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
