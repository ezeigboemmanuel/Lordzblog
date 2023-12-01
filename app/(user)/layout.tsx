// Layout of the frontend

import Header from '@/components/Header'
import '../globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { Suspense } from 'react';


// For SEO
export const metadata: Metadata = {
  title: 'LordzBlog',
  description: 'Your ideal blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // An empty function created because of Suspense
  function GA() {
    return <></>
  }
  return (
    <html lang="en" >
      <head>
        {/* Suspense will fallback to GA if GoogleAnalytics is not yet active */}
      <Suspense fallback={<GA />}>
        <GoogleAnalytics GA_MEASUREMENT_ID='YOUR_MEASUREMENT_ID'/> 
      </Suspense>
      </head>
      <body className="max-w-5xl mx-auto bg-gray-900 text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}