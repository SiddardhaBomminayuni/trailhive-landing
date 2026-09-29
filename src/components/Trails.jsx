import Reveal from './Reveal.jsx'

export default function Trails() {
  return (
    <section className="panel overflow-hidden px-3 pt-14 pb-3 sm:px-5 sm:pb-5 lg:pt-16">
      <Reveal as="h2" className="container-x text-center text-[30px] leading-[1.2] font-medium text-balance sm:text-[40px] lg:text-5xl">
        Find new trails to explore and <br className="hidden md:block" />
        adventures to embark on.
      </Reveal>
      <Reveal zoom delay={120} className="mt-10 overflow-hidden rounded-[18px] lg:rounded-[24px]">
        <img
          src="/images/trail-hikers.jpg"
          alt="Two hikers with large backpacks walking a trail toward snowy mountains"
          width="1400"
          height="700"
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-[1.4s] ease-out-soft hover:scale-[1.03] sm:aspect-[2/1]"
        />
      </Reveal>
    </section>
  )
}
