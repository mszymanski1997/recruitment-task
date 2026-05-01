import './globals.scss';
import Header from '@/components/Header/Header';
import { CartProvider } from '@/store/CartProvider';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<CartProvider>
					<Header />
					{children}
				</CartProvider>
			</body>
		</html>
	);
}
