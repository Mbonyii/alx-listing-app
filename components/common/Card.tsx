
import React from 'react';

export interface CardProps {
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  onBookNow?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  image, 
  price, 
  rating 
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <span className="text-lg font-semibold">${price}</span>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
          ⭐ {rating}
        </span>
      </div>
    </div>
  );
};

export default Card;
