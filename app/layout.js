import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: {
    default: 'Broadband Communication Networks Ltd',
    template: '%s | Broadband Communication Networks Ltd',
  },
  description: 'Leading provider of telecommunication solutions in Kenya - Network Implementation, Managed Services, Enterprise Solutions, and Professional Services.',
  keywords: [
    'telecommunications Kenya',
    'network solutions',
    'ICT services Kenya',
    'managed services provider',
    'enterprise network solutions',
    'GSM optimization',
    'VSAT installation',
    'network infrastructure Kenya'
  ],
  openGraph: {
    title: 'Broadband Communication Networks Ltd',
    description: 'Your trusted partner for comprehensive telecommunication solutions in Kenya',
    url: 'https://broadcom-revamp.vercel.app',
    siteName: 'Broadband Communication Networks Ltd',
    images: "",
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Broadband Communication Networks Ltd',
    description: 'Leading ICT solutions provider in Kenya',
    images: '/images/og-image.jpg',
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-screen h-[100dvh] overflow-hidden">
      <body
        className={`w-screen h-full flex flex-col overflow-x-hidden overflow-y-scroll scrollbar-hidden relative`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}