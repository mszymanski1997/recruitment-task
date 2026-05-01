'use client';

import styles from './AddToCartButton.module.scss';
import { useCart } from '@/store/useCart';
import { useState } from 'react';

const AddToCartButton = () => {
	const { addToCart } = useCart();
	const [isAdding, setIsAdding] = useState(false);

	const addItem = () => {
		setIsAdding(true);

		setTimeout(() => {
            setIsAdding(false);
			addToCart();
		}, 1000);
	};

	return (
		<button className={styles.button} onClick={addItem}>
			{isAdding ? 'Adding...' : 'Add to Cart'}
		</button>
	);
};

export default AddToCartButton;
