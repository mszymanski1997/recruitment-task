import ProductCard from '@/components/ProductCard/ProductCard';

export default function Home() {
	return (
		<main className='container'>
			<div className='flexWrapper'>
				<ProductCard
					articleNumber='11111'
					image={{
						altText: 'Gigachad',
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZTRO0pek-8nowBkGIcPz7168stMF1c0e0A&s',
					}}
					title='Classic Chad'
					description='Very handsome and strong.'
					brandName='Handsome Inc.'
					price={150}
				/>

				<ProductCard
					articleNumber='22222'
					image={{
						altText: 'Super Chad',
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZTRO0pek-8nowBkGIcPz7168stMF1c0e0A&s',
					}}
					title='Premium Chad'
					description='Even more handsome with an exclusive discount!'
					brandName='Handsome Inc.'
					price={200}
					promotion={{
						name: 'Black Friday',
						percentage: 20,
					}}
				/>
			</div>
		</main>
	);
}
