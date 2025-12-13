export interface StrapiEntity<TAttributes> {
  id: number;
  attributes?: TAttributes;
}

export type StrapiRelationValue<T> =
  | { data: T | T[] | null }
  | T
  | T[]
  | null
  | undefined;

export interface StrapiPaginationMeta {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface StrapiMeta {
  pagination?: StrapiPaginationMeta;
}

export interface StrapiListResponse<TAttributes> {
  data: StrapiEntity<TAttributes>[];
  meta: StrapiMeta;
}

export interface StrapiSingleResponse<TAttributes> {
  data: StrapiEntity<TAttributes> | null;
  meta: StrapiMeta;
}

export interface StrapiMediaFormat {
  url: string;
  width?: number;
  height?: number;
  ext?: string;
  mime?: string;
  size?: number;
}

export interface StrapiMediaAttributes {
  url: string;
  alternativeText?: string | null;
  caption?: string | null;
  formats?: Record<string, StrapiMediaFormat | undefined>;
}

export type StrapiMedia = {
  id: number;
  attributes?: StrapiMediaAttributes | null;
} & Partial<StrapiMediaAttributes>;

export type StrapiEntityRelation<TAttributes> = StrapiRelationValue<
  StrapiEntity<TAttributes>
>;

export type StrapiMediaRelation = StrapiRelationValue<StrapiMedia>;

export interface NormalizedMedia {
  id: number;
  url: string;
  path: string;
  alternativeText?: string | null;
}
