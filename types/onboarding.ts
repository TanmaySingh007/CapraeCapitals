export interface SellerOnboardingData {
  // Business Details
  companyName: string
  industry: string
  description: string
  foundedYear: number
  employeeCount: number
  website?: string
  
  // Financial Metrics
  annualRevenue: number
  profitMargin: number
  growthRate: number
  customerCount: number
  marketShare: number
  
  // Preferences
  exitReason: string
  timeline: string
  urgency: 'low' | 'medium' | 'high'
  flexibility: 'low' | 'medium' | 'high'
  preferredBuyerTypes: string[]
  dealSize: {
    min: number
    max: number
  }
}

export interface BuyerOnboardingData {
  // Investment Criteria
  investmentSize: {
    min: number
    max: number
  }
  preferredIndustries: string[]
  investmentType: 'acquisition' | 'partnership' | 'investment' | 'all'
  dealStructure: 'cash' | 'stock' | 'mixed' | 'flexible'
  
  // Experience & Background
  investmentExperience: 'beginner' | 'intermediate' | 'expert'
  previousDeals: number
  industryExperience: string[]
  professionalBackground: string
  
  // Preferences
  timeline: 'immediate' | '3-6months' | '6-12months' | 'flexible'
  locationPreferences: string[]
  managementInvolvement: 'hands-on' | 'hands-off' | 'partnership'
  dueDiligenceTime: 'quick' | 'standard' | 'thorough'
}

export interface OnboardingStep {
  id: string
  title: string
  description: string
  isCompleted: boolean
}
