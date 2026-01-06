import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Leadership = () => {
  const sectionRef = useRef(null)
  const leftRef = useRef(null)
  const cardsRef = useRef([])
  const scrollRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade-in
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })

      // Left content stagger
      gsap.from(leftRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: leftRef.current,
          start: 'top 80%',
        },
      })

      // Cards animation
      gsap.from(cardsRef.current, {
        y: 80,
        opacity: 0,
        scale: 0.96,
        duration: 1.1,
        stagger: 0.25,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })

      // Scroll indicator pulse
      gsap.to(scrollRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: 'power1.inOut',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full bg-[#001529] text-white relative overflow-hidden flex items-center py-20 md:py-0"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Left */}
          <div ref={leftRef} className="w-full lg:w-1/3 text-center lg:text-left">
            <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-orange-500 mb-6">
              Our Leadership
            </h2>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-serif font-light leading-[1.1] mb-8">
              Visionary <br />
              <span className="italic font-normal text-white/90">
                Governance
              </span>
            </h1>

            <p className="text-white/50 max-w-sm mx-auto lg:mx-0 text-lg leading-relaxed">
              Driving sustainable growth through a segment-focused strategy and operational excellence.
            </p>
          </div>

          {/* Cards */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

            {/* Chairman */}
            <div ref={el => cardsRef.current[0] = el} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-b from-orange-500/20 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />

              <div className="relative h-full rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl p-8 xl:p-10 flex flex-col justify-between transition-all duration-500 group-hover:-translate-y-2">
                <div>
                  <div className="text-orange-500 text-5xl font-serif mb-4 italic">“</div>
                  <p className="text-lg xl:text-xl leading-relaxed text-white/80 font-light italic mb-8">
                    Despite global uncertainties, we remained resilient. Our philosophy of quality drives our growth.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500/40">
                    <img src="/Sanjay.webp" alt="Sanjay G. Hinduja" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Sanjay G. Hinduja</h3>
                    <p className="text-orange-500 text-[10px] tracking-[0.2em] uppercase font-bold">
                      Chairman
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CEO */}
            <div ref={el => cardsRef.current[1] = el} className="relative group md:mt-12">
              <div className="absolute -inset-1 bg-gradient-to-b from-indigo-500/20 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />

              <div className="relative h-full rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl p-8 xl:p-10 flex flex-col justify-between transition-all duration-500 group-hover:-translate-y-2">
                <div>
                  <div className="text-indigo-400 text-5xl font-serif mb-4 italic">“</div>
                  <p className="text-lg xl:text-xl leading-relaxed text-white/80 font-light italic mb-8">
                    We are charging ahead with confidence into new energy horizons and segment-focused strategies.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-500/40">
                    <img src="/Ravi.webp" alt="Ravi Chawla" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Ravi Chawla</h3>
                    <p className="text-indigo-400 text-[10px] tracking-[0.2em] uppercase font-bold">
                      MD & CEO
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  )
}

export default Leadership
