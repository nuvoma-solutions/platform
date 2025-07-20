"use client"

import { motion } from "framer-motion"
import MarqueeImageSlider from "@/components/ui/slider"

const Features = () => {
    // const features = [
    //     {
    //         title: "Send thousands of emails",
    //         desc: "Send thousands of emails quickly and easily. You can customize the content of each email with our editor.",
    //         img: Feature1
    //     },
    //     {
    //         title: "Monitor your inventory and finances",
    //         desc: "AI-powered product and finance management tools to help you monitor and grow your business. Built by founders, for founders.",
    //         img: Feature2
    //     },
    // ]

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    }

    const titleVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    }

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const sliderVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    }

    // const featureVariants = {
    //     hidden: {
    //         opacity: 0,
    //         y: 40,
    //         rotateX: 15
    //     },
    //     visible: {
    //         opacity: 1,
    //         y: 0,
    //         rotateX: 0,
    //         transition: {
    //             duration: 0.7,
    //             ease: [0.25, 0.46, 0.45, 0.94]
    //         }
    //     }
    // }

    // const cardHoverVariants = {
    //     hover: {
    //         y: -8,
    //         scale: 1.02,
    //         transition: {
    //             duration: 0.3,
    //             ease: "easeOut"
    //         }
    //     }
    // }
    //
    // const imageVariants = {
    //     hidden: { opacity: 0, scale: 1.1, x: 20 },
    //     visible: {
    //         opacity: 1,
    //         scale: 1,
    //         x: 0,
    //         transition: {
    //             duration: 0.8,
    //             delay: 0.3,
    //             ease: "easeOut"
    //         }
    //     },
    //     hover: {
    //         scale: 1.05,
    //         transition: {
    //             duration: 0.3,
    //             ease: "easeOut"
    //         }
    //     }
    // }

    const gradientVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: "easeInOut"
            }
        }
    }

    return (
        <motion.section
            className="px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <div className="custom-screen text-gray-300">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        className="text-gray-50 text-3xl font-semibold sm:text-4xl font-neulisalt tracking-tighter"
                        variants={titleVariants}
                    >
                        Backed by{" "}
                        <motion.span
                            className="bg-gradient-to-br bg-clip-text text-transparent from-blue-400 to-gray-300"
                            variants={gradientVariants}
                            whileHover={{
                                backgroundImage: "linear-gradient(to bottom right, #60A5FA, #E5E7EB, #3B82F6)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            the best brands you know.
                        </motion.span>
                    </motion.h2>
                    <motion.p
                        className="mt-3 font-neulisalt"
                        variants={textVariants}
                    >
                        We develop innovative technology solutions that set new standards. Our founder team combines
                        strong engineering backgrounds with extensive experience in venture capital, startups, and e-commerce.
                    </motion.p>
                </div>

                <div className="mt-12">
                    <motion.div variants={sliderVariants}>
                        <MarqueeImageSlider/>
                    </motion.div>

                    {/*<motion.ul*/}
                    {/*    className="mt-16 space-y-8 gap-x-6 sm:flex sm:space-y-0"*/}
                    {/*    variants={containerVariants}*/}
                    {/*>*/}
                    {/*    {features.map((item, idx) => (*/}
                    {/*        <motion.li*/}
                    {/*            className="flex-1 flex flex-col justify-between border border-gray-800 rounded-2xl overflow-hidden"*/}
                    {/*            key={idx}*/}
                    {/*            variants={featureVariants}*/}
                    {/*            whileHover="hover"*/}
                    {/*            custom={idx}*/}
                    {/*            style={{*/}
                    {/*                background: "radial-gradient(141.61% 141.61% at 29.14% -11.49%, rgba(203, 213, 225, 0.15) 0%, rgba(203, 213, 225, 0) 57.72%)"*/}
                    {/*            }}*/}
                    {/*        >*/}
                    {/*            <motion.div variants={cardHoverVariants}>*/}
                    {/*                <div className="p-8">*/}
                    {/*                    <motion.h3*/}
                    {/*                        className="text-gray-50 text-xl font-semibold font-neulis"*/}
                    {/*                        initial={{ opacity: 0, y: 20 }}*/}
                    {/*                        whileInView={{ opacity: 1, y: 0 }}*/}
                    {/*                        transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}*/}
                    {/*                    >*/}
                    {/*                        {item.title}*/}
                    {/*                    </motion.h3>*/}
                    {/*                    <motion.p*/}
                    {/*                        className="mt-3 sm:text-sm md:text-base font-neulisalt"*/}
                    {/*                        initial={{ opacity: 0, y: 15 }}*/}
                    {/*                        whileInView={{ opacity: 1, y: 0 }}*/}
                    {/*                        transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}*/}
                    {/*                    >*/}
                    {/*                        {item.desc}*/}
                    {/*                    </motion.p>*/}
                    {/*                </div>*/}

                    {/*                <motion.div*/}
                    {/*                    className="pl-8 perspective-1000"*/}
                    {/*                    variants={imageVariants}*/}
                    {/*                    whileHover="hover"*/}
                    {/*                >*/}
                    {/*                    <motion.div*/}
                    {/*                        whileHover={{*/}
                    {/*                            rotateY: 5,*/}
                    {/*                            rotateX: -2,*/}
                    {/*                            transition: { duration: 0.3 }*/}
                    {/*                        }}*/}
                    {/*                    >*/}
                    {/*                        <Image*/}
                    {/*                            src={item.img}*/}
                    {/*                            className="w-full ml-auto rounded-2xl"*/}
                    {/*                            alt={item.title}*/}
                    {/*                        />*/}
                    {/*                    </motion.div>*/}
                    {/*                </motion.div>*/}
                    {/*            </motion.div>*/}
                    {/*        </motion.li>*/}
                    {/*    ))}*/}
                    {/*</motion.ul>*/}
                </div>
            </div>
        </motion.section>
    )
}

export default Features