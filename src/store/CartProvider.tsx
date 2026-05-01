import { useState } from 'react';
import { CartContext } from './CartContext';

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [cartCount, setCartCount] = useState(0);
	const [isAdding, setIsAdding] = useState(false);

	const addToCart = async () => {
		setIsAdding(true);

		setTimeout(() => {
			setCartCount((prevCount) => prevCount + 1);
			setIsAdding(false);
		}, 1000);
	};

	return (
		<CartContext.Provider value={{ cartCount, addToCart, isAdding }}>
			{children}
		</CartContext.Provider>
	);
};
