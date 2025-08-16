'use client';

import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const ServicesSection2 = () => {
    // --- Hooks for the mouse-following spotlight effect ---
    const mouseX = useMotionValue(Infinity);
    const mouseY = useMotionValue(Infinity);

    // The gradient's position will be animated based on the mouse position
    const gradient = useTransform(
        [mouseX, mouseY],
        ([newX, newY]) => {
            if (newX === Infinity) {
                // Default position when mouse is not over the element
                return 'radial-gradient(circle at 50% 50%, rgba(192, 132, 252, 0.15) 0%, transparent 80%)';
            }
            // Dynamic position based on mouse coordinates - Made brighter
            return `radial-gradient(circle at ${newX}px ${newY}px, rgba(192, 132, 252, 0.3) 0%, transparent 40%)`;
        }
    );

    // --- Animation Variants for Framer Motion ---
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2, // Stagger the animation of child elements
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                // ease: ['easeOut'],
            },
        },
    };

    return (
        <div className="w-full mt-20 md:mt-0" id="services">
            <div className="min-h-screen w-full md:px-20 lg:px-40 pb-20">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl lg:text-3xl font-bold text-center text-white"
                >
                    Our Services
                </motion.h1>

                <motion.div
                    // This div tracks the mouse position to create the spotlight effect
                    onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        mouseX.set(e.clientX - rect.left);
                        mouseY.set(e.clientY - rect.top);
                    }}
                    onMouseLeave={() => {
                        mouseX.set(Infinity);
                        mouseY.set(Infinity);
                    }}
                    className="w-full min-h-[100vh] mt-10 bg-black relative overflow-hidden rounded-2xl"
                >
                    {/* Radial gradient overlay with animation */}
                    <motion.div
                        style={{ background: gradient }}
                        className="absolute inset-0 transition-all duration-200"
                    />

                    {/* Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        // Increased gap to give cards more space
                        className="relative z-10 h-full p-6 flex flex-col gap-8"
                    >
                        {/* Top Row */}
                        <div className="flex-grow w-full flex flex-col md:flex-row justify-around gap-8">
                            {/* Web Development - Larger Card */}
                            <motion.div
                                variants={cardVariants}
                                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                                // UPDATED: Brighter color, larger padding, brighter border
                                className="w-full md:w-7/12 backdrop-blur-md bg-blue-500/20 rounded-xl shadow-lg p-10 flex flex-col justify-center border border-transparent hover:border-blue-500 transition-colors"
                            >
                                <h2 className="text-3xl font-semibold text-white mb-4 text-center">Web Development</h2>
                                <ul className="text-gray-200 text-lg list-disc pl-5 space-y-3">
                                    <li>Custom websites & web apps</li>
                                    <li>Responsive & SEO-friendly designs</li>
                                    <li>Performance optimized</li>
                                </ul>
                            </motion.div>

                            {/* Mobile App Development - Smaller Card */}
                            <motion.div
                                variants={cardVariants}
                                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                                // UPDATED: Brighter color (indigo), larger padding, brighter border
                                className="w-full md:w-5/12 backdrop-blur-md bg-indigo-500/20 rounded-xl shadow-lg p-10 flex flex-col justify-center border border-transparent hover:border-indigo-500 transition-colors"
                            >
                                <h2 className="text-2xl font-semibold text-white mb-4 text-center">Mobile App Development</h2>
                                <ul className="text-gray-200 text-lg list-disc pl-5 space-y-3">
                                    <li>Android & iOS apps</li>
                                    <li>Cross-platform solutions</li>
                                    <li>User-friendly & high-performing</li>
                                </ul>
                            </motion.div>
                        </div>

                        {/* Bottom Row */}
                        <div className="flex-grow w-full flex flex-col md:flex-row justify-around gap-8">
                            {/* AI Tools & Agents - Smaller Card */}
                            <motion.div
                                variants={cardVariants}
                                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                                // UPDATED: Brighter color, larger padding, brighter border
                                className="w-full md:w-5/12 backdrop-blur-md bg-red-500/20 rounded-xl shadow-lg p-10 flex flex-col justify-center border border-transparent hover:border-red-500 transition-colors"
                            >
                                <h2 className="text-2xl font-semibold text-white mb-4 text-center">AI Tools & Agents</h2>
                                <ul className="text-gray-200 text-lg list-disc pl-5 space-y-3">
                                    <li>Custom AI-powered solutions</li>
                                    <li>Chatbots & automation tools</li>
                                    <li>Integration with your workflows</li>
                                </ul>
                            </motion.div>

                            {/* Support & Maintenance - Larger Card */}
                            <motion.div
                                variants={cardVariants}
                                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                                // UPDATED: Brighter color, larger padding, brighter border
                                className="w-full md:w-7/12 backdrop-blur-md bg-purple-500/20 rounded-xl shadow-lg p-10 flex flex-col justify-center border border-transparent hover:border-purple-500 transition-colors"
                            >
                                <h2 className="text-2xl font-semibold text-white mb-4 text-center">Support & Maintenance</h2>
                                <ul className="text-gray-200 text-lg list-disc pl-5 space-y-3">
                                    <li>Regular updates & bug fixes</li>
                                    <li>Performance monitoring</li>
                                    <li>24/7 technical assistance</li>
                                </ul>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesSection2;