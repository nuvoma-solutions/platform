import Image from "next/image"
import { motion } from "framer-motion"
import bgPattern from "@/public/images/bg-pattern.webp"

const CTA = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const gradientTextVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.3
            }
        }
    }

    const backgroundVariants = {
        hidden: { opacity: 0, scale: 1.1 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.2,
                ease: "easeOut"
            }
        }
    }

    return (
        <section className={"px-4 my-8 md:my-12"}>
            <motion.div
                className="custom-screen pt-10 relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <div className="relative z-10">
                    <motion.div
                        className="max-w-xl mx-auto text-center"
                        variants={containerVariants}
                    >
                        <motion.h2
                            className="text-gray-50 text-3xl sm:text-4xl font-neulis-bold leading-none tracking-tight"
                            variants={itemVariants}
                        >
                            We fulfill your expectations, and then{" "}
                            <motion.span
                                className={"bg-clip-text text-transparent bg-gradient-to-br from-blue-300 to-blue-500"}
                                variants={gradientTextVariants}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                beyond them.
                            </motion.span>
                        </motion.h2>

                        <motion.p
                            className="mt-3 text-gray-300 font-neulisalt leading-5"
                            variants={itemVariants}
                        >
                            No need to compromise on quality or speed. Our work ethic is centered around creating
                            reliable software for yor business, so you can focus on what matters most.
                        </motion.p>
                    </motion.div>
                </div>

                <motion.div
                    className="absolute inset-0"
                    variants={backgroundVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Image
                        src={bgPattern}
                        className="w-full h-full object-cover m-auto pointer-events-none"
                        alt="Background pattern"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default CTA