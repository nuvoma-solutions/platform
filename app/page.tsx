"use client";

import Hero from "@/components/ui/Hero/Hero";
import Navbar from "@/components/ui/Navbar/Navbar";
import Footer from "@/components/ui/Footer/Footer";
import CTA from "@/components/ui/CTA/CTA";
import Features from "@/components/ui/Features/Features";

export default function Home() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Features />
            <CTA />
            <Footer/>
        </>
    );
}
