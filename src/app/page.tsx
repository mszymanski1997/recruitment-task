import ProductCard from '@/components/ProductCard/ProductCard';
import { getAppData } from '@/services/productService';
import { ProductCardProps } from '@/types/types';

export default async function Home() {
	const data = await getAppData();
	const { products } = data;

	return (
		<main className='container'>
			<h1 className='headline'>Our Products</h1>
			<div className='flexWrapper'>
				{products.map((product: ProductCardProps) => (
					<div key={product.articleNumber} className='cardWrapper'>
						<ProductCard
							articleNumber={product.articleNumber}
							image={{
								altText: product.image.altText,

								url: product.image.url,
							}}
							title={product.title}
							description={product.description}
							brandName={product.brandName}
							price={product.price}
							promotion={product.promotion}
						/>
					</div>
				))}
			</div>
		</main>
	);
}
