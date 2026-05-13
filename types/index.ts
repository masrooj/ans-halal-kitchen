export interface MenuItem {
  name: string;
  desc: string;
  price: number;
  badge: string;
  image: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  note: string;
  items: MenuItem[];
}

export interface Review {
  name: string;
  initials: string;
  date: string;
  rating: number;
  platform: string;
  text: string;
  dish: string;
}
