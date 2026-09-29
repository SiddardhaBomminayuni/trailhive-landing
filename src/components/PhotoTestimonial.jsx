import Reveal from './Reveal.jsx'

export default function PhotoTestimonial() {
  return (
    <section className="relative isolate overflow-hidden pt-16 pb-16 lg:pt-20 lg:pb-[78px]">
      <img
        src="/images/testimonial-bg.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center] lg:object-center"
      />
      {/* keeps the quote readable where the photo shifts behind it on small screens */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest/60 via-forest/30 to-transparent lg:hidden" aria-hidden="true" />

      <div className="container-x">
        <Reveal as="figure">
          <p className="eyebrow">Testimonial</p>
          <blockquote className="mt-6 max-w-[790px] text-[28px] leading-[1.15] font-bold sm:text-4xl lg:text-[50px] lg:leading-[1.1]">
            "I love the social networking aspect of TrailHive. It's great to connect with other hikers and bikers and plan
            group events together."
          </blockquote>
          <figcaption className="mt-6 text-xl leading-8 font-bold lg:text-2xl">- Sara L.</figcaption>
        </Reveal>
        <Reveal delay={150} className="mt-[30px]">
          <a href="#" className="btn-mint h-[38px] w-[121px] !px-0">Learn More</a>
        </Reveal>
      </div>
    </section>
  )
}
