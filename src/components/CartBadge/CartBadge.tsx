'use client';

import { useCart } from '@/store/useCart';
import { FiShoppingCart } from 'react-icons/fi';
import styles from './CartBadge.module.scss';

const CartBadge = () => {
	const { cartCount } = useCart();

	return (
		<div className={styles.cart}>
			<FiShoppingCart size={24} />
			<span className={styles.badge}>{cartCount}</span>
		</div>
	);
};

export default CartBadge;
