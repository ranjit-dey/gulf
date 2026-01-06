// components/About.jsx
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",   // when section enters viewport
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
      })

      tl.fromTo(
        imageRef.current,
        { x: -80, opacity: 0, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 1 }
      )
        .fromTo(
          contentRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
          },
          "-=0.6"
        )
        .fromTo(
          buttonRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.3"
        )
    }, sectionRef)

    return () => ctx.revert() // cleanup
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0B1220] text-white py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT — IMAGE */}
        <div ref={imageRef} className="relative">
          <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full" />
          <img
            src="/unlock.webp" // your image
            alt="Unlock Growth"
            className="relative z-10 w-full max-w-md mx-auto"
          />
        </div>

        {/* RIGHT — CONTENT */}
        <div ref={contentRef} className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Unlocking Momentum.<br />
            Accelerating Growth.
          </h2>

          <p className="text-orange-400 font-medium tracking-wide">
            UNLOCK 2.0
          </p>

          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            At Gulf Oil, progress has always been about momentum — delivering
            value consistently while knowing when to shift gears, accelerate,
            and transform the system itself.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Under the theme <span className="text-white">Unlock 2.0</span>, we
            sharpened our core strengths, embraced clarity and speed, and opened
            new avenues of growth that prepare us for what’s next.
          </p>

          <button
            ref={buttonRef}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-medium text-black hover:bg-orange-400 transition-all duration-300"
          >
            Learn More <span className="text-lg">→</span>
          </button>
        </div>

      </div>
    </section>
  )
}
