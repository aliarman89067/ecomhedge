import { Benefits } from "./components/dashboard/benefit"
import { BookingCall } from "./components/dashboard/booking-call"
import { CaseStudies } from "./components/dashboard/case-studies"
import { Footer } from "./components/dashboard/footer"
import { Headline } from "./components/dashboard/head-line"
import { Hero } from "./components/dashboard/hero"
import { Navbar } from "./components/dashboard/navbar"
import { Services } from "./components/dashboard/services"
import { VideoSection } from "./components/dashboard/video-section"

const App = () => {
  return(
    <section className="min-h-screen flex flex-col">
    <Navbar />
    <Hero />
    <Benefits />
    <Headline />
    <VideoSection/>
    <Services />
    <CaseStudies/>
    <BookingCall />
    <Footer />
    </section>
  )
}

export default App