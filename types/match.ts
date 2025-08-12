// Match and conversation types for the Caprae Capitals application

export interface Match {
  id: string;
  buyerId: string;
  sellerId: string;
  businessId: string;
  matchScore: number; // 0-100
  matchFactors: {
    industryAlignment: number;
    priceFit: number;
    locationFit: number;
    sizeFit: number;
    timelineFit: number;
    businessModelFit: number;
    growthPotentialFit: number;
  };
  status: 'pending' | 'interested' | 'not-interested' | 'contacted' | 'meeting-scheduled' | 'nda-signed' | 'due-diligence' | 'offer-made' | 'deal-closed' | 'deal-failed';
  buyerInterest: 'high' | 'medium' | 'low' | 'none';
  sellerInterest: 'high' | 'medium' | 'low' | 'none';
  communicationStatus: 'none' | 'initial' | 'ongoing' | 'stalled' | 'closed';
  createdAt: Date;
  updatedAt: Date;
  lastActivityAt: Date;
  notes: MatchNote[];
  documents: MatchDocument[];
  meetings: Meeting[];
  offers: Offer[];
}

export interface MatchNote {
  id: string;
  authorId: string;
  authorType: 'buyer' | 'seller' | 'admin';
  content: string;
  isPrivate: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface MatchDocument {
  id: string;
  name: string;
  type: 'nda' | 'financial' | 'legal' | 'operational' | 'other';
  url: string;
  uploadedBy: string;
  uploadedAt: Date;
  requiresSignature: boolean;
  signedBy?: string[];
  signedAt?: Date[];
}

export interface Meeting {
  id: string;
  matchId: string;
  title: string;
  description?: string;
  type: 'intro' | 'presentation' | 'due-diligence' | 'negotiation' | 'closing';
  scheduledAt: Date;
  duration: number; // in minutes
  location: {
    type: 'virtual' | 'in-person' | 'hybrid';
    address?: string;
    virtualLink?: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  attendees: MeetingAttendee[];
  status: 'scheduled' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled' | 'rescheduled';
  notes?: string;
  followUpActions?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface MeetingAttendee {
  userId: string;
  userType: 'buyer' | 'seller' | 'advisor' | 'other';
  role: string;
  isRequired: boolean;
  response: 'pending' | 'accepted' | 'declined' | 'tentative';
  responseAt?: Date;
  notes?: string;
}

export interface Offer {
  id: string;
  matchId: string;
  buyerId: string;
  sellerId: string;
  businessId: string;
  type: 'acquisition' | 'merger' | 'partnership' | 'investment';
  amount: number;
  currency: string;
  structure: {
    cash: number;
    sellerFinancing?: number;
    earnOut?: number;
    stockSwap?: number;
    other?: number;
  };
  terms: {
    closingDate: Date;
    dueDiligencePeriod: number; // in days
    financingContingency: boolean;
    inspectionContingency: boolean;
    appraisalContingency: boolean;
    otherContingencies?: string[];
  };
  conditions: string[];
  status: 'draft' | 'submitted' | 'under-review' | 'accepted' | 'rejected' | 'counter-offered' | 'expired' | 'withdrawn';
  submittedAt: Date;
  responseAt?: Date;
  expiresAt: Date;
  notes?: string;
  counterOffers?: CounterOffer[];
}

export interface CounterOffer {
  id: string;
  offerId: string;
  initiatorId: string;
  initiatorType: 'buyer' | 'seller';
  amount: number;
  currency: string;
  changes: string[];
  reason: string;
  submittedAt: Date;
  responseAt?: Date;
  status: 'pending' | 'accepted' | 'rejected' | 'expired';
}

export interface Conversation {
  id: string;
  matchId: string;
  participants: string[];
  type: 'direct' | 'group' | 'deal-room';
  title: string;
  lastMessageAt: Date;
  createdAt: Date;
  updatedAt: Date;
  isArchived: boolean;
  messages: Message[];
  attachments: ConversationAttachment[];
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  senderType: 'buyer' | 'seller' | 'admin';
  content: string;
  type: 'text' | 'image' | 'document' | 'system';
  attachments?: string[];
  isRead: boolean;
  readBy: string[];
  readAt: Date[];
  createdAt: Date;
  updatedAt: Date;
  replyTo?: string;
  editedAt?: Date;
  isEdited: boolean;
}

export interface ConversationAttachment {
  id: string;
  conversationId: string;
  messageId?: string;
  name: string;
  type: 'image' | 'document' | 'video' | 'audio';
  url: string;
  size: number;
  uploadedBy: string;
  uploadedAt: Date;
}

export interface DealRoom {
  id: string;
  matchId: string;
  title: string;
  description?: string;
  status: 'active' | 'archived' | 'closed';
  accessLevel: 'full' | 'limited' | 'view-only';
  participants: DealRoomParticipant[];
  documents: DealRoomDocument[];
  activities: DealRoomActivity[];
  createdAt: Date;
  updatedAt: Date;
  closedAt?: Date;
}

export interface DealRoomParticipant {
  userId: string;
  userType: 'buyer' | 'seller' | 'advisor' | 'admin';
  role: string;
  permissions: {
    canView: boolean;
    canEdit: boolean;
    canUpload: boolean;
    canDelete: boolean;
    canInvite: boolean;
  };
  joinedAt: Date;
  lastActiveAt: Date;
}

export interface DealRoomDocument {
  id: string;
  name: string;
  type: 'financial' | 'legal' | 'operational' | 'marketing' | 'other';
  category: string;
  url: string;
  size: number;
  uploadedBy: string;
  uploadedAt: Date;
  isPublic: boolean;
  requiresNDA: boolean;
  downloadCount: number;
  lastDownloadedAt?: Date;
}

export interface DealRoomActivity {
  id: string;
  type: 'document-uploaded' | 'document-viewed' | 'user-joined' | 'user-left' | 'permission-changed' | 'note-added';
  userId: string;
  userType: 'buyer' | 'seller' | 'admin';
  description: string;
  metadata?: Record<string, any>;
  createdAt: Date;
}
