// Mock user data for the Caprae Capitals application

import { Buyer, Seller, User } from '@/types/user';

export const mockBuyers: Buyer[] = [
  {
    id: 'buyer-001',
    type: 'buyer',
    email: 'john.smith@venturecapital.com',
    firstName: 'John',
    lastName: 'Smith',
    avatar: '/avatars/john-smith.jpg',
    phone: '+1-555-0123',
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA',
      zipCode: '94105',
      coordinates: { latitude: 37.7749, longitude: -122.4194 }
    },
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date('2024-11-01'),
    isVerified: true,
    isActive: true,
    businessProfile: {
      companyName: 'Venture Capital Partners',
      industry: 'Financial Services',
      description: 'Leading venture capital firm specializing in technology startups and growth-stage companies.',
      foundedYear: 2010,
      employeeCount: 25,
      annualRevenue: 50000000,
      website: 'https://venturecapital.com',
      logo: '/logos/vcp-logo.png',
      certifications: ['Series 7', 'Series 63', 'CFA'],
      socialMedia: {
        linkedin: 'https://linkedin.com/in/johnsmith-vcp',
        twitter: 'https://twitter.com/johnsmith_vcp'
      }
    },
    financialProfile: {
      investmentRange: { min: 1000000, max: 50000000, currency: 'USD' },
      preferredIndustries: ['Technology', 'Healthcare', 'FinTech', 'Clean Energy'],
      investmentHistory: {
        totalInvestments: 15,
        successfulExits: 8,
        averageROI: 3.2
      },
      riskTolerance: 'medium',
      investmentHorizon: 'long'
    },
    investmentCriteria: {
      targetIndustries: ['SaaS', 'AI/ML', 'Digital Health', 'E-commerce'],
      targetLocations: ['California', 'New York', 'Texas', 'Massachusetts'],
      minCompanySize: 10,
      maxCompanySize: 200,
      preferredBusinessModels: ['B2B SaaS', 'Marketplace', 'Subscription', 'Platform']
    },
    preferences: {
      dealTypes: ['acquisition', 'investment'],
      communicationFrequency: 'weekly',
      meetingPreference: 'hybrid'
    }
  },
  {
    id: 'buyer-002',
    type: 'buyer',
    email: 'sarah.johnson@privateequity.com',
    firstName: 'Sarah',
    lastName: 'Johnson',
    avatar: '/avatars/sarah-johnson.jpg',
    phone: '+1-555-0124',
    location: {
      city: 'New York',
      state: 'NY',
      country: 'USA',
      zipCode: '10001',
      coordinates: { latitude: 40.7128, longitude: -74.0060 }
    },
    createdAt: new Date('2022-08-20'),
    updatedAt: new Date('2024-11-01'),
    isVerified: true,
    isActive: true,
    businessProfile: {
      companyName: 'Private Equity Group',
      industry: 'Financial Services',
      description: 'Established private equity firm focused on middle-market acquisitions and growth investments.',
      foundedYear: 2005,
      employeeCount: 45,
      annualRevenue: 75000000,
      website: 'https://privateequity.com',
      logo: '/logos/peg-logo.png',
      certifications: ['Series 7', 'Series 63', 'MBA'],
      socialMedia: {
        linkedin: 'https://linkedin.com/in/sarahjohnson-peg'
      }
    },
    financialProfile: {
      investmentRange: { min: 5000000, max: 100000000, currency: 'USD' },
      preferredIndustries: ['Manufacturing', 'Distribution', 'Healthcare Services', 'Business Services'],
      investmentHistory: {
        totalInvestments: 22,
        successfulExits: 12,
        averageROI: 2.8
      },
      riskTolerance: 'low',
      investmentHorizon: 'medium'
    },
    investmentCriteria: {
      targetIndustries: ['Manufacturing', 'Distribution', 'Healthcare', 'Professional Services'],
      targetLocations: ['Northeast', 'Midwest', 'Southeast'],
      minCompanySize: 50,
      maxCompanySize: 500,
      preferredBusinessModels: ['Manufacturing', 'Distribution', 'Service Business', 'Franchise']
    },
    preferences: {
      dealTypes: ['acquisition', 'merger'],
      communicationFrequency: 'monthly',
      meetingPreference: 'in-person'
    }
  },
  {
    id: 'buyer-003',
    type: 'buyer',
    email: 'michael.chen@familyoffice.com',
    firstName: 'Michael',
    lastName: 'Chen',
    avatar: '/avatars/michael-chen.jpg',
    phone: '+1-555-0125',
    location: {
      city: 'Los Angeles',
      state: 'CA',
      country: 'USA',
      zipCode: '90210',
      coordinates: { latitude: 34.0522, longitude: -118.2437 }
    },
    createdAt: new Date('2023-03-10'),
    updatedAt: new Date('2024-11-01'),
    isVerified: true,
    isActive: true,
    businessProfile: {
      companyName: 'Chen Family Office',
      industry: 'Family Office',
      description: 'Multi-generational family office managing diverse investment portfolio including real estate, businesses, and alternative investments.',
      foundedYear: 1995,
      employeeCount: 12,
      annualRevenue: 15000000,
      website: 'https://chenfamilyoffice.com',
      logo: '/logos/cfo-logo.png',
      certifications: ['CFA', 'CPA', 'MBA'],
      socialMedia: {
        linkedin: 'https://linkedin.com/in/michaelchen-cfo'
      }
    },
    financialProfile: {
      investmentRange: { min: 500000, max: 25000000, currency: 'USD' },
      preferredIndustries: ['Real Estate', 'Food & Beverage', 'Retail', 'Entertainment'],
      investmentHistory: {
        totalInvestments: 8,
        successfulExits: 5,
        averageROI: 2.5
      },
      riskTolerance: 'medium',
      investmentHorizon: 'long'
    },
    investmentCriteria: {
      targetIndustries: ['Restaurants', 'Retail', 'Real Estate', 'Entertainment'],
      targetLocations: ['California', 'Nevada', 'Arizona'],
      minCompanySize: 5,
      maxCompanySize: 100,
      preferredBusinessModels: ['Franchise', 'Independent Business', 'Real Estate Investment']
    },
    preferences: {
      dealTypes: ['acquisition', 'partnership'],
      communicationFrequency: 'weekly',
      meetingPreference: 'hybrid'
    }
  }
];

