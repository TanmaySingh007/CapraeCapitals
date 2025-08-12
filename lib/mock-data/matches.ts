// Mock match and conversation data for the Caprae Capitals application

import { Match, Conversation, Meeting, Offer, DealRoom } from '@/types/match';

export const mockMatches: Match[] = [
  {
    id: 'match-001',
    buyerId: 'buyer-001',
    sellerId: 'seller-001',
    businessId: 'business-001',
    matchScore: 87,
    matchFactors: {
      industryAlignment: 95,
      priceFit: 85,
      locationFit: 70,
      sizeFit: 90,
      timelineFit: 80,
      businessModelFit: 95,
      growthPotentialFit: 90
    },
    status: 'due-diligence',
    buyerInterest: 'high',
    sellerInterest: 'high',
    communicationStatus: 'ongoing',
    createdAt: new Date('2024-10-15'),
    updatedAt: new Date('2024-11-01'),
    lastActivityAt: new Date('2024-11-01'),
    notes: [
      {
        id: 'note-001',
        authorId: 'buyer-001',
        authorType: 'buyer',
        content: 'Very interested in this opportunity. SaaS business with strong growth potential aligns perfectly with our investment thesis.',
        isPrivate: false,
        createdAt: new Date('2024-10-15'),
        updatedAt: new Date('2024-10-15')
      },
      {
        id: 'note-002',
        authorId: 'seller-001',
        authorType: 'seller',
        content: 'Buyer has strong technology background and seems genuinely interested in growing the business.',
        isPrivate: false,
        createdAt: new Date('2024-10-16'),
        updatedAt: new Date('2024-10-16')
      }
    ],
    documents: [
      {
        id: 'match-doc-001',
        name: 'NDA Agreement',
        type: 'nda',
        url: '/documents/nda-agreement.pdf',
        uploadedBy: 'buyer-001',
        uploadedAt: new Date('2024-10-20'),
        requiresSignature: true,
        signedBy: ['buyer-001', 'seller-001'],
        signedAt: [new Date('2024-10-21'), new Date('2024-10-22')]
      }
    ],
    meetings: [],
    offers: []
  },
  {
    id: 'match-002',
    buyerId: 'buyer-002',
    sellerId: 'seller-002',
    businessId: 'business-002',
    matchScore: 78,
    matchFactors: {
      industryAlignment: 85,
      priceFit: 75,
      locationFit: 80,
      sizeFit: 85,
      timelineFit: 70,
      businessModelFit: 80,
      growthPotentialFit: 75
    },
    status: 'meeting-scheduled',
    buyerInterest: 'medium',
    sellerInterest: 'high',
    communicationStatus: 'ongoing',
    createdAt: new Date('2024-10-20'),
    updatedAt: new Date('2024-11-01'),
    lastActivityAt: new Date('2024-11-01'),
    notes: [
      {
        id: 'note-003',
        authorId: 'buyer-002',
        authorType: 'buyer',
        content: 'Manufacturing business looks solid with good contracts. Need to understand the succession planning better.',
        isPrivate: false,
        createdAt: new Date('2024-10-20'),
        updatedAt: new Date('2024-10-20')
      }
    ],
    documents: [],
    meetings: [
      {
        id: 'meeting-001',
        matchId: 'match-002',
        title: 'Initial Business Overview Meeting',
        description: 'Introduction meeting to discuss business overview, financials, and succession planning.',
        type: 'intro',
        scheduledAt: new Date('2024-11-15T14:00:00Z'),
        duration: 60,
        location: {
          type: 'virtual',
          virtualLink: 'https://meet.google.com/abc-defg-hij'
        },
        attendees: [
          {
            userId: 'buyer-002',
            userType: 'buyer',
            role: 'Principal',
            isRequired: true,
            response: 'accepted',
            responseAt: new Date('2024-10-25')
          },
          {
            userId: 'seller-002',
            userType: 'seller',
            role: 'Owner',
            isRequired: true,
            response: 'accepted',
            responseAt: new Date('2024-10-26')
          }
        ],
        status: 'confirmed',
        notes: 'Meeting confirmed for November 15th at 2 PM EST',
        followUpActions: ['Send financial documents', 'Prepare presentation deck'],
        createdAt: new Date('2024-10-22'),
        updatedAt: new Date('2024-10-26')
      }
    ],
    offers: []
  },
  {
    id: 'match-003',
    buyerId: 'buyer-003',
    sellerId: 'seller-003',
    businessId: 'business-003',
    matchScore: 82,
    matchFactors: {
      industryAlignment: 90,
      priceFit: 80,
      locationFit: 85,
      sizeFit: 75,
      timelineFit: 70,
      businessModelFit: 85,
      growthPotentialFit: 80
    },
    status: 'offer-made',
    buyerInterest: 'high',
    sellerInterest: 'high',
    communicationStatus: 'ongoing',
    createdAt: new Date('2024-09-15'),
    updatedAt: new Date('2024-11-01'),
    lastActivityAt: new Date('2024-11-01'),
    notes: [
      {
        id: 'note-004',
        authorId: 'buyer-003',
        authorType: 'buyer',
        content: 'Restaurant group fits our portfolio perfectly. Prime locations and strong brand recognition.',
        isPrivate: false,
        createdAt: new Date('2024-09-15'),
        updatedAt: new Date('2024-09-15')
      }
    ],
    documents: [],
    meetings: [],
    offers: [
      {
        id: 'offer-001',
        matchId: 'match-003',
        buyerId: 'buyer-003',
        sellerId: 'seller-003',
        businessId: 'business-003',
        type: 'acquisition',
        amount: 4500000,
        currency: 'USD',
        structure: {
          cash: 4000000,
          sellerFinancing: 500000
        },
        terms: {
          closingDate: new Date('2025-01-15'),
          dueDiligencePeriod: 30,
          financingContingency: true,
          inspectionContingency: true,
          appraisalContingency: false,
          otherContingencies: ['Liquor license transfer', 'Employee retention']
        },
        conditions: ['Satisfactory due diligence', 'Financing approval', 'Property inspection'],
        status: 'under-review',
        submittedAt: new Date('2024-10-25'),
        expiresAt: new Date('2024-11-25'),
        notes: 'Offer includes seller financing to bridge valuation gap',
        counterOffers: []
      }
    ]
  }
];

