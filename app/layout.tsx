import type React from "react"
import type {Metadata, Viewport} from "next"
import "./globals.css"
import localFont from "next/font/local"

const neulisAlt = localFont({
    src: "../public/fonts/NeulisAlt-Regular.otf",
    variable: "--font-neulisalt-regular",
    display: "swap"
})

const neulis = localFont({
    src: "../public/fonts/Neulis-Regular.otf",
    variable: "--font-neulis-regular",
    display: "swap"
})

export const metadata: Metadata = {
    title: "Home - Nuvoma Solutions",
    description: "Technology consulting for entrepreneurs.",
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#3674B5",
}

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${neulis.variable} ${neulisAlt.variable} bg-gray-900`}>
            <body>{children}</body>
        </html>
    )
}