export const mockSellers: Seller[] = [
  {
    id: 'seller-001',
    type: 'seller',
    email: 'robert.williams@techstartup.com',
    firstName: 'Robert',
    lastName: 'Williams',
    avatar: '/avatars/robert-williams.jpg',
    phone: '+1-555-0126',
    location: {
      city: 'Austin',
      state: 'TX',
      country: 'USA',
      zipCode: '78701',
      coordinates: { latitude: 30.2672, longitude: -97.7431 }
    },
    createdAt: new Date('2021-06-15'),
    updatedAt: new Date('2024-11-01'),
    isVerified: true,
    isActive: true,
    businessProfile: {
      companyName: 'TechStart Solutions',
      industry: 'Technology',
      description: 'Innovative SaaS company providing cloud-based project management solutions for enterprise clients.',
      foundedYear: 2018,
      employeeCount: 35,
      annualRevenue: 2800000,
      website: 'https://techstart.com',
      logo: '/logos/techstart-logo.png',
      certifications: ['ISO 27001', 'SOC 2 Type II'],
      socialMedia: {
        linkedin: 'https://linkedin.com/company/techstart-solutions',
        twitter: 'https://twitter.com/techstart_sol'
      }
    },
    exitProfile: {
      reason: 'Strategic exit to focus on new ventures',
      timeline: '6-12months',
      urgency: 'medium',
      flexibility: 'medium'
    },
    businessMetrics: {
      currentRevenue: 2800000,
      projectedRevenue: 4200000,
      profitMargin: 0.35,
      growthRate: 0.45,
      customerCount: 125,
      marketShare: 0.08
    },
    assets: {
      intellectualProperty: ['Project Management Platform', 'AI Analytics Engine', 'Mobile App'],
      realEstate: ['Office Space - 5000 sq ft'],
      equipment: ['Development Servers', 'Office Equipment'],
      inventory: ['Software Licenses']
    },
    liabilities: {
      debt: 150000,
      outstandingPayables: 75000
    }
  },
  {
    id: 'seller-002',
    type: 'seller',
    email: 'lisa.garcia@manufacturing.com',
    firstName: 'Lisa',
    lastName: 'Garcia',
    avatar: '/avatars/lisa-garcia.jpg',
    phone: '+1-555-0127',
    location: {
      city: 'Chicago',
      state: 'IL',
      country: 'USA',
      zipCode: '60601',
      coordinates: { latitude: 41.8781, longitude: -87.6298 }
    },
    createdAt: new Date('2020-09-22'),
    updatedAt: new Date('2024-11-01'),
    isVerified: true,
    isActive: true,
    businessProfile: {
      companyName: 'Precision Manufacturing Co.',
      industry: 'Manufacturing',
      description: 'High-precision manufacturing company specializing in aerospace and automotive components with long-term contracts.',
      foundedYear: 2005,
      employeeCount: 85,
      annualRevenue: 8500000,
      website: 'https://precisionmanufacturing.com',
      logo: '/logos/pmc-logo.png',
      certifications: ['AS9100', 'ISO 9001', 'IATF 16949'],
      socialMedia: {
        linkedin: 'https://linkedin.com/company/precision-manufacturing-co'
      }
    },
    exitProfile: {
      reason: 'Retirement and succession planning',
      timeline: '1-2years',
      urgency: 'low',
      flexibility: 'high'
    },
    businessMetrics: {
      currentRevenue: 8500000,
      projectedRevenue: 9200000,
      profitMargin: 0.22,
      growthRate: 0.08,
      customerCount: 12,
      marketShare: 0.15
    },
    assets: {
      intellectualProperty: ['Manufacturing Processes', 'Quality Control Systems', 'CAD Designs'],
      realEstate: ['Manufacturing Facility - 25000 sq ft', 'Warehouse - 10000 sq ft'],
      equipment: ['CNC Machines', 'Quality Testing Equipment', 'Forklifts'],
      inventory: ['Raw Materials & WIP']
    },
    liabilities: {
      debt: 1200000,
      outstandingPayables: 180000
    }
  },
  {
    id: 'seller-003',
    type: 'seller',
    email: 'david.brown@restaurant.com',
    firstName: 'David',
    lastName: 'Brown',
    avatar: '/avatars/david-brown.jpg',
    phone: '+1-555-0128',
    location: {
      city: 'Miami',
      state: 'FL',
      country: 'USA',
      zipCode: '33101',
      coordinates: { latitude: 25.7617, longitude: -80.1918 }
    },
    createdAt: new Date('2022-01-10'),
    updatedAt: new Date('2024-11-01'),
    isVerified: true,
    isActive: true,
    businessProfile: {
      companyName: 'Coastal Bistro Group',
      industry: 'Food & Beverage',
      description: 'Successful restaurant group operating three upscale seafood restaurants in prime Miami locations.',
      foundedYear: 2015,
      employeeCount: 45,
      annualRevenue: 3200000,
      website: 'https://coastalbistro.com',
      logo: '/logos/cbg-logo.png',
      certifications: ['Food Safety Manager', 'ServSafe'],
      socialMedia: {
        linkedin: 'https://linkedin.com/company/coastal-bistro-group'
      }
    },
    exitProfile: {
      reason: 'Relocation and new business opportunities',
      timeline: '3-6months',
      urgency: 'high',
      flexibility: 'low'
    },
    businessMetrics: {
      currentRevenue: 3200000,
      projectedRevenue: 3800000,
      profitMargin: 0.18,
      growthRate: 0.12,
      customerCount: 25000,
      marketShare: 0.05
    },
    assets: {
      intellectualProperty: ['Recipes', 'Brand Identity', 'Customer Database'],
      realEstate: ['Restaurant 1 - 3000 sq ft', 'Restaurant 2 - 2800 sq ft', 'Restaurant 3 - 3200 sq ft'],
      equipment: ['Kitchen Equipment', 'POS Systems', 'Furniture & Décor'],
      inventory: ['Food & Beverage']
    },
    liabilities: {
      debt: 450000,
      outstandingPayables: 25000
    }
  }
];

export const mockUsers: User[] = [...mockBuyers, ...mockSellers];

export const mockUserPreferences = [
  {
    userId: 'buyer-001',
    notifications: {
      email: true,
      push: true,
      sms: false
    },
    privacy: {
      profileVisibility: 'public',
      contactInfoVisibility: 'connections'
    },
    communication: {
      autoResponder: true,
      responseTime: 24,
      preferredLanguage: 'English'
    }
  },
  {
    userId: 'seller-001',
    notifications: {
      email: true,
      push: false,
      sms: true
    },
    privacy: {
      profileVisibility: 'public',
      contactInfoVisibility: 'public'
    },
    communication: {
      autoResponder: false,
      responseTime: 48,
      preferredLanguage: 'English'
    }
  }
];