export const mockConversations: Conversation[] = [
  {
    id: 'conv-001',
    matchId: 'match-001',
    participants: ['buyer-001', 'seller-001'],
    type: 'direct',
    title: 'TechStart Solutions Discussion',
    lastMessageAt: new Date('2024-11-01T10:30:00Z'),
    createdAt: new Date('2024-10-15'),
    updatedAt: new Date('2024-11-01'),
    isArchived: false,
    messages: [
      {
        id: 'msg-001',
        conversationId: 'conv-001',
        senderId: 'buyer-001',
        senderType: 'buyer',
        content: 'Hi Robert, I\'m very interested in TechStart Solutions. The SaaS model and growth trajectory look excellent.',
        type: 'text',
        isRead: true,
        readBy: ['seller-001'],
        readAt: [new Date('2024-10-15T15:30:00Z')],
        createdAt: new Date('2024-10-15T15:00:00Z'),
        updatedAt: new Date('2024-10-15T15:00:00Z'),
        isEdited: false
      },
      {
        id: 'msg-002',
        conversationId: 'conv-001',
        senderId: 'seller-001',
        senderType: 'seller',
        content: 'Thank you John! I\'m glad you see the potential. What aspects of the business are you most interested in?',
        type: 'text',
        isRead: true,
        readBy: ['buyer-001'],
        readAt: [new Date('2024-10-15T16:00:00Z')],
        createdAt: new Date('2024-10-15T15:45:00Z'),
        updatedAt: new Date('2024-10-15T15:45:00Z'),
        isEdited: false
      },
      {
        id: 'msg-003',
        conversationId: 'conv-001',
        senderId: 'buyer-001',
        senderType: 'buyer',
        content: 'I\'m particularly interested in the AI analytics engine and the enterprise customer base. Can we schedule a call to discuss the technical architecture?',
        type: 'text',
        isRead: true,
        readBy: ['seller-001'],
        readAt: [new Date('2024-10-16T09:00:00Z')],
        createdAt: new Date('2024-10-15T16:30:00Z'),
        updatedAt: new Date('2024-10-15T16:30:00Z'),
        isEdited: false
      },
      {
        id: 'msg-004',
        conversationId: 'conv-001',
        senderId: 'seller-001',
        senderType: 'seller',
        content: 'Absolutely! I\'d be happy to walk you through the technical details. How about tomorrow at 2 PM EST?',
        type: 'text',
        isRead: true,
        readBy: ['buyer-001'],
        readAt: [new Date('2024-10-16T09:15:00Z')],
        createdAt: new Date('2024-10-16T09:00:00Z'),
        updatedAt: new Date('2024-10-16T09:00:00Z'),
        isEdited: false
      },
      {
        id: 'msg-005',
        conversationId: 'conv-001',
        senderId: 'buyer-001',
        senderType: 'buyer',
        content: 'Perfect! I\'ll send you a calendar invite. Also, I\'d like to discuss the financial projections and growth assumptions.',
        type: 'text',
        isRead: false,
        readBy: [],
        readAt: [],
        createdAt: new Date('2024-11-01T10:30:00Z'),
        updatedAt: new Date('2024-11-01T10:30:00Z'),
        isEdited: false
      }
    ],
    attachments: []
  },
  {
    id: 'conv-002',
    matchId: 'match-002',
    participants: ['buyer-002', 'seller-002'],
    type: 'direct',
    title: 'Precision Manufacturing Discussion',
    lastMessageAt: new Date('2024-10-30T16:45:00Z'),
    createdAt: new Date('2024-10-20'),
    updatedAt: new Date('2024-10-30'),
    isArchived: false,
    messages: [
      {
        id: 'msg-006',
        conversationId: 'conv-002',
        senderId: 'buyer-002',
        senderType: 'buyer',
        content: 'Hi Lisa, I\'ve reviewed the Precision Manufacturing materials. The ISO certifications and long-term contracts are impressive.',
        type: 'text',
        isRead: true,
        readBy: ['seller-002'],
        readAt: [new Date('2024-10-20T14:00:00Z')],
        createdAt: new Date('2024-10-20T13:30:00Z'),
        updatedAt: new Date('2024-10-20T13:30:00Z'),
        isEdited: false
      },
      {
        id: 'msg-007',
        conversationId: 'conv-002',
        senderId: 'seller-002',
        senderType: 'seller',
        content: 'Thank you Sarah! We\'ve built a solid reputation in the industry. What questions do you have about the operations?',
        type: 'text',
        isRead: true,
        readBy: ['buyer-002'],
        readAt: [new Date('2024-10-20T15:00:00Z')],
        createdAt: new Date('2024-10-20T14:30:00Z'),
        updatedAt: new Date('2024-10-20T14:30:00Z'),
        isEdited: false
      },
      {
        id: 'msg-008',
        conversationId: 'conv-002',
        senderId: 'buyer-002',
        senderType: 'buyer',
        content: 'I\'d like to understand the succession planning timeline and how you envision the transition period.',
        type: 'text',
        isRead: true,
        readBy: ['seller-002'],
        readAt: [new Date('2024-10-21T10:00:00Z')],
        createdAt: new Date('2024-10-20T16:00:00Z'),
        updatedAt: new Date('2024-10-20T16:00:00Z'),
        isEdited: false
      },
      {
        id: 'msg-009',
        conversationId: 'conv-002',
        senderId: 'seller-002',
        senderType: 'seller',
        content: 'Great question! I\'m flexible on the timeline and would be happy to stay on for up to 12 months to ensure a smooth transition.',
        type: 'text',
        isRead: true,
        readBy: ['buyer-002'],
        readAt: [new Date('2024-10-21T11:00:00Z')],
        createdAt: new Date('2024-10-21T10:30:00Z'),
        updatedAt: new Date('2024-10-21T10:30:00Z'),
        isEdited: false
      },
      {
        id: 'msg-010',
        conversationId: 'conv-002',
        senderId: 'buyer-002',
        senderType: 'buyer',
        content: 'That sounds perfect. Let\'s schedule a meeting to discuss this further. I\'ll send you some available times.',
        type: 'text',
        isRead: true,
        readBy: ['seller-002'],
        readAt: [new Date('2024-10-30T17:00:00Z')],
        createdAt: new Date('2024-10-30T16:45:00Z'),
        updatedAt: new Date('2024-10-30T16:45:00Z'),
        isEdited: false
      }
    ],
    attachments: []
  }
];

