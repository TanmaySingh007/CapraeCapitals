// Mock business listing data for the Caprae Capitals application

import { BusinessListing, BusinessCategory } from '@/types/business';

export const mockBusinessListings: BusinessListing[] = [
  {
    id: 'business-001',
    sellerId: 'seller-001',
    title: 'TechStart Solutions - SaaS Project Management Platform',
    description: 'Established SaaS company with recurring revenue model, serving enterprise clients with cloud-based project management solutions. Strong customer retention and growth trajectory.',
    summary: 'Profitable SaaS business with 35 employees, $2.8M annual revenue, and 45% growth rate. Seeking strategic partner for expansion.',
    askingPrice: {
      amount: 8500000,
      currency: 'USD',
      isNegotiable: true,
      includesAssets: true,
      includesRealEstate: false
    },
    businessDetails: {
      industry: 'Technology',
      subIndustry: 'SaaS',
      businessModel: 'B2B SaaS',
      foundedYear: 2018,
      employeeCount: 35,
      annualRevenue: 2800000,
      annualProfit: 980000,
      profitMargin: 0.35,
      growthRate: 0.45,
      customerCount: 125,
      marketShare: 0.08
    },
    location: {
      city: 'Austin',
      state: 'TX',
      country: 'USA',
      zipCode: '78701',
      isRelocatable: true,
      hasMultipleLocations: false
    },
    assets: {
      intellectualProperty: ['Project Management Platform', 'AI Analytics Engine', 'Mobile App', 'API Integrations'],
      realEstate: [],
      equipment: [
        { name: 'Development Servers', value: 250000, age: 2, isIncluded: true },
        { name: 'Office Equipment', value: 75000, age: 3, isIncluded: true },
        { name: 'Testing Infrastructure', value: 120000, age: 1, isIncluded: true }
      ],
      inventory: { description: 'Software Licenses', value: 150000, turnoverRate: 0.9 },
      customerDatabase: true,
      supplierRelationships: true,
      brandValue: 2000000
    },
    financials: {
      last3YearsRevenue: [1200000, 1800000, 2800000],
      last3YearsProfit: [300000, 540000, 980000],
      currentAssets: 1200000,
      currentLiabilities: 225000,
      debt: 150000,
      cashFlow: 850000,
      projections: {
        nextYearRevenue: 4200000,
        nextYearProfit: 1470000,
        growthAssumptions: ['Market expansion', 'Product development', 'Sales team growth']
      }
    },
    operations: {
      businessHours: '24/7 (Cloud-based)',
      seasonality: 'Low',
      keyPersonnel: ['CTO', 'VP Sales', 'VP Marketing', 'Head of Customer Success'],
      automationLevel: 'high',
      technologyStack: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Redis'],
      processes: ['Agile Development', 'Customer Success', 'Sales Process', 'Support Workflow']
    },
    market: {
      targetMarket: 'Enterprise Project Management',
      marketSize: 3500000000,
      competition: ['Asana', 'Monday.com', 'ClickUp', 'Basecamp'],
      competitiveAdvantages: ['AI-powered analytics', 'Enterprise security', 'Custom integrations', 'White-label options'],
      marketTrends: ['Remote work adoption', 'AI integration', 'Enterprise consolidation', 'Mobile-first approach'],
      expansionOpportunities: ['International markets', 'Industry-specific solutions', 'Mobile app expansion', 'API marketplace']
    },
    reasonForSale: {
      primary: 'Strategic exit to focus on new ventures',
      secondary: 'Capital needed for other business opportunities',
      timeline: '6-12months',
      urgency: 'medium',
      flexibility: 'medium'
    },
    dealStructure: {
      preferredTerms: ['cash', 'seller-financing'],
      sellerInvolvement: 'consulting',
      transitionPeriod: 6,
      trainingIncluded: true,
      nonCompetePeriod: 24
    },
    status: 'active',
    visibility: 'public',
    createdAt: new Date('2024-06-01'),
    updatedAt: new Date('2024-11-01'),
    expiresAt: new Date('2025-05-01'),
    views: 245,
    inquiries: 18,
    savedBy: ['buyer-001', 'buyer-003'],
    tags: ['SaaS', 'Technology', 'B2B', 'Project Management', 'High Growth', 'Recurring Revenue'],
    images: ['/businesses/techstart-1.jpg', '/businesses/techstart-2.jpg', '/businesses/techstart-3.jpg'],
    documents: [
      {
        id: 'doc-001',
        name: 'Financial Statements 2021-2024',
        type: 'financial',
        url: '/documents/techstart-financials.pdf',
        size: 2048000,
        uploadedAt: new Date('2024-10-15'),
        isPublic: false,
        requiresNDA: true
      },
      {
        id: 'doc-002',
        name: 'Customer Contracts Overview',
        type: 'operational',
        url: '/documents/techstart-contracts.pdf',
        size: 1536000,
        uploadedAt: new Date('2024-10-20'),
        isPublic: false,
        requiresNDA: true
      }
    ]
  },
  {
    id: 'business-002',
    sellerId: 'seller-002',
    title: 'Precision Manufacturing Co. - Aerospace Components',
    description: 'High-precision manufacturing company with long-term contracts from major aerospace and automotive manufacturers. ISO certified with state-of-the-art equipment.',
    summary: 'Established manufacturer with $8.5M revenue, 85 employees, and long-term contracts. Seeking succession planning solution.',
    askingPrice: {
      amount: 25000000,
      currency: 'USD',
      isNegotiable: true,
      includesAssets: true,
      includesRealEstate: true
    },
    businessDetails: {
      industry: 'Manufacturing',
      subIndustry: 'Aerospace & Automotive',
      businessModel: 'Contract Manufacturing',
      foundedYear: 2005,
      employeeCount: 85,
      annualRevenue: 8500000,
      annualProfit: 1870000,
      profitMargin: 0.22,
      growthRate: 0.08,
      customerCount: 12,
      marketShare: 0.15
    },
    location: {
      city: 'Chicago',
      state: 'IL',
      country: 'USA',
      zipCode: '60601',
      isRelocatable: false,
      hasMultipleLocations: false
    },
    assets: {
      intellectualProperty: ['Manufacturing Processes', 'Quality Control Systems', 'CAD Designs', 'Proprietary Methods'],
      realEstate: [
        {
          type: 'Manufacturing Facility',
          squareFootage: 25000,
          value: 3500000,
          isIncluded: true
        },
        {
          type: 'Warehouse',
          squareFootage: 10000,
          value: 1200000,
          isIncluded: true
        }
      ],
      equipment: [
        { name: 'CNC Machines', value: 2800000, age: 3, isIncluded: true },
        { name: 'Quality Testing Equipment', value: 450000, age: 2, isIncluded: true },
        { name: 'Forklifts', value: 120000, age: 5, isIncluded: true }
      ],
      inventory: { description: 'Raw Materials & WIP', value: 450000, turnoverRate: 0.6 },
      customerDatabase: true,
      supplierRelationships: true,
      brandValue: 1500000
    },
    financials: {
      last3YearsRevenue: [7200000, 7800000, 8500000],
      last3YearsProfit: [1440000, 1560000, 1870000],
      currentAssets: 3800000,
      currentLiabilities: 1980000,
      debt: 1200000,
      cashFlow: 2200000,
      projections: {
        nextYearRevenue: 9200000,
        nextYearProfit: 2024000,
        growthAssumptions: ['New contracts', 'Efficiency improvements', 'Market expansion']
      }
    },
    operations: {
      businessHours: 'Monday-Friday 6AM-6PM',
      seasonality: 'Low',
      keyPersonnel: ['Plant Manager', 'Quality Manager', 'Production Supervisor', 'Maintenance Manager'],
      automationLevel: 'medium',
      technologyStack: ['ERP System', 'CAD/CAM Software', 'Quality Management System'],
      processes: ['Lean Manufacturing', 'Six Sigma', 'Quality Control', 'Preventive Maintenance']
    },
    market: {
      targetMarket: 'Aerospace & Automotive OEMs',
      marketSize: 85000000000,
      competition: ['Local manufacturers', 'Regional competitors', 'International suppliers'],
      competitiveAdvantages: ['ISO certifications', 'Long-term contracts', 'Quality reputation', 'Geographic location'],
      marketTrends: ['Supply chain localization', 'Quality requirements', 'Automation adoption', 'Sustainability focus'],
      expansionOpportunities: ['New industries', 'Geographic expansion', 'Value-added services', 'Technology upgrades']
    },
    reasonForSale: {
      primary: 'Retirement and succession planning',
      secondary: 'Capital needed for other investments',
      timeline: '1-2years',
      urgency: 'low',
      flexibility: 'high'
    },
    dealStructure: {
      preferredTerms: ['cash', 'seller-financing'],
      sellerInvolvement: 'consulting',
      transitionPeriod: 12,
      trainingIncluded: true,
      nonCompetePeriod: 36
    },
    status: 'active',
    visibility: 'public',
    createdAt: new Date('2024-05-15'),
    updatedAt: new Date('2024-11-01'),
    expiresAt: new Date('2026-05-15'),
    views: 189,
    inquiries: 12,
    savedBy: ['buyer-002'],
    tags: ['Manufacturing', 'Aerospace', 'Automotive', 'ISO Certified', 'Long-term Contracts', 'Real Estate'],
    images: ['/businesses/manufacturing-1.jpg', '/businesses/manufacturing-2.jpg'],
    documents: [
      {
        id: 'doc-003',
        name: 'Financial Statements 2021-2024',
        type: 'financial',
        url: '/documents/manufacturing-financials.pdf',
        size: 3072000,
        uploadedAt: new Date('2024-10-10'),
        isPublic: false,
        requiresNDA: true
      },
      {
        id: 'doc-004',
        name: 'Customer Contracts',
        type: 'legal',
        url: '/documents/manufacturing-contracts.pdf',
        size: 2560000,
        uploadedAt: new Date('2024-10-15'),
        isPublic: false,
        requiresNDA: true
      }
    ]
  },
  {
    id: 'business-003',
    sellerId: 'seller-003',
    title: 'Coastal Bistro Group - Upscale Seafood Restaurants',
    description: 'Successful restaurant group operating three upscale seafood restaurants in prime Miami locations. Strong brand recognition and consistent profitability.',
    summary: 'Three-location restaurant group with $3.2M revenue, 45 employees, and prime Miami locations. Urgent sale due to relocation.',
    askingPrice: {
      amount: 4800000,
      currency: 'USD',
      isNegotiable: true,
      includesAssets: true,
      includesRealEstate: true
    },
    businessDetails: {
      industry: 'Food & Beverage',
      subIndustry: 'Restaurants',
      businessModel: 'Full-Service Restaurant',
      foundedYear: 2015,
      employeeCount: 45,
      annualRevenue: 3200000,
      annualProfit: 576000,
      profitMargin: 0.18,
      growthRate: 0.12,
      customerCount: 25000,
      marketShare: 0.05
    },
    location: {
      city: 'Miami',
      state: 'FL',
      country: 'USA',
      zipCode: '33101',
      isRelocatable: false,
      hasMultipleLocations: true,
      locationCount: 3
    },
    assets: {
      intellectualProperty: ['Recipes', 'Brand Identity', 'Customer Database', 'Operating Procedures'],
      realEstate: [
        {
          type: 'Restaurant 1',
          squareFootage: 3000,
          value: 1200000,
          isIncluded: true
        },
        {
          type: 'Restaurant 2',
          squareFootage: 2800,
          value: 1100000,
          isIncluded: true
        },
        {
          type: 'Restaurant 3',
          squareFootage: 3200,
          value: 1300000,
          isIncluded: true
        }
      ],
      equipment: [
        { name: 'Kitchen Equipment', value: 180000, age: 3, isIncluded: true },
        { name: 'POS Systems', value: 45000, age: 2, isIncluded: true },
        { name: 'Furniture & Décor', value: 120000, age: 4, isIncluded: true }
      ],
      inventory: { description: 'Food & Beverage', value: 45000, turnoverRate: 0.95 },
      customerDatabase: true,
      supplierRelationships: true,
      brandValue: 800000
    },
    financials: {
      last3YearsRevenue: [2200000, 2700000, 3200000],
      last3YearsProfit: [330000, 432000, 576000],
      currentAssets: 280000,
      currentLiabilities: 70000,
      debt: 450000,
      cashFlow: 650000,
      projections: {
        nextYearRevenue: 3800000,
        nextYearProfit: 684000,
        growthAssumptions: ['Menu expansion', 'Marketing campaigns', 'Operational efficiency']
      }
    },
    operations: {
      businessHours: 'Tuesday-Sunday 11AM-11PM',
      seasonality: 'High (Tourist season)',
      keyPersonnel: ['Executive Chef', 'General Manager', 'Operations Manager', 'Marketing Director'],
      automationLevel: 'medium',
      technologyStack: ['POS System', 'Inventory Management', 'Reservation System', 'Social Media'],
      processes: ['Kitchen Operations', 'Customer Service', 'Inventory Control', 'Staff Training']
    },
    market: {
      targetMarket: 'Upscale Dining & Tourists',
      marketSize: 12000000000,
      competition: ['Local seafood restaurants', 'Hotel restaurants', 'Fine dining establishments'],
      competitiveAdvantages: ['Prime locations', 'Brand recognition', 'Quality reputation', 'Tourist appeal'],
      marketTrends: ['Local sourcing', 'Experiential dining', 'Digital marketing', 'Delivery expansion'],
      expansionOpportunities: ['New locations', 'Catering services', 'Retail products', 'Franchising']
    },
    reasonForSale: {
      primary: 'Relocation and new business opportunities',
      secondary: 'Capital needed for other ventures',
      timeline: '3-6months',
      urgency: 'high',
      flexibility: 'low'
    },
    dealStructure: {
      preferredTerms: ['cash', 'seller-financing'],
      sellerInvolvement: 'consulting',
      transitionPeriod: 3,
      trainingIncluded: true,
      nonCompetePeriod: 24
    },
    status: 'active',
    visibility: 'public',
    createdAt: new Date('2024-07-01'),
    updatedAt: new Date('2024-11-01'),
    expiresAt: new Date('2025-01-01'),
    views: 312,
    inquiries: 25,
    savedBy: ['buyer-003'],
    tags: ['Restaurant', 'Food & Beverage', 'Seafood', 'Multiple Locations', 'Prime Real Estate', 'Tourist Market'],
    images: ['/businesses/restaurant-1.jpg', '/businesses/restaurant-2.jpg', '/businesses/restaurant-3.jpg'],
    documents: [
      {
        id: 'doc-005',
        name: 'Financial Statements 2021-2024',
        type: 'financial',
        url: '/documents/restaurant-financials.pdf',
        size: 1792000,
        uploadedAt: new Date('2024-10-05'),
        isPublic: false,
        requiresNDA: true
      },
      {
        id: 'doc-006',
        name: 'Real Estate Documents',
        type: 'legal',
        url: '/documents/restaurant-real-estate.pdf',
        size: 3584000,
        uploadedAt: new Date('2024-10-10'),
        isPublic: false,
        requiresNDA: true
      }
    ]
  }
];

