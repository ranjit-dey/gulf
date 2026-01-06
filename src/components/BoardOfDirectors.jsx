import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function BoardOfDirectors({ data }) {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-24 px-6 md:px-20">
      {/* Heading */}
      <h2 className="mb-16 text-center text-3xl md:text-4xl font-semibold">
        <span className="text-orange-500">Board</span>{' '}
        <span className="text-indigo-600">of Directors</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="rounded-2xl bg-white shadow-lg p-6 text-center"
          >
            {/* Image with angled frame */}
            <div className="relative mx-auto mb-6 w-52 h-64">
              <div className="absolute inset-0 -skew-x-6 border-2 border-orange-400 rounded-xl" />
              <img
                src={item.image}
                alt={item.name}
                className="relative z-10 h-full w-full object-contain"
              />
            </div>

            {/* Name */}
            <h3 className="font-semibold text-lg text-gray-900">
              {item.name}
            </h3>

            {/* Role */}
            <p className="mt-1 text-sm text-gray-600">
              {item.role}
            </p>

            {/* Tags */}
            <div className="mt-4 flex justify-center gap-2">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`h-8 w-8 rounded-md text-white text-sm flex items-center justify-center ${item.tagColors[i]}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination UI (optional slider later) */}
      <div className="mt-14 flex items-center justify-center gap-3">
        <button className="h-10 w-10 rounded-full bg-white shadow flex items-center justify-center">
          ←
        </button>
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-blue-600" />
          <span className="h-3 w-3 rounded-full bg-gray-300" />
          <span className="h-3 w-3 rounded-full bg-gray-300" />
        </div>
        <button className="h-10 w-10 rounded-full bg-white shadow flex items-center justify-center">
          →
        </button>
      </div>
    </section>
  )
}
