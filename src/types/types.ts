export type ProductCardProps = {
	articleNumber: string;
	image: {
		altText: string;
		url: string;
	};
	title: string;
	description: string;
	brandName: string;
	price: number;
	promotion?: {
		name: string;
		percentage: number;
	};
};
