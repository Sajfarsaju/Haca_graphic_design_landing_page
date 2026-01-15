'use client'

import { motion } from 'framer-motion'
import { Layout, PenTool, Youtube, Users, Award, MonitorPlay } from 'lucide-react'

const features = [
    {
        icon: Layout,
        title: 'UI/UX Design Fundamentals',
        description: 'Learn to create intuitive and beautiful user interfaces that solve real problems.',
    },
    {
        icon: PenTool,
        title: 'Brand Identity Design',
        description: 'Master the art of logo design, typography, and color theory for brands.',
    },
    {
        icon: Youtube,
        title: 'Motion Graphics',
        description: 'Bring your designs to life with After Effects and Premiere Pro.',
    },
    {
        icon: Users,
        title: 'Collaborative Projects',
        description: 'Work on real-world briefs in teams, simulating a studio environment.',
    },
    {
        icon: MonitorPlay,
        title: 'Software Mastery',
        description: 'Deep dive into Figma, Photoshop, Illustrator, and more industry tools.',
    },
    {
        icon: Award,
        title: 'Portfolio Building',
        description: 'Graduate with a stunning portfolio that gets you hired immediately.',
    },
]

export default function Features() {
    return (
        <section className="py-24 bg-neutral-950">
            <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Everything you need to become a pro</h2>
                    <p className="text-lg text-neutral-400">
                        Our curriculum is designed by industry experts to cover every aspect of modern graphic design and digital art.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-indigo-500/50 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
                                <feature.icon className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-neutral-400 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
