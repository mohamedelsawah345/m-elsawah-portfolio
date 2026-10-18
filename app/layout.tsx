import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Noto_Sans, Noto_Sans_Arabic, Noto_Sans_SC } from 'next/font/google'
import { headers } from 'next/headers'
import { isLocale, localeDir } from '@/lib/i18n'
import './globals.css'

const noto = Noto_Sans({ subsets: ['latin', 'latin-ext'], variable: '--font-latin', display: 'swap' })
const notoArabic = Noto_Sans_Arabic({ subsets: ['arabic'], variable: '--font-arabic', display: 'swap' })
const notoSc = Noto_Sans_SC({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-sc', display: 'swap', preload: false })

export const metadata: Metadata = {
  metadataBase: new URL('https://mohamedelsawah.kemextech.org'),
  title: 'Mohamed Elsawah — Senior Software Engineer & Systems Architect',
  description: 'Enterprise systems architecture and software engineering portfolio for Mohamed Elsawah.',
  openGraph: {
    title: 'Mohamed Elsawah — Senior Software Engineer & Systems Architect',
    description: 'Enterprise systems architecture and software engineering portfolio.',
    url: 'https://mohamedelsawah.kemextech.org',
    siteName: 'Mohamed Elsawah',
    type: 'website',
    images: [{ url: '/portrait.jpg', width: 1024, height: 1024, alt: 'Mohamed Elsawah' }],
  },
  twitter: {
    card: 'summary',
    images: ['/portrait.jpg'],
  },
  icons: {
    icon: [{ url: '/icon-32.png', sizes: '32x32', type: 'image/png' }],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headerStore = await headers()
  const requested = headerStore.get('x-locale') ?? 'en'
  const locale = isLocale(requested) ? requested : 'en'

  return (
    <html lang={locale} dir={localeDir(locale)} className={`${noto.variable} ${notoArabic.variable} ${notoSc.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
