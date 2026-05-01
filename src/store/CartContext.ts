'use client';

import { createContext } from 'react';

type CartContextType = {
	cartCount: number;
	addToCart: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(
	undefined,
);
