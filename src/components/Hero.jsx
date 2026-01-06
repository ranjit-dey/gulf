// components/Hero.jsx
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export default function Hero() {
    const logoRef = useRef(null)
    const textOneRef = useRef(null)
    const textTwoRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({
            delay: 0.6, // ⏳ wait for navbar animation
            defaults: { ease: 'power3.out' },
        })

        tl.fromTo(logoRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.3 })
            .fromTo(
                textOneRef.current,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6 },
                '-=0.4',
            )
            .fromTo(
                textTwoRef.current,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7 },
                '-=0.3',
            )
    }, [])

    return (
        <section className="h-screen w-full flex  items-center justify-center bg-white">
            <div className="flex flex-col items-center text-center px-6 ">
                <img ref={logoRef} src="/spark-t.webp" alt="Logo" className="h-20 md:h-28 mb-6" />

                <p
                    ref={textOneRef}
                    className="uppercase tracking-widest text-gray-600 text-sm md:text-base mb-2"
                >
                    Up Growth Engines
                </p>

                <h1 ref={textTwoRef} className="text-3xl md:text-5xl font-semibold text-[#8A4C24]">
                    Charging Ahead
                </h1>
            </div>
        </section>
    )
}
