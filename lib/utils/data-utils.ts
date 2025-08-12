// Utility functions for data filtering, searching, and manipulation

import { Buyer, Seller, User } from '@/types/user';
import { BusinessListing, BusinessSearchFilters } from '@/types/business';
import { Match } from '@/types/match';

// User filtering utilities
export const filterUsersByType = (users: User[], type: 'buyer' | 'seller'): User[] => {
  return users.filter(user => user.type === type);
};

export const filterUsersByLocation = (users: User[], location: string): User[] => {
  const searchLocation = location.toLowerCase();
  return users.filter(user => 
    user.location.city.toLowerCase().includes(searchLocation) ||
    user.location.state.toLowerCase().includes(searchLocation) ||
    user.location.country.toLowerCase().includes(searchLocation)
  );
};

export const filterUsersByIndustry = (users: User[], industry: string): User[] => {
  const searchIndustry = industry.toLowerCase();
  return users.filter(user => 
    user.businessProfile.industry.toLowerCase().includes(searchIndustry)
  );
};

export const filterBuyersByInvestmentRange = (buyers: Buyer[], minAmount: number, maxAmount: number): Buyer[] => {
  return buyers.filter(buyer => 
    buyer.financialProfile.investmentRange.min <= maxAmount &&
    buyer.financialProfile.investmentRange.max >= minAmount
  );
};

export const filterBuyersByPreferredIndustries = (buyers: Buyer[], industries: string[]): Buyer[] => {
  return buyers.filter(buyer => 
    industries.some(industry => 
      buyer.financialProfile.preferredIndustries.includes(industry)
    )
  );
};

export const filterSellersByExitTimeline = (sellers: Seller[], timeline: string): Seller[] => {
  return sellers.filter(seller => seller.exitProfile.timeline === timeline);
};

export const filterSellersByUrgency = (sellers: Seller[], urgency: string): Seller[] => {
  return sellers.filter(seller => seller.exitProfile.urgency === urgency);
};

// Business listing filtering utilities
export const filterBusinessesByPrice = (businesses: BusinessListing[], minPrice: number, maxPrice: number): BusinessListing[] => {
  return businesses.filter(business => 
    business.askingPrice.amount >= minPrice && business.askingPrice.amount <= maxPrice
  );
};

export const filterBusinessesByIndustry = (businesses: BusinessListing[], industries: string[]): BusinessListing[] => {
  return businesses.filter(business => 
    industries.includes(business.businessDetails.industry)
  );
};

export const filterBusinessesByLocation = (businesses: BusinessListing[], locations: string[]): BusinessListing[] => {
  return businesses.filter(business => 
    locations.some(location => 
      business.location.city === location ||
      business.location.state === location ||
      business.location.country === location
    )
  );
};

export const filterBusinessesByEmployeeCount = (businesses: BusinessListing[], minCount: number, maxCount: number): BusinessListing[] => {
  return businesses.filter(business => 
    business.businessDetails.employeeCount >= minCount && 
    business.businessDetails.employeeCount <= maxCount
  );
};

export const filterBusinessesByRevenue = (businesses: BusinessListing[], minRevenue: number, maxRevenue: number): BusinessListing[] => {
  return businesses.filter(business => 
    business.businessDetails.annualRevenue >= minRevenue && 
    business.businessDetails.annualRevenue <= maxRevenue
  );
};

export const filterBusinessesByGrowthRate = (businesses: BusinessListing[], minGrowthRate: number): BusinessListing[] => {
  return businesses.filter(business => 
    business.businessDetails.growthRate >= minGrowthRate
  );
};

export const filterBusinessesByTimeline = (businesses: BusinessListing[], timeline: string): BusinessListing[] => {
  return businesses.filter(business => business.reasonForSale.timeline === timeline);
};

export const filterBusinessesByUrgency = (businesses: BusinessListing[], urgency: string): BusinessListing[] => {
  return businesses.filter(business => business.reasonForSale.urgency === urgency);
};

export const filterBusinessesByTags = (businesses: BusinessListing[], tags: string[]): BusinessListing[] => {
  return businesses.filter(business => 
    tags.some(tag => business.tags.includes(tag))
  );
};