export const mockDealRooms: DealRoom[] = [
  {
    id: 'dealroom-001',
    matchId: 'match-001',
    title: 'TechStart Solutions Due Diligence',
    description: 'Due diligence materials and discussions for TechStart Solutions acquisition',
    status: 'active',
    accessLevel: 'full',
    participants: [
      {
        userId: 'buyer-001',
        userType: 'buyer',
        role: 'Principal',
        permissions: {
          canView: true,
          canEdit: true,
          canUpload: true,
          canDelete: false,
          canInvite: true
        },
        joinedAt: new Date('2024-10-25'),
        lastActiveAt: new Date('2024-11-01')
      },
      {
        userId: 'seller-001',
        userType: 'seller',
        role: 'Owner',
        permissions: {
          canView: true,
          canEdit: true,
          canUpload: true,
          canDelete: false,
          canInvite: true
        },
        joinedAt: new Date('2024-10-25'),
        lastActiveAt: new Date('2024-11-01')
      }
    ],
    documents: [
      {
        id: 'dealroom-doc-001',
        name: 'Financial Model',
        type: 'financial',
        category: 'Financial Analysis',
        url: '/documents/techstart-financial-model.xlsx',
        size: 512000,
        uploadedBy: 'seller-001',
        uploadedAt: new Date('2024-10-26'),
        isPublic: true,
        requiresNDA: false,
        downloadCount: 3,
        lastDownloadedAt: new Date('2024-10-30')
      },
      {
        id: 'dealroom-doc-002',
        name: 'Customer Contracts',
        type: 'legal',
        category: 'Legal Documents',
        url: '/documents/techstart-customer-contracts.pdf',
        size: 2048000,
        uploadedBy: 'seller-001',
        uploadedAt: new Date('2024-10-27'),
        isPublic: false,
        requiresNDA: true,
        downloadCount: 1,
        lastDownloadedAt: new Date('2024-10-28')
      }
    ],
    activities: [
      {
        id: 'activity-001',
        type: 'document-uploaded',
        userId: 'seller-001',
        userType: 'seller',
        description: 'Financial Model uploaded',
        metadata: { documentId: 'dealroom-doc-001' },
        createdAt: new Date('2024-10-26')
      },
      {
        id: 'activity-002',
        type: 'document-viewed',
        userId: 'buyer-001',
        userType: 'buyer',
        description: 'Financial Model viewed',
        metadata: { documentId: 'dealroom-doc-001' },
        createdAt: new Date('2024-10-27')
      },
      {
        id: 'activity-003',
        type: 'document-uploaded',
        userId: 'seller-001',
        userType: 'seller',
        description: 'Customer Contracts uploaded',
        metadata: { documentId: 'dealroom-doc-002' },
        createdAt: new Date('2024-10-27')
      }
    ],
    createdAt: new Date('2024-10-25'),
    updatedAt: new Date('2024-11-01')
  }
];

