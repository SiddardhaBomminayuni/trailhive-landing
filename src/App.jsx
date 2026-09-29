import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Testimonial from './components/Testimonial.jsx'
import Trails from './components/Trails.jsx'
import PhotoTestimonial from './components/PhotoTestimonial.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonial />
        <Trails />
        <PhotoTestimonial />
      </main>
      <Footer />
    </>
  )
}
