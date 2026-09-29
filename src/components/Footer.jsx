import { useState } from 'react'
import { footerColumns, legalLinks, socials } from '../data.js'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!email) return
    setDone(true)
    setEmail('')
  }

  return (
    <footer className="pt-16 pb-12 lg:pt-20 lg:pb-[85px]">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-[231px_230px_239px_1fr] lg:gap-0">
          <a href="#" aria-label="TrailHive home" className="col-span-2 self-start transition-opacity hover:opacity-80 lg:col-span-1">
            <img src="/logos/trailhive-light.png" alt="TrailHive" width="159" height="34" className="-ml-0.5 h-[34px] w-[159px]" />
          </a>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-base leading-6">{col.title}</h3>
              <ul className="mt-[23px] space-y-[18px]">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="link-underline text-sm leading-5">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <form onSubmit={submit} className="col-span-2 lg:col-span-1">
            <div className="flex flex-col gap-4 min-[480px]:flex-row min-[480px]:items-end">
              <label className="flex-1">
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setDone(false)
                  }}
                  placeholder="Enter your email"
                  className="h-12 w-full border-b border-mint/50 bg-transparent px-4 text-xs text-mint placeholder:text-mint/90 transition-colors focus:border-mint focus:outline-none"
                />
              </label>
              <button type="submit" className="btn-outline-mint h-12 w-full shrink-0 !px-0 min-[480px]:w-[133px]">
                Subscribe
              </button>
            </div>
            <p className="mt-6 text-xs leading-[18px]">
              By subscribing you agree to with our{' '}
              <a href="#" className="underline underline-offset-2 transition-opacity hover:opacity-80">Privacy Policy</a>
            </p>
            <p aria-live="polite" className="mt-2 min-h-5 text-sm">{done ? 'Thanks for subscribing!' : ''}</p>
          </form>
        </div>

        <div className="mt-14 h-px bg-mint/80 lg:mt-[82px]" />

        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between lg:mt-9">
          <div className="flex flex-col gap-4 text-sm leading-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
            <p>© 2023 TrailHive. All rights reserved.</p>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {legalLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="underline underline-offset-[3px] transition-opacity hover:opacity-80">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <ul className="-ml-1 flex gap-3 md:ml-0 md:-mr-0">
            {socials.map((s) => (
              <li key={s.label}>
                <a href="#" aria-label={s.label} className="block transition-transform duration-300 hover:-translate-y-0.5">
                  <img src={s.src} alt="" className="size-6" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