export const mockMeetings: Meeting[] = [
  {
    id: 'meeting-001',
    matchId: 'match-002',
    title: 'Initial Business Overview Meeting',
    description: 'Introduction meeting to discuss business overview, financials, and succession planning.',
    type: 'intro',
    scheduledAt: new Date('2024-11-15T14:00:00Z'),
    duration: 60,
    location: {
      type: 'virtual',
      virtualLink: 'https://meet.google.com/abc-defg-hij'
    },
    attendees: [
      {
        userId: 'buyer-002',
        userType: 'buyer',
        role: 'Principal',
        isRequired: true,
        response: 'accepted',
        responseAt: new Date('2024-10-25')
      },
      {
        userId: 'seller-002',
        userType: 'seller',
        role: 'Owner',
        isRequired: true,
        response: 'accepted',
        responseAt: new Date('2024-10-26')
      }
    ],
    status: 'confirmed',
    notes: 'Meeting confirmed for November 15th at 2 PM EST',
    followUpActions: ['Send financial documents', 'Prepare presentation deck'],
    createdAt: new Date('2024-10-22'),
    updatedAt: new Date('2024-10-26')
  }
];

export const mockOffers: Offer[] = [
  {
    id: 'offer-001',
    matchId: 'match-003',
    buyerId: 'buyer-003',
    sellerId: 'seller-003',
    businessId: 'business-003',
    type: 'acquisition',
    amount: 4500000,
    currency: 'USD',
    structure: {
      cash: 4000000,
      sellerFinancing: 500000
    },
    terms: {
      closingDate: new Date('2025-01-15'),
      dueDiligencePeriod: 30,
      financingContingency: true,
      inspectionContingency: true,
      appraisalContingency: false,
      otherContingencies: ['Liquor license transfer', 'Employee retention']
    },
    conditions: ['Satisfactory due diligence', 'Financing approval', 'Property inspection'],
    status: 'under-review',
    submittedAt: new Date('2024-10-25'),
    expiresAt: new Date('2024-11-25'),
    notes: 'Offer includes seller financing to bridge valuation gap',
    counterOffers: []
  }
];
