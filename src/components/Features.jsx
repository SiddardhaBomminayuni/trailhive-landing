import Reveal from './Reveal.jsx'
import { features } from '../data.js'

function FeatureCard({ image, alt, title, text }) {
  return (
    <article className="group">
      <div className="overflow-hidden rounded-[20px]">
        <img
          src={image}
          alt={alt}
          width="240"
          height="311"
          loading="lazy"
          className="aspect-[4/3] w-full sm:aspect-[240/311] object-cover transition-transform duration-[1.2s] ease-out-soft group-hover:scale-[1.06]"
        />
      </div>
      <h3 className="mt-[18px] text-base leading-6">{title}</h3>
      <p className="mt-2 text-sm leading-[22px]">{text}</p>
    </article>
  )
}

export default function Features() {
  return (
    <section id="features" className="relative z-10 scroll-mt-20 px-0">
      <div className="panel pt-14 pb-14 lg:pt-16 lg:pb-[62px]">
        <div className="container-x flex flex-col gap-10 lg:flex-row lg:gap-0">
          <Reveal className="lg:w-[320px] lg:shrink-0">
            <p className="eyebrow">Features</p>
            <h2 className="mt-4 text-[32px] leading-[1.2] font-semibold tracking-[-0.022em] sm:text-[38px] lg:mt-6">
              Stay Active <br className="hidden lg:block" />
              and Healthy
            </h2>
            <a href="#" className="btn-forest mt-6 h-[39px] w-[122px] !px-0">Learn more</a>
          </Reveal>

          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 md:grid-cols-3 md:gap-x-6 lg:flex-1 lg:gap-x-12 xl:gap-x-20">
            {features.map((f, i) => (
              <Reveal key={i} delay={i * 120} className={i === 2 ? 'sm:col-span-2 sm:mx-auto sm:w-[calc(50%-20px)] md:col-span-1 md:w-auto' : ''}>
                <FeatureCard {...f} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
