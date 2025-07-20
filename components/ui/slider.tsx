"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface MarqueeImageSliderProps {
    direction?: "left" | "right"
    speed?: number
    images?: Array<{
        id: number
        src: string
        alt: string
    }>
}

const defaultImages = [
    {
        id: 1,
        src: "/images/atheniancapital.png",
        alt: "Modern Architecture",
    },
    {
        id: 2,
        src: "/images/seikimoeinc.png",
        alt: "Mountain Landscape",
    },
    {
        id: 3,
        src: "/images/pac.png",
        alt: "City Skyline",
    },
    {
        id: 4,
        src: "/images/mosaic.png",
        alt: "Abstract Art",
    },
    {
        id: 5,
        src: "/images/lhs.png",
        alt: "Hubspot",
    },
    {
        id: 6,
        src: "/images/lbb.png",
        alt: "LBB",
    }
]

export default function MarqueeImageSlider({
                                               direction = "left",
                                               speed = 80,
                                               images = defaultImages,
                                           }: MarqueeImageSliderProps) {
    // Calculate dimensions for seamless loop
    const imageWidth = 384 + 24 // w-96 (384px) + gap (24px)
    const totalWidth = images.length * imageWidth

    // Create enough duplicates for seamless scrolling
    const duplicatedImages = [...images, ...images]

    // Calculate animation values for seamless loop in both directions
    const animationValues =
        direction === "left" ? { x: [0, -totalWidth], initial: 0 } : { x: [-totalWidth, 0], initial: -totalWidth }

    return (
        <div className="w-full py-2">
            <div className="relative overflow-hidden">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-8 md:w-96 bg-gradient-to-r from-gray-900 via-gray-900/90 via-30% via-gray-900/50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 md:w-96 bg-gradient-to-l from-gray-900 via-gray-900/90 via-30% via-gray-900/50 to-transparent z-10 pointer-events-none" />
                <div className="flex">
                    <motion.div
                        className="flex gap-4 flex-shrink-0"
                        initial={{ x: animationValues.initial }}
                        animate={{
                            x: animationValues.x,
                        }}
                        transition={{
                            x: {
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "loop",
                                duration: speed,
                                ease: "linear",
                                type: "tween",
                            },
                        }}
                        style={{ width: `${totalWidth * 2}px` }}
                    >
                        {duplicatedImages.map((image, index) => (
                            <div key={`${image.id}-${index}`} className="flex-shrink-0 relative cursor-pointer">
                                <div className="relative overflow-hidden rounded-lg shadow-lg">
                                    <Image
                                        src={image.src || "/placeholder.svg"}
                                        alt={image.alt}
                                        width={400}
                                        height={300}
                                        className="object-cover w-64 h-36"
                                        priority={index < 6}
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
