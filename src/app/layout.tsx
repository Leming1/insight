import '../styles/globals.css';
import { Roboto } from 'next/font/google';
import Header from '../components/layout/Header';

export const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});

export const metadata = {
  title: 'Insight',
  description: 'Clean static base',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={roboto.variable}>
      <body className="antialiased" style={{ backgroundColor: '#F5FAFF' }} suppressHydrationWarning>
        <Header />
        <main className="w-screen">{children}</main>
      </body>
    </html>
  );
}
