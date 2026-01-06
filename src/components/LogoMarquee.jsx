import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function LogoMarquee({ logos = [] }) {
  const marqueeRef = useRef(null)
  const tweenRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      tweenRef.current = gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 20,
        ease: 'linear',
        repeat: -1,
      })
    })

    return () => ctx.revert()
  }, [])

  const handleMouseEnter = () => {
    tweenRef.current?.pause()
  }

  const handleMouseLeave = () => {
    tweenRef.current?.resume()
  }

  return (
    <section className="w-full overflow-hidden bg-transparent py-12">
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={marqueeRef}
          className="flex w-max items-center gap-16"
        >
          {/* First set */}
          {logos.map((logo, index) => (
            <img
              key={`logo-1-${index}`}
              src={logo}
              alt="company logo"
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition"
            />
          ))}

          {/* Duplicate set for infinite loop */}
          {logos.map((logo, index) => (
            <img
              key={`logo-2-${index}`}
              src={logo}
              alt="company logo"
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
