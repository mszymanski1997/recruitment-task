import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';
import styles from './Header.module.scss';
import { getAppData } from '@/services/productService';

const Header = async () => {
	const data = await getAppData();

	return (
		<header className={styles.header}>
			<div className={styles.logoContainer}>
				<Image
					src={data.logo.url}
					alt={data.logo.altText}
					className={styles.logo}
					width={120}
					height={40}
				/>
			</div>

			<div className={styles.cart}>
				<FiShoppingCart size={24} />
				<span className={styles.badge}>0</span>
			</div>
		</header>
	);
};

export default Header;
