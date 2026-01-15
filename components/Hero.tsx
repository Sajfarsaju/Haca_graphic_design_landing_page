'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="relative min-h-screen bg-[#FF5659] overflow-hidden">
            {/* Logo - Top Left */}
            <div className="absolute z-50" style={{ top: '27px', left: '29px' }}>
                <Image
                    src="/logo.png"
                    alt="HACA Design School"
                    width={236}
                    height={60}
                    className="object-contain"
                    style={{ opacity: 1 }}
                    priority
                />
            </div>

            {/* Main Container */}
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">

                {/* Hero Content - Centered */}
                <div className="relative flex flex-col items-center pt-[241px] pb-20">

                    {/* Decorative Shapes */}
                    {/* Top Right Spark */}
                    <div className="absolute top-[142.97px] left-[1105px] w-[100px] h-[95.95px] hidden lg:block">
                        <svg width="100" height="96" viewBox="0 0 100 96" fill="none">
                            <path d="M50 0L57.3 37.7L95 45L57.3 52.3L50 90L42.7 52.3L5 45L42.7 37.7L50 0Z" fill="#FFDB00" />
                        </svg>
                    </div>

                    {/* Top Left Small Shape */}
                    <div
                        className="absolute top-[183px] left-[209px] w-[38.43px] h-[26.76px] hidden lg:block"
                        style={{ transform: 'rotate(-26.53deg)' }}
                    >
                        <div className="w-full h-full bg-[#FFD731] rounded-sm"></div>
                    </div>

                    {/* Main Title Block */}
                    <div className="relative flex flex-col items-center gap-[38px]" style={{ width: '870px', maxWidth: '100%' }}>

                        {/* Title with Black Blob Background */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="relative flex items-center justify-center"
                        >
                            {/* Black Blob Background */}
                            <div className="absolute inset-0 flex items-center justify-center -z-10">
                                <div
                                    className="bg-black rounded-[20px]"
                                    style={{ width: '918px', maxWidth: '100vw', height: '191px' }}
                                ></div>
                            </div>

                            {/* Title Text */}
                            <h1
                                className="text-white text-center px-4"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                                    fontWeight: 700,
                                    fontSize: 'clamp(40px, 8vw, 80px)',
                                    lineHeight: '104%',
                                    letterSpacing: '0%',
                                }}
                            >
                                Dreaming of Becoming<br />
                                a Graphic Designer?
                            </h1>

                            {/* Yellow Underline Brushstroke */}
                            <div
                                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#FFD731] hidden md:block"
                                style={{
                                    width: '366.13px',
                                    height: '27.51px',
                                    transform: 'translateX(-50%) rotate(2.71deg)',
                                    zIndex: -1
                                }}
                            ></div>
                        </motion.div>

                        {/* Subtitle Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                            className="flex flex-col items-center gap-4 w-full"
                        >
                            {/* White Subtitle */}
                            <p
                                className="text-white text-center"
                                style={{
                                    maxWidth: '870px',
                                    fontSize: 'clamp(24px, 4vw, 32px)',
                                    fontWeight: 600,
                                }}
                            >
                                You're in the Right Place.
                            </p>

                            {/* Black Label (Pill) */}
                            <div
                                className="bg-black text-white text-center px-8 py-2 rounded-full"
                                style={{
                                    maxWidth: '812px',
                                    fontFamily: 'ui-sans-serif',
                                    fontWeight: 600,
                                    fontSize: 'clamp(20px, 3vw, 28px)',
                                    lineHeight: '110%',
                                    letterSpacing: '0.5px',
                                }}
                            >
                                Learn Graphic Design Online
                            </div>

                            {/* Black Paragraph */}
                            <p
                                className="text-black text-center px-4"
                                style={{
                                    maxWidth: '812px',
                                    fontFamily: 'ui-sans-serif',
                                    fontWeight: 500,
                                    fontSize: 'clamp(16px, 2.5vw, 20px)',
                                    lineHeight: '120%',
                                    letterSpacing: '0.5px',
                                }}
                            >
                                Learn design from your own space with our 3-month hands-on, career-focused Graphic Design Online Course.
                            </p>
                        </motion.div>

                    </div>

                </div>

            </div>
        </section>
    )
}