// Advanced business search with multiple filters
export const searchBusinesses = (businesses: BusinessListing[], filters: BusinessSearchFilters): BusinessListing[] => {
  let filtered = [...businesses];

  if (filters.priceRange) {
    filtered = filterBusinessesByPrice(filtered, filters.priceRange.min, filters.priceRange.max);
  }

  if (filters.industries && filters.industries.length > 0) {
    filtered = filterBusinessesByIndustry(filtered, filters.industries);
  }

  if (filters.locations && filters.locations.length > 0) {
    filtered = filterBusinessesByLocation(filtered, filters.locations);
  }

  if (filters.employeeCount) {
    filtered = filterBusinessesByEmployeeCount(filtered, filters.employeeCount.min, filters.employeeCount.max);
  }

  if (filters.revenue) {
    filtered = filterBusinessesByRevenue(filtered, filters.revenue.min, filters.revenue.max);
  }

  if (filters.timeline && filters.timeline.length > 0) {
    filtered = filtered.filter(business => 
      filters.timeline!.includes(business.reasonForSale.timeline)
    );
  }

  if (filters.keywords) {
    const searchTerm = filters.keywords.toLowerCase();
    filtered = filtered.filter(business => 
      business.title.toLowerCase().includes(searchTerm) ||
      business.description.toLowerCase().includes(searchTerm) ||
      business.summary.toLowerCase().includes(searchTerm) ||
      business.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }

  if (filters.tags && filters.tags.length > 0) {
    filtered = filterBusinessesByTags(filtered, filters.tags);
  }

  return filtered;
};

// Match filtering utilities
export const filterMatchesByStatus = (matches: Match[], status: string): Match[] => {
  return matches.filter(match => match.status === status);
};

export const filterMatchesByScore = (matches: Match[], minScore: number): Match[] => {
  return matches.filter(match => match.matchScore >= minScore);
};

export const filterMatchesByBuyerInterest = (matches: Match[], interest: string): Match[] => {
  return matches.filter(match => match.buyerInterest === interest);
};

export const filterMatchesBySellerInterest = (matches: Match[], interest: string): Match[] => {
  return matches.filter(match => match.sellerInterest === interest);
};

export const filterMatchesByCommunicationStatus = (matches: Match[], status: string): Match[] => {
  return matches.filter(match => match.communicationStatus === status);
};

// Sorting utilities
export const sortBusinessesByPrice = (businesses: BusinessListing[], ascending: boolean = true): BusinessListing[] => {
  return [...businesses].sort((a, b) => {
    if (ascending) {
      return a.askingPrice.amount - b.askingPrice.amount;
    } else {
      return b.askingPrice.amount - a.askingPrice.amount;
    }
  });
};

export const sortBusinessesByRevenue = (businesses: BusinessListing[], ascending: boolean = true): BusinessListing[] => {
  return [...businesses].sort((a, b) => {
    if (ascending) {
      return a.businessDetails.annualRevenue - b.businessDetails.annualRevenue;
    } else {
      return b.businessDetails.annualRevenue - a.businessDetails.annualRevenue;
    }
  });
};

export const sortBusinessesByGrowthRate = (businesses: BusinessListing[], ascending: boolean = true): BusinessListing[] => {
  return [...businesses].sort((a, b) => {
    if (ascending) {
      return a.businessDetails.growthRate - b.businessDetails.growthRate;
    } else {
      return b.businessDetails.growthRate - a.businessDetails.growthRate;
    }
  });
};

export const sortBusinessesByDate = (businesses: BusinessListing[], ascending: boolean = true): BusinessListing[] => {
  return [...businesses].sort((a, b) => {
    if (ascending) {
      return a.createdAt.getTime() - b.createdAt.getTime();
    } else {
      return b.createdAt.getTime() - a.createdAt.getTime();
    }
  });
};

export const sortMatchesByScore = (matches: Match[], ascending: boolean = true): Match[] => {
  return [...matches].sort((a, b) => {
    if (ascending) {
      return a.matchScore - b.matchScore;
    } else {
      return b.matchScore - a.matchScore;
    }
  });
};

export const sortMatchesByDate = (matches: Match[], ascending: boolean = true): Match[] => {
  return [...matches].sort((a, b) => {
    if (ascending) {
      return a.createdAt.getTime() - b.createdAt.getTime();
    } else {
      return b.createdAt.getTime() - a.createdAt.getTime();
    }
  });
};

// Search utilities
export const searchUsers = (users: User[], query: string): User[] => {
  const searchTerm = query.toLowerCase();
  return users.filter(user => 
    user.firstName.toLowerCase().includes(searchTerm) ||
    user.lastName.toLowerCase().includes(searchTerm) ||
    user.email.toLowerCase().includes(searchTerm) ||
    user.businessProfile.companyName.toLowerCase().includes(searchTerm) ||
    user.businessProfile.industry.toLowerCase().includes(searchTerm)
  );
};

export const searchBusinessesByText = (businesses: BusinessListing[], query: string): BusinessListing[] => {
  const searchTerm = query.toLowerCase();
  return businesses.filter(business => 
    business.title.toLowerCase().includes(searchTerm) ||
    business.description.toLowerCase().includes(searchTerm) ||
    business.summary.toLowerCase().includes(searchTerm) ||
    business.businessDetails.industry.toLowerCase().includes(searchTerm) ||
    business.businessDetails.businessModel.toLowerCase().includes(searchTerm) ||
    business.location.city.toLowerCase().includes(searchTerm) ||
    business.location.state.toLowerCase().includes(searchTerm) ||
    business.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

// Pagination utilities
export const paginateResults = <T>(items: T[], page: number, limit: number): { items: T[]; total: number; totalPages: number; currentPage: number } => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedItems = items.slice(startIndex, endIndex);
  
  return {
    items: paginatedItems,
    total: items.length,
    totalPages: Math.ceil(items.length / limit),
    currentPage: page
  };
};

// Statistics utilities
export const calculateBusinessStats = (businesses: BusinessListing[]) => {
  if (businesses.length === 0) return null;

  const totalRevenue = businesses.reduce((sum, business) => sum + business.businessDetails.annualRevenue, 0);
  const totalProfit = businesses.reduce((sum, business) => sum + business.businessDetails.annualProfit, 0);
  const totalEmployees = businesses.reduce((sum, business) => sum + business.businessDetails.employeeCount, 0);
  const totalAskingPrice = businesses.reduce((sum, business) => sum + business.askingPrice.amount, 0);

  return {
    count: businesses.length,
    averageRevenue: totalRevenue / businesses.length,
    averageProfit: totalProfit / businesses.length,
    averageEmployees: totalEmployees / businesses.length,
    averageAskingPrice: totalAskingPrice / businesses.length,
    totalRevenue,
    totalProfit,
    totalEmployees,
    totalAskingPrice
  };
};

export const calculateMatchStats = (matches: Match[]) => {
  if (matches.length === 0) return null;

  const totalScore = matches.reduce((sum, match) => sum + match.matchScore, 0);
  const highInterestMatches = matches.filter(match => 
    match.buyerInterest === 'high' || match.sellerInterest === 'high'
  ).length;

  return {
    count: matches.length,
    averageScore: totalScore / matches.length,
    highInterestCount: highInterestMatches,
    highInterestPercentage: (highInterestMatches / matches.length) * 100
  };
};

// Export all utilities
export const dataUtils = {
  // User filtering
  filterUsersByType,
  filterUsersByLocation,
  filterUsersByIndustry,
  filterBuyersByInvestmentRange,
  filterBuyersByPreferredIndustries,
  filterSellersByExitTimeline,
  filterSellersByUrgency,
  
  // Business filtering
  filterBusinessesByPrice,
  filterBusinessesByIndustry,
  filterBusinessesByLocation,
  filterBusinessesByEmployeeCount,
  filterBusinessesByRevenue,
  filterBusinessesByGrowthRate,
  filterBusinessesByTimeline,
  filterBusinessesByUrgency,
  filterBusinessesByTags,
  searchBusinesses,
  
  // Match filtering
  filterMatchesByStatus,
  filterMatchesByScore,
  filterMatchesByBuyerInterest,
  filterMatchesBySellerInterest,
  filterMatchesByCommunicationStatus,
  
  // Sorting
  sortBusinessesByPrice,
  sortBusinessesByRevenue,
  sortBusinessesByGrowthRate,
  sortBusinessesByDate,
  sortMatchesByScore,
  sortMatchesByDate,
  
  // Searching
  searchUsers,
  searchBusinessesByText,
  
  // Pagination
  paginateResults,
  
  // Statistics
  calculateBusinessStats,
  calculateMatchStats
};
