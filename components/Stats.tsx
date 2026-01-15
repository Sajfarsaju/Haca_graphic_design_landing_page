'use client'

import { motion } from 'framer-motion'

const stats = [
    { label: 'Students Enrolled', value: '1,500+' },
    { label: 'Course Rating', value: '4.9/5' },
    { label: 'Job Placement', value: '94%' },
    { label: 'Live Projects', value: '50+' },
]

export default function Stats() {
    return (
        <section className="py-12 border-y border-neutral-900 bg-neutral-950/50">
            <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-sm font-medium text-neutral-500 uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
