import styles from './ProductCard.module.scss';
import Image from 'next/image';
import { ProductCardProps } from '@/types/types';

const ProductCard = ({
	image,
	title,
	description,
	brandName,
	price,
	promotion,
}: ProductCardProps) => {
	const hasPromotion = promotion !== undefined && promotion !== null;

	const finalPrice = hasPromotion
		? price - (price * promotion.percentage) / 100
		: price;

	return (
		<article className={styles.card}>
			<div className={styles.imageWrapper}>
				<Image src={image.url} alt={image.altText} fill />
			</div>

			<div className={styles.content}>
				<span className={styles.brand}>{brandName}</span>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.description}>{description}</p>

				<div className={styles.priceSection}>
					{hasPromotion ? (
						<>
							<span className={styles.oldPrice}>{price.toFixed(2)} zł</span>
							<span className={styles.newPrice}>
								{finalPrice.toFixed(2)} zł
							</span>
							<span className={styles.badge}>-{promotion.percentage}%</span>
						</>
					) : (
						<span className={styles.regularPrice}>{price.toFixed(2)} zł</span>
					)}
				</div>

				<button className={styles.button}>Add to Cart</button>
			</div>
		</article>
	);
};

export default ProductCard;
