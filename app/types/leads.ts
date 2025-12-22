export type LeadFormService =
  | "general"
  | "tailoring"
  | "collection"
  | "training";

export type LeadApiServiceType = "READY_PRODUCT" | "TAILORING" | "LEARNING";

export interface LeadProductMetadata {
  name?: string;
  collectionName?: string;
  fabric?: string | null;
  color?: string | null;
  size?: string | null;
  url?: string;
}

export interface LeadMetadata {
  product?: LeadProductMetadata;
  photoUrls?: string[];
  [key: string]: unknown;
}

export interface LeadRequestPayload {
  source: "SITE";
  serviceType: LeadApiServiceType;
  clientName: string;
  phone: string;
  telegramUsername?: string;
  preferredContactMethod?: "PHONE" | "TELEGRAM" | "WHATSAPP";
  comment?: string;
  productName?: string;
  collectionName?: string;
  fabric?: string | null;
  color?: string | null;
  size?: string | null;
  productUrl?: string;
  learningFormat?: string;
  learningLevel?: string;
}

export const mapLeadServiceType = (
  service: LeadFormService
): LeadApiServiceType => {
  switch (service) {
    case "tailoring":
      return "TAILORING";
    case "training":
      return "LEARNING";
    case "collection":
    case "general":
    default:
      return "READY_PRODUCT";
  }
};
