'use client';

import { createContext } from 'react';

type CartContextType = {
	cartCount: number;
	addToCart: () => void;
	isAdding: boolean;
};

export const CartContext = createContext<CartContextType | undefined>(
	undefined,
);
