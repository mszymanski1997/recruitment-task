import './globals.scss';
import Header from '@/components/Header/Header';
import { CartProvider } from '@/store/CartProvider';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', 
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<CartProvider>
					<Header />
					{children}
				</CartProvider>
			</body>
		</html>
	);
}
