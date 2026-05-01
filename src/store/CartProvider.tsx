'use client';

import { useState } from 'react';
import { CartContext } from './CartContext';

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [cartCount, setCartCount] = useState(0);

	const addToCart = async () => {
		setCartCount((prevCount) => prevCount + 1);
	};

	return (
		<CartContext.Provider value={{ cartCount, addToCart }}>
			{children}
		</CartContext.Provider>
	);
};
