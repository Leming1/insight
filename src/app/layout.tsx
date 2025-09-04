import '../styles/globals.css';
import { Roboto, Roboto_Condensed } from 'next/font/google';
import Script from 'next/script';
import Header from '../components/layout/Header';

export const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

export const robotoCondensed = Roboto_Condensed({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-roboto-condensed',
});

export const metadata = {
  title: 'Insight — Аренда кабинетов в Казани',
  description: 'Clean static base',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${roboto.variable} ${robotoCondensed.variable}`}>
      <head>
        {/* Favicon (SVG) */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* Предзагрузка критически важных шрифтов */}
        <link
          rel="preload"
          href="/fonts/Erewhon-BoldItalic.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        {/* Safari совместимость */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-touch-fullscreen" content="yes" />
      </head>
      <body className="antialiased" style={{ backgroundColor: '#F5FAFF' }} suppressHydrationWarning>
        <Header />
        <main className="w-screen">{children}</main>
        <Script
          src="https://w584260.yclients.com/widgetJS"
          strategy="afterInteractive"
          charSet="UTF-8"
        />
        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103874819', 'ym');

          ym(103874819, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});`}
        </Script>
        <noscript><div><img src="https://mc.yandex.ru/watch/103874819" style={{position:'absolute', left:'-9999px'}} alt="" /></div></noscript>
        {/* /Yandex.Metrika counter */}
      </body>
    </html>
  );
}
