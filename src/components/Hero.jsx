import Reveal from './Reveal.jsx'

export default function Hero() {
  return (
    <section className="overflow-hidden pt-12 pb-16 lg:pt-[63px] lg:pb-[67px]">
      <div className="container-x flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
        <div className="lg:w-[620px] lg:shrink">
          <Reveal as="h1" className="text-[clamp(3rem,11vw,4.25rem)] leading-none font-bold tracking-[-0.02em] lg:text-[clamp(4rem,6vw,5.3125rem)]">
            Your Ultimate <br className="hidden min-[420px]:block" />
            Outdoor <br className="hidden min-[420px]:block" />
            Companion
          </Reveal>
          <Reveal as="p" delay={120} className="mt-6 max-w-[500px] text-base leading-[26px] sm:text-lg sm:leading-[29px]">
            Are you tired of spending hours searching for the perfect hiking or biking trail? TrailHive - the ultimate outdoor
            adventure app that connects you with the best trails in your area.
          </Reveal>
          <Reveal delay={220} className="mt-8 lg:mt-10">
            <a href="#" className="btn-mint h-[42px] w-[173px] !px-0">Download the app</a>
          </Reveal>
        </div>

        <Reveal zoom delay={150} className="w-full lg:mt-1 lg:w-[500px] lg:shrink-0">
          <div className="group overflow-hidden rounded-[20px]">
            <img
              src="/images/hero-lake.jpg"
              alt="Hiker with a backpack looking out over a mountain lake"
              width="500"
              height="440"
              fetchPriority="high"
              className="aspect-[500/440] w-full object-cover transition-transform duration-[1.2s] ease-out-soft group-hover:scale-[1.04]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
