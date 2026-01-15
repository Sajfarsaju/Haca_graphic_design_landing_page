'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { leadFormSchema, type LeadFormValues } from '@/lib/validations'
import { X } from 'lucide-react'

interface PopupFormProps {
    isOpen: boolean
    onClose: () => void
}

export default function PopupForm({ isOpen, onClose }: PopupFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<LeadFormValues>({
        resolver: zodResolver(leadFormSchema),
    })

    async function onSubmit(data: LeadFormValues) {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log(data)
        setIsSubmitting(false)
        reset()
        onClose()
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 p-8 shadow-2xl"
                    >
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 text-neutral-400 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-white mb-2">Join the Waitlist</h2>
                            <p className="text-neutral-400">
                                Get early access to our graphic design course.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-neutral-300 mb-1.5">
                                    Name
                                </label>
                                <input
                                    {...register('name')}
                                    className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-2.5 text-white placeholder:text-neutral-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none"
                                    placeholder="John Doe"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-neutral-300 mb-1.5">
                                    Email
                                </label>
                                <input
                                    {...register('email')}
                                    className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-2.5 text-white placeholder:text-neutral-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none"
                                    placeholder="john@example.com"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                {isSubmitting ? 'Joining...' : 'Join Now'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