export const mockBusinessCategories: BusinessCategory[] = [
  {
    id: 'cat-001',
    name: 'Technology',
    description: 'Software, hardware, and technology services businesses',
    parentCategoryId: undefined,
    subCategories: ['SaaS', 'E-commerce', 'AI/ML', 'FinTech', 'HealthTech', 'EdTech'],
    averagePriceRange: { min: 2000000, max: 50000000, currency: 'USD' },
    typicalMetrics: {
      averageRevenue: 5000000,
      averageProfitMargin: 0.25,
      averageEmployeeCount: 50,
      averageGrowthRate: 0.35
    }
  },
  {
    id: 'cat-002',
    name: 'Manufacturing',
    description: 'Industrial and manufacturing businesses',
    parentCategoryId: undefined,
    subCategories: ['Aerospace', 'Automotive', 'Electronics', 'Food Processing', 'Textiles', 'Chemicals'],
    averagePriceRange: { min: 5000000, max: 100000000, currency: 'USD' },
    typicalMetrics: {
      averageRevenue: 15000000,
      averageProfitMargin: 0.15,
      averageEmployeeCount: 100,
      averageGrowthRate: 0.08
    }
  },
  {
    id: 'cat-003',
    name: 'Food & Beverage',
    description: 'Restaurants, bars, and food service businesses',
    parentCategoryId: undefined,
    subCategories: ['Restaurants', 'Bars', 'Catering', 'Food Manufacturing', 'Beverage Production'],
    averagePriceRange: { min: 500000, max: 10000000, currency: 'USD' },
    typicalMetrics: {
      averageRevenue: 2500000,
      averageProfitMargin: 0.12,
      averageEmployeeCount: 30,
      averageGrowthRate: 0.10
    }
  },
  {
    id: 'cat-004',
    name: 'Healthcare',
    description: 'Medical practices, clinics, and healthcare services',
    parentCategoryId: undefined,
    subCategories: ['Medical Practices', 'Dental', 'Veterinary', 'Home Healthcare', 'Medical Equipment'],
    averagePriceRange: { min: 1000000, max: 25000000, currency: 'USD' },
    typicalMetrics: {
      averageRevenue: 8000000,
      averageProfitMargin: 0.20,
      averageEmployeeCount: 40,
      averageGrowthRate: 0.15
    }
  },
  {
    id: 'cat-005',
    name: 'Retail',
    description: 'Brick-and-mortar and online retail businesses',
    parentCategoryId: undefined,
    subCategories: ['Apparel', 'Electronics', 'Home & Garden', 'Automotive', 'Specialty Retail'],
    averagePriceRange: { min: 300000, max: 15000000, currency: 'USD' },
    typicalMetrics: {
      averageRevenue: 3000000,
      averageProfitMargin: 0.08,
      averageEmployeeCount: 25,
      averageGrowthRate: 0.05
    }
  }
];
