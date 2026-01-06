import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current.children, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#163A7A] text-white"
    >
      {/* Top content */}
      <div
        ref={contentRef}
        className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12
                   md:flex-row md:items-center md:justify-between"
      >
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src="/gulf-logo.svg"
            alt="Gulf Logo"
            className="h-14 w-14 rounded-xl bg-white p-2"
          />
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-white/80 md:text-left">
          © 2026 Gulf Oil Lubricants India Limited. All Rights Reserved.
        </p>

        {/* Partner */}
        <div className="flex items-center justify-center gap-2 md:justify-end">
          <span className="text-sm text-white/70">Powered by</span>
          <img
            src="/ka-logo.png"
            alt="OKA"
            className="h-6 w-auto"
          />
          <span className="text-white/80">↗</span>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto h-px max-w-7xl bg-white/20" />

      {/* Bottom */}
      <div className="py-6 text-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-sm text-white/70 hover:text-white transition"
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  )
}
