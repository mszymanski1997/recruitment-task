import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';
import styles from './Header.module.scss';

async function getHeaderData() {
	const res = await fetch(
		'https://1jbod7rtr5.execute-api.eu-central-1.amazonaws.com/prod/exercise',
		{
			headers: {
				'x-api-key': '8865cb695d00c83c542790757b5e6ad08d47c3909cc652cc',
			},
		},
	);

	return res.json();
}

const Header = async () => {
	const data = await getHeaderData();

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
