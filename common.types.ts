import { initialData } from "./constants";

export type FormState = {
  email: string;
  password: string;
  confirmPassword?: string;
};

export type TFormFieldProps = {
  type?: string;
  label?: string;
  id: string;
  placeholder?: string;
  register?: any;
  error?: any;
};

export type structurePageType = {
  page: string;
  link: string;
  last?: boolean;
};

export type SortOrder = "asc" | "desc" | "az" | "za" | "newest" | "oldest";

export type SearchParams = {
  sortOrder?: string | null;
  filter?: string | null;
};

export type filterPriceType = {
  key: string;
  value: string;
};

export interface productType {
  id: string;
  name: string;
  slug: string;
  price: number;
  imageUrl: string;
  description: string;
  category?: string;
}
