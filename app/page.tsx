import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen">
            <Hero />
            <Stats />
            <Features />
            <Testimonials />
            <CTA />
            <Footer />
        </main>
    )
}
