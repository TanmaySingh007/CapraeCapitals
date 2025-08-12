// User types for the Caprae Capitals application

export interface BaseUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  phone?: string;
  location: Location;
  createdAt: Date;
  updatedAt: Date;
  isVerified: boolean;
  isActive: boolean;
}

export interface Location {
  city: string;
  state: string;
  country: string;
  zipCode?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

export interface BusinessProfile {
  companyName: string;
  industry: string;
  description: string;
  foundedYear?: number;
  employeeCount?: number;
  annualRevenue?: number;
  website?: string;
  logo?: string;
  certifications?: string[];
  socialMedia?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}

export interface FinancialProfile {
  investmentRange: {
    min: number;
    max: number;
    currency: string;
  };
  preferredIndustries: string[];
  investmentHistory?: {
    totalInvestments: number;
    successfulExits: number;
    averageROI: number;
  };
  riskTolerance: 'low' | 'medium' | 'high';
  investmentHorizon: 'short' | 'medium' | 'long';
}

export interface Buyer extends BaseUser {
  type: 'buyer';
  businessProfile: BusinessProfile;
  financialProfile: FinancialProfile;
  investmentCriteria: {
    targetIndustries: string[];
    targetLocations: string[];
    minCompanySize: number;
    maxCompanySize: number;
    preferredBusinessModels: string[];
  };
  preferences: {
    dealTypes: ('acquisition' | 'merger' | 'partnership' | 'investment')[];
    communicationFrequency: 'daily' | 'weekly' | 'monthly';
    meetingPreference: 'virtual' | 'in-person' | 'hybrid';
  };
}

export interface Seller extends BaseUser {
  type: 'seller';
  businessProfile: BusinessProfile;
  exitProfile: {
    reason: string;
    timeline: 'immediate' | '3-6months' | '6-12months' | '1-2years' | '2+years';
    urgency: 'low' | 'medium' | 'high';
    flexibility: 'low' | 'medium' | 'high';
  };
  businessMetrics: {
    currentRevenue: number;
    projectedRevenue: number;
    profitMargin: number;
    growthRate: number;
    customerCount: number;
    marketShare?: number;
  };
  assets: {
    intellectualProperty: string[];
    realEstate?: string[];
    equipment?: string[];
    inventory?: string[];
  };
  liabilities?: {
    debt: number;
    outstandingPayables: number;
    legalIssues?: string[];
  };
}

export type User = Buyer | Seller;

export interface UserPreferences {
  userId: string;
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  privacy: {
    profileVisibility: 'public' | 'private' | 'connections';
    contactInfoVisibility: 'public' | 'private' | 'connections';
  };
  communication: {
    autoResponder: boolean;
    responseTime: number; // in hours
    preferredLanguage: string;
  };
}
