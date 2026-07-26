"use client"

import AboutSection from "@/app/[locale]/HomePage/AboutSection"
import Hero from "@/app/[locale]/HomePage/Hero"
import Navbar from "@/componenten/Navbar"

import ReviewsSection from "@/app/[locale]/HomePage/ReviewsSection"

import { useEffect, useState, useRef } from "react"
import Demo from "./Demo"
import TeamHome from "./Team"
import HomePageContacSection from "./HomePageContacSection"
import ServicesBlock from "./Services"
import WhyChoose from "./WhyChoose"
import HeroAboutDivider from "./HeroAboutDivider"

export default function Welcome() {

    const [navState, setNavState] = useState<"transparent" | "gradient" | "white">("transparent")

    const heroRef = useRef<HTMLDivElement | null>(null)
    const [showlogo, setShowLogo] = useState<boolean>(false)



    useEffect(() => {

        const handleScroll = () => {

            if (!heroRef.current) return

            const heroHeight = heroRef.current.offsetHeight
            const scroll = window.scrollY

            if (scroll < heroHeight) {
                setNavState("transparent")
                setShowLogo(false)
            }
            else {
                setNavState("white")
                  setShowLogo(true)
            }

        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    return (

        <main className="bg-white">
            <Navbar navState={navState} showLogo={showlogo}/>
            <div ref={heroRef}>
                <Hero />
            </div>
            <HeroAboutDivider />
            <AboutSection />
            <ServicesBlock  />

            <TeamHome />
             <WhyChoose />

            <Demo />
            <HomePageContacSection />
        </main>
    )
}
