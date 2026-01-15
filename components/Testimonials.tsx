'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
    {
        content: "The best investment I've made for my career. The mentorship was incredible.",
        author: "Sarah Johnson",
        role: "Product Designer at Stripe",
        image: "https://i.pravatar.cc/150?u=sarah",
    },
    {
        content: "I went from zero design knowledge to landing a job in 4 months. Highly recommend!",
        author: "Michael Chen",
        role: "Freelance Graphic Designer",
        image: "https://i.pravatar.cc/150?u=michael",
    },
    {
        content: "The curriculum is perfectly structured. It covers everything you actually need.",
        author: "Emily Davis",
        role: "UI Designer at Linear",
        image: "https://i.pravatar.cc/150?u=emily",
    },
]

export default function Testimonials() {
    return (
        <section className="py-24 bg-neutral-900/30">
            <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Success Stories</h2>
                    <p className="text-lg text-neutral-400">Join hundreds of graduates who are now working at top companies.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.author}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 relative overflow-hidden"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>

                            <blockquote className="text-lg text-neutral-300 mb-8 leading-relaxed">
                                "{item.content}"
                            </blockquote>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-neutral-800 overflow-hidden">
                                    {/* Placeholder for avatar */}
                                    <div className="w-full h-full bg-indigo-500/20" />
                                </div>
                                <div>
                                    <div className="font-semibold text-white">{item.author}</div>
                                    <div className="text-sm text-neutral-500">{item.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
