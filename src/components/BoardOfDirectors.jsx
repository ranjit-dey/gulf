import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function BoardOfDirectors({ data }) {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const tlRef = useRef(null)

  const [activeIndex, setActiveIndex] = useState(0)

  const CARD_WIDTH = 300
  const GAP = 40
  const TOTAL = data.length
  const STEP = CARD_WIDTH + GAP

  // duplicate data for infinite loop
  const loopData = [...data, ...data, ...data]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const singleSetWidth = STEP * TOTAL

      // start position
      gsap.set(trackRef.current, { x: 0 })

      // infinite marquee
      tlRef.current = gsap.to(trackRef.current, {
        x: `-=${singleSetWidth}`,
        duration: TOTAL * 5,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % singleSetWidth),
        },
      })

      // active card detection
      const updateActive = () => {
        const x = Math.abs(gsap.getProperty(trackRef.current, 'x'))
        const index = Math.floor((x + STEP / 2) / STEP) % TOTAL
        setActiveIndex(index)
      }

      gsap.ticker.add(updateActive)

      return () => {
        gsap.ticker.remove(updateActive)
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [TOTAL, STEP])

  // hover handlers
  const pause = () => tlRef.current?.pause()
  const play = () => tlRef.current?.play()

  return (
    <section ref={sectionRef} className="bg-white py-28 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black uppercase">
          Board <span className="text-orange-500">of</span>{' '}
          <span className="text-indigo-600">Directors</span>
        </h2>
      </div>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-10 w-max"
          style={{ paddingLeft: 'calc(50vw - 150px)' }}
        >
          {loopData.map((item, i) => {
            const realIndex = i % TOTAL
            const isActive = realIndex === activeIndex

            return (
              <div
                key={i}
                className={`shrink-0 w-75 transition-all duration-500
                  ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-40 blur-[1px]'}
                `}
              >
                <div
                  className="relative mx-auto mb-6 w-48 h-60 cursor-pointer"
                  onMouseEnter={pause}
                  onMouseLeave={play}
                >
                  {/* Frame */}
                  <div
                    className={`absolute inset-0  border-2 rounded-2xl transition-colors
                      ${isActive ? 'border-orange-500' : 'border-gray-200'}
                    `}
                  />
                  <img
                    src={item.image}
                    alt={item.name}
                    className="relative z-10 w-full h-full object-contain p-2"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Details */}
      <div className="mt-16 max-w-3xl mx-auto text-center px-6">
        <h3 className="text-3xl font-bold">{data[activeIndex]?.name}</h3>
        <p className="text-indigo-600 uppercase tracking-widest text-sm mt-1">
          {data[activeIndex]?.role}
        </p>
        <p className="text-gray-600 mt-4">
          {data[activeIndex]?.description ||
            'Strategic leader focused on long-term growth and organizational excellence.'}
        </p>
      </div>
    </section>
  )
}
