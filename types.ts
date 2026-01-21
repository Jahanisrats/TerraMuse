export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  subTitle?: string;
  badge?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  color?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface NavigationItem {
  label: string;
  path: string;
}
