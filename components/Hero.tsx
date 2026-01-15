'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import PopupForm from './PopupForm'

export default function Hero() {
    const [isFormOpen, setIsFormOpen] = useState(false)

    return (
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-sm text-neutral-300 mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        <span className="font-medium">New Course Available</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
                    >
                        Master Graphic Design <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                            in Just 3 Months
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl leading-relaxed"
                    >
                        Join the most comprehensive, hands-on graphic design bootcamp.
                        transform from beginner to pro with expert mentorship and real-world projects.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsFormOpen(true)}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/25"
                        >
                            Start Learning
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-neutral-900 border border-neutral-800 text-white font-semibold text-lg hover:bg-neutral-800 transition-colors"
                        >
                            View Curriculum
                        </motion.button>
                    </motion.div>

                </div>
            </div>

            <PopupForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        </section>
    )
}
