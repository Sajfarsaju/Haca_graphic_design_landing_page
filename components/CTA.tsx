'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PopupForm from './PopupForm'

export default function CTA() {
    const [isFormOpen, setIsFormOpen] = useState(false)

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-indigo-950/20 backdrop-blur-3xl -z-10" />

            <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
                <div className="max-w-4xl mx-auto text-center rounded-3xl bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-500/20 p-12 md:p-20 relative overflow-hidden">

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            Ready to start your design journey?
                        </h2>
                        <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
                            Limited spots available for our next cohort. Secure your place today.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsFormOpen(true)}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-indigo-900 font-bold text-lg hover:bg-neutral-100 transition-colors shadow-2xl"
                        >
                            Apply Now
                            <ArrowRight className="w-5 h-5 text-indigo-600" />
                        </motion.button>
                    </div>

                    {/* Decorative circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                </div>
            </div>

            <PopupForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        </section>
    )
}
