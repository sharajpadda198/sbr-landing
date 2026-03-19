import { useTheme } from "../lib/useTheme"

// Dark-mode (software SaaS) components
import { LandingNav } from "../components/landing/LandingNav"
import { Hero } from "../components/landing/Hero"
import { BentoFeatures } from "../components/landing/BentoFeatures"
import { SplitFeatures } from "../components/landing/SplitFeatures"
import { WhatYouGet } from "../components/landing/WhatYouGet"
import { WhoBuiltFor } from "../components/landing/WhoBuiltFor"
import { FAQ } from "../components/landing/FAQ"
import { Footer } from "../components/landing/Footer"
import { ParticleField } from "../components/ParticleField"

// Light-mode (Bio-CNG plant operations) components
import { BioCNGHero } from "../components/landing/biocng/BioCNGHero"
import { BioCNGProblems } from "../components/landing/biocng/BioCNGProblems"
import { BioCNGSolutions } from "../components/landing/biocng/BioCNGSolutions"
import { BioCNGProcess } from "../components/landing/biocng/BioCNGProcess"
import { BioCNGCTA } from "../components/landing/biocng/BioCNGCTA"

export default function LandingPage() {
  const { theme } = useTheme()
  const isLight = theme === "light"

  return (
    <div className={`relative min-h-screen ${isLight ? "bg-white text-gray-900" : "bg-[#030712] text-white"}`}>
      <ParticleField />
      <LandingNav />
      <main>
        {isLight ? (
          <>
            <BioCNGHero />
            <BioCNGProblems />
            <BioCNGSolutions />
            <BioCNGProcess />
            <BioCNGCTA />
          </>
        ) : (
          <>
            <Hero />
            <BentoFeatures />
            <SplitFeatures />
            <WhatYouGet />
            <WhoBuiltFor />
            <FAQ />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
