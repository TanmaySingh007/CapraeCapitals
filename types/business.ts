// Business listing types for the Caprae Capitals application

export interface BusinessListing {
  id: string;
  sellerId: string;
  title: string;
  description: string;
  summary: string;
  askingPrice: {
    amount: number;
    currency: string;
    isNegotiable: boolean;
    includesAssets: boolean;
    includesRealEstate: boolean;
  };
  businessDetails: {
    industry: string;
    subIndustry?: string;
    businessModel: string;
    foundedYear: number;
    employeeCount: number;
    annualRevenue: number;
    annualProfit: number;
    profitMargin: number;
    growthRate: number;
    customerCount: number;
    marketShare?: number;
  };
  location: {
    city: string;
    state: string;
    country: string;
    zipCode?: string;
    isRelocatable: boolean;
    hasMultipleLocations: boolean;
    locationCount?: number;
  };
  assets: {
    intellectualProperty: string[];
    realEstate?: {
      type: string;
      squareFootage: number;
      value: number;
      isIncluded: boolean;
    }[];
    equipment?: {
      name: string;
      value: number;
      age: number;
      isIncluded: boolean;
    }[];
    inventory?: {
      description: string;
      value: number;
      turnoverRate: number;
    };
    customerDatabase: boolean;
    supplierRelationships: boolean;
    brandValue?: number;
  };
  financials: {
    last3YearsRevenue: number[];
    last3YearsProfit: number[];
    currentAssets: number;
    currentLiabilities: number;
    debt: number;
    cashFlow: number;
    projections: {
      nextYearRevenue: number;
      nextYearProfit: number;
      growthAssumptions: string[];
    };
  };
  operations: {
    businessHours: string;
    seasonality?: string;
    keyPersonnel: string[];
    automationLevel: 'low' | 'medium' | 'high';
    technologyStack?: string[];
    processes: string[];
  };
  market: {
    targetMarket: string;
    marketSize: number;
    competition: string[];
    competitiveAdvantages: string[];
    marketTrends: string[];
    expansionOpportunities: string[];
  };
  reasonForSale: {
    primary: string;
    secondary?: string;
    timeline: 'immediate' | '3-6months' | '6-12months' | '1-2years' | '2+years';
    urgency: 'low' | 'medium' | 'high';
    flexibility: 'low' | 'medium' | 'high';
  };
  dealStructure: {
    preferredTerms: ('cash' | 'seller-financing' | 'earn-out' | 'stock-swap')[];
    sellerInvolvement: 'none' | 'consulting' | 'partnership' | 'full-time';
    transitionPeriod: number; // in months
    trainingIncluded: boolean;
    nonCompetePeriod?: number; // in months
  };
  status: 'active' | 'pending' | 'sold' | 'expired' | 'draft';
  visibility: 'public' | 'private' | 'connections';
  createdAt: Date;
  updatedAt: Date;
  expiresAt?: Date;
  views: number;
  inquiries: number;
  savedBy: string[];
  tags: string[];
  images: string[];
  documents: BusinessDocument[];
}

export interface BusinessDocument {
  id: string;
  name: string;
  type: 'financial' | 'legal' | 'operational' | 'marketing' | 'other';
  url: string;
  size: number;
  uploadedAt: Date;
  isPublic: boolean;
  requiresNDA: boolean;
}

export interface BusinessCategory {
  id: string;
  name: string;
  description: string;
  parentCategoryId?: string;
  subCategories: string[];
  averagePriceRange: {
    min: number;
    max: number;
    currency: string;
  };
  typicalMetrics: {
    averageRevenue: number;
    averageProfitMargin: number;
    averageEmployeeCount: number;
    averageGrowthRate: number;
  };
}

export interface BusinessSearchFilters {
  priceRange?: {
    min: number;
    max: number;
  };
  industries?: string[];
  locations?: string[];
  employeeCount?: {
    min: number;
    max: number;
  };
  revenue?: {
    min: number;
    max: number;
  };
  businessModel?: string[];
  dealStructure?: string[];
  timeline?: string[];
  keywords?: string;
  tags?: string[];
}

export interface BusinessMatch {
  businessId: string;
  buyerId: string;
  matchScore: number; // 0-100
  matchFactors: {
    industryAlignment: number;
    priceFit: number;
    locationFit: number;
    sizeFit: number;
    timelineFit: number;
  };
  status: 'pending' | 'interested' | 'not-interested' | 'contacted';
  createdAt: Date;
  updatedAt: Date;
}
