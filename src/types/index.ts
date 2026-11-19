export type NavSection = 'inici' | 'serveis' | 'tarifes' | 'quisom' | 'contacte';

export interface RoadRateItem {
  id: string;
  serviceType: string;
  route: string;
  distance: string;
  distanceKm: number;
  priceRange: string;
  minPrice: number;
  maxPrice: number;
  transitHours: string;
}

export interface RoadService {
  id: string;
  number: string;
  title: string;
  iconName: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  specs: string[];
  badge: string;
}

export interface QuoteFormData {
  nameOrCompany: string;
  contactEmailOrPhone: string;
  originPoint: string;
  destinationPoint: string;
  cargoDetails: string;
  serviceType?: string;
}
