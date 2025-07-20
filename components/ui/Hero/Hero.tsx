"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import HeroImage from "@/public/images/hero-image.jpg"
import HeroAudience from "@/public/images/hero-audience.jpg"
import HeroMockups from "@/public/images/hero-mockups.jpg"
import PurpleGradientCircle from "@/components/PurpleGradientCircle"

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.05,
            duration: 0.3,
        },
    },
}

const fadeUpVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.98,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

const titleVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

const imageContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            staggerChildren: 0.15,
        },
    },
}

const leftImageVariants = {
    hidden: {
        opacity: 0,
        x: -60,
        rotate: -20,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        x: 0,
        rotate: -12,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

const rightImageVariants = {
    hidden: {
        opacity: 0,
        x: 60,
        rotate: 20,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        x: 0,
        rotate: 12,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

const centerImageVariants = {
    hidden: {
        opacity: 0,
        y: 25,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.9,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
}

const floatingAnimation = {
    y: [-8, 8, -8],
    transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
    },
}

const Hero = () => (
    <section className="overflow-hidden">
        <div className="custom-screen py-8">
            <motion.div
                className="mt-24"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                viewport={{ once: true, margin: "-20px" }}
            >
                <motion.h3
                    variants={fadeUpVariants}
                    className="hidden md:block text-sm md:text-lg lg:text-xl px-4 md:px-8 uppercase text-blue-500 text-center font-semibold py-2 font-neulis"
                >
                    Technology consulting that{" "}
                    <motion.span
                        className="bg-gradient-to-r from-blue-300 to-blue-300 bg-clip-text text-transparent"
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                            duration: 3,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        helps you grow
                    </motion.span>
                    .
                </motion.h3>

                <div className="space-y-5 max-w-4xl text-center px-2 mx-auto">
                    <motion.div
                        className="mx-auto"
                        variants={titleVariants}
                    >
                        <h1
                            className="font-neulisAlt tracking-tighter leading-none bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent font-bold font-neulisalt mx-auto"
                            style={{
                                backgroundImage: "linear-gradient(179.1deg, #FFFFFF 0.77%, rgba(255, 255, 255, 0) 182.09%)",
                            }}
                        >
                            Finally, software consulting that works
                            <motion.span
                                className="font-neulis font-extrabold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent"
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                }}
                                transition={{
                                    duration: 4,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                }}
                            >
                                {" "}
                                the way you do business.
                            </motion.span>
                        </h1>
                    </motion.div>

                    <motion.p
                        variants={fadeUpVariants}
                        className="max-w-2xl mx-auto text-gray-300 leading-5 md:leading-6 text-sm md:text-base lg:text-lg font-neulisalt"
                    >
                        Nuvoma offers comprehensive consulting for entrepreneurs and businesses to build the technology
                        foundation needed for unicorn-level success. Accelerate your growth with{" "}
                        <motion.span
                            className="font-extrabold italic bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent font-neulis"
                            whileHover={{
                                scale: 1.05,
                                textShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            the Nuvoma advantage
                        </motion.span>
                        .
                    </motion.p>
                </div>

                <motion.div
                    className="relative mt-8 md:mt-12 lg:mt-16"
                    variants={imageContainerVariants}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 0.7, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                        className="absolute inset-0"
                        style={{ willChange: 'opacity' }}
                    >
                        <PurpleGradientCircle className="w-full h-[100px] sm:h-[300px] md:h-[450px] lg:h-[550px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70" />
                    </motion.div>

                    <div className="relative mt-8 md:mt-12 lg:mt-16 h-[300px] sm:h-[400px] md:h-[550px] lg:h-[700px]">
                        {/* Desktop and tablet image showcase */}
                        <div className="hidden sm:block relative w-full h-full">
                            {/* Left image with angled edge fade */}
                            <motion.div
                                className="absolute top-[50%] left-[5%] sm:left-[10%] md:left-[15%] lg:left-[18%] transform -translate-x-1/2 -translate-y-1/2 z-10"
                                variants={leftImageVariants}
                            >
                                <motion.div
                                    className="relative"
                                    animate={floatingAnimation}
                                    whileHover={{
                                        scale: 1.05,
                                        rotate: -6,
                                        transition: { duration: 0.3 }
                                    }}
                                    style={{ rotate: -12 }}
                                >
                                    <Image
                                        src={HeroAudience}
                                        alt="Showcase left"
                                        width={1200}
                                        height={600}
                                        className="sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[380px] lg:w-[600px] lg:h-[450px] xl:w-[700px] xl:h-[530px] shadow-2xl rounded-xl md:rounded-2xl object-cover"
                                    />
                                    {/* Left edge angled fade - rotated to match image angle */}
                                    <div
                                        className="absolute inset-0 rounded-xl md:rounded-2xl pointer-events-none"
                                        style={{
                                            background: 'linear-gradient(105deg, rgb(0 0 0) 0%, rgba(0, 0, 0, 0.8) 15%, rgba(0, 0, 0, 0.4) 30%, transparent 50%)'
                                        }}
                                    />
                                </motion.div>
                            </motion.div>

                            {/* Right image with angled edge fade */}
                            <motion.div
                                className="absolute top-[50%] right-[5%] sm:right-[10%] md:right-[15%] lg:right-[18%] transform translate-x-1/2 -translate-y-1/2 z-10"
                                variants={rightImageVariants}
                            >
                                <motion.div
                                    className="relative"
                                    animate={{
                                        y: [8, -8, 8],
                                        transition: {
                                            duration: 7,
                                            ease: "easeInOut",
                                            repeat: Infinity,
                                        },
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        rotate: 6,
                                        transition: { duration: 0.3 }
                                    }}
                                    style={{ rotate: 12 }}
                                >
                                    <Image
                                        src={HeroMockups}
                                        alt="Showcase right"
                                        width={1200}
                                        height={600}
                                        className="sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[380px] lg:w-[600px] lg:h-[450px] xl:w-[700px] xl:h-[530px] shadow-2xl rounded-xl md:rounded-2xl object-cover"
                                    />
                                    {/* Right edge angled fade - rotated to match image angle */}
                                    <div
                                        className="absolute inset-0 rounded-xl md:rounded-2xl pointer-events-none"
                                        style={{
                                            background: 'linear-gradient(75deg, transparent 50%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.8) 85%, rgb(0 0 0) 100%)'
                                        }}
                                    />
                                </motion.div>
                            </motion.div>

                            {/* Center image (main hero) */}
                            <motion.div
                                className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
                                variants={centerImageVariants}
                            >
                                <motion.div
                                    animate={{
                                        y: [-5, 5, -5],
                                        transition: {
                                            duration: 5,
                                            ease: "easeInOut",
                                            repeat: Infinity,
                                        },
                                    }}
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <Image
                                        src={HeroImage}
                                        alt="Showcase center"
                                        width={1200}
                                        height={650}
                                        className="sm:w-[450px] sm:h-[340px] md:w-[550px] md:h-[410px] lg:w-[650px] lg:h-[490px] xl:w-[750px] xl:h-[570px] shadow-2xl rounded-xl md:rounded-2xl ring-2 md:ring-4 ring-white/10 object-cover"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Mobile layout - single centered image */}
                        <div className="sm:hidden flex justify-center items-center h-[90%] px-4">
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, y: 25, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <Image
                                    src={HeroImage}
                                    alt="Mobile showcase"
                                    width={350}
                                    height={260}
                                    className="w-[300px] h-[225px] shadow-2xl rounded-xl ring-2 ring-white/10 object-cover"
                                />
                                {/* Subtle glow effect for mobile */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent rounded-xl pointer-events-none" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    </section>
)

export default Hero