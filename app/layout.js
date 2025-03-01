import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'Broadband Communication Networks Ltd',
  description: 'Broadband Communications Networks',
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
