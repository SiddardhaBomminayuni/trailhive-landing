import Reveal from './Reveal.jsx'
import { partners } from '../data.js'

function Logos({ className = '' }) {
  return partners.map((p) => (
    <img key={p.name} src={p.src} alt={p.name} height="33" style={{ width: p.w }} className={`h-[33px] shrink-0 opacity-90 transition-opacity duration-300 hover:opacity-100 ${className}`} />
  ))
}

export default function Testimonial() {
  return (
    <section className="relative -mt-10 overflow-hidden bg-[url('/images/topo-pattern.jpg')] bg-cover bg-center pt-[100px] pb-14 lg:pb-[55px]">
      <div className="container-x">
        <Reveal as="figure">
          <p className="eyebrow">Testimonial</p>
          <blockquote className="mt-6 max-w-[1010px] text-[28px] leading-[1.15] font-bold tracking-[-0.01em] lg:tracking-[-0.043em] sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            "TrailHive has completely changed the way I explore the outdoors. The personalized trail recommendations and
            virtual challenges have kept me motivated and engaged with my adventures."
          </blockquote>
          <figcaption className="mt-6 text-xl leading-8 font-bold lg:text-2xl">- John R.</figcaption>
        </Reveal>

        <Reveal delay={100} className="mt-16 text-center lg:mt-[97px]">
          <p className="font-alt text-base leading-7 font-light sm:text-lg lg:text-xl lg:leading-7">
            Trusted by teams at over <span className="font-medium">1,000</span> of the world’s leading organizations
          </p>
        </Reveal>
      </div>

      <p className="sr-only lg:hidden">{partners.map((p) => p.name).join(', ')}</p>

      {/* Desktop: static row, as in the design. Smaller screens: gently scrolling marquee. */}
      <Reveal delay={200} className="mt-8 lg:mt-[45px]">
        <div className="container-x hidden items-center justify-center gap-14 lg:flex">
          <Logos />
        </div>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)] lg:hidden" aria-hidden="true">
          <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center gap-12 pr-12">
            <Logos />
            <Logos />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
