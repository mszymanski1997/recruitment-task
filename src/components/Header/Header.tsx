import Image from 'next/image';
import styles from './Header.module.scss';
import { getAppData } from '@/services/productService';
import CartBadge from '../CartBadge/CartBadge';

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

			<CartBadge />
		</header>
	);
};

export default Header;
