'use client';

import styles from './AddToCartButton.module.scss';
import { useCart } from '@/store/useCart';
import { useState } from 'react';

const AddToCartButton = () => {
	const { addToCart } = useCart();
	const [isAdding, setIsAdding] = useState(false);
	const [isAdded, setIsAdded] = useState(false);

	const addItem = () => {
		setIsAdding(true);

		setTimeout(() => {
			setIsAdding(false);
			addToCart();
			setIsAdded(true);
		}, 1000);

		setTimeout(() => {
			setIsAdded(false);
		}, 1500);
	};

	return (
		<button
			className={`${styles.button} ${isAdded && styles.isAdded}`}
			onClick={addItem}
			disabled={isAdding}
		>
			{!isAdding && !isAdded && 'Add to Cart'}
			{isAdding && 'Adding...'}
			{isAdded && 'Added!'}
		</button>
	);
};

export default AddToCartButton;
