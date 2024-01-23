import { Inter } from 'next/font/google'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import { ReactNode } from 'react'
import Header from '@/components/Header'

interface Props {
  children: ReactNode
}

const inter = Inter({
  subsets: ['latin'],
})

export default function LayoutWrapper({ children }: Props) {
  return (
    <SectionContainer>
      <div className={`${inter.className} flex h-screen flex-col justify-between font-sans`}>
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}
