import Navbar from "../components/Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import FAQ from "./Faq";

// import Hero from "../components/Hero";  

export default function LandingPage() {
    return (
        <>  
        <Navbar />
        <main>
            <Hero />
            <Stats />
            <Features />
            <Testimonials />
            <Pricing />
            <FAQ />
        </main>
        </>
    )
}