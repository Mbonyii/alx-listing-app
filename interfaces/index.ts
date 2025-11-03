
export interface CardProps {
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  onBookNow?: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  location: string;
  amenities: string[];
}
