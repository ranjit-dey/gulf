import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HeroMomentum() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const imageMainRef = useRef(null)
  const imageBackRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animation
      gsap.from(textRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      })

      // Main image
      gsap.from(imageMainRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        x: 120,
        y: 80,
        rotate: 6,
        scale: 0.9,
        opacity: 0,
        duration: 1.4,
        ease: 'power4.out',
      })

      // Background floating card
      gsap.from(imageBackRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        x: 200,
        y: -60,
        rotate: -8,
        opacity: 0,
        duration: 1.6,
        ease: 'power4.out',
      })

      // Button pop
      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: buttonRef.current,
          start: 'top 90%',
        },
        y: 20,
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-white px-6 md:px-20 py-24 overflow-hidden flex justify-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div ref={textRef} className="max-w-xl space-y-4">
          <p className="text-gray-500 font-medium tracking-wide">
            Gulf Oil International
          </p>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight">
            <span className="text-orange-500">Sparking</span>{' '}
            <span className="bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
              Global Momentum
            </span>
          </h1>

          <p className="text-gray-600 leading-relaxed">
            Gulf Oil International, part of the Hinduja Group, stands as one of
            the most recognisable lubricant brands worldwide. We power the
            world’s momentum with purpose.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our high-performance lubricants keep engines running, machines
            moving and industries thriving across the globe.
          </p>

          <button
            ref={buttonRef}
            className="mt-0 inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-4 text-white font-semibold shadow-lg shadow-orange-500/30 hover:scale-105 transition-transform"
          >
            Learn More
          </button>
        </div>

        {/* RIGHT VISUAL STACK */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Background Card */}
          <div
            ref={imageBackRef}
            className="absolute -top-10 -right-10 w-[85%] h-[85%] rounded-3xl bg-blue-200 rotate-6"
          />
          <div
            className="absolute -top-10 -right-10 w-[85%] h-[85%] rounded-3xl bg-blue-100/60 rotate-6"
          />

          {/* Main Image */}
          <div
            ref={imageMainRef}
            className="relative z-10 w-full max-w-md rounded-3xl  shadow-2xl hover:rotate-12 transition-all duration-300"
          >
            <img
              src="/about-img.webp"
              alt="Racing partnership"
              className="w-full h-full object-cover rounded-3xl hover:rotate-12 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-300 rounded-full blur-xl opacity-20 hover:rotate-2" />
    </section>
  )
}
