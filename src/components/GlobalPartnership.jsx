import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import LogoMarquee from './LogoMarquee'

gsap.registerPlugin(ScrollTrigger)

export default function GlobalPartnership() {
    const logos = [
        '/Trackhouse.webp',
        '/TagHeuer.webp',
        '/Williams.webp',
        '/Everrati.webp',
        '/Mclaren.webp',
        '/Rofgo.webp',
    ]
    const sectionRef = useRef(null)
    const contentRef = useRef(null)
    const bgRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Content Reveal
            gsap.from(contentRef.current.children, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
            })

            // 2. Optimized Parallax
            // We move the image from -10% to 10% to ensure no edges show
            gsap.fromTo(bgRef.current,
                { y: "-10%" },
                {
                    y: "10%",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    },
                    ease: 'none',
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#0A192F] py-20 md:py-0"
        >
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                    ref={bgRef}
                    src="/global-partnership.png"
                    alt="Global Network"
                    // h-[120%] is key for the parallax movement space
                    className="absolute top-[-10%] left-0 w-full h-[120%] object-cover opacity-30 mix-blend-screen"
                />
                {/* Responsive Gradient Masks */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-transparent to-[#0A192F] opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-transparent to-[#0A192F] opacity-80 md:opacity-40" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl px-4 md:px-10 mx-auto flex flex-col items-center justify-between min-h-[70vh]">

                {/* Text Content */}
                <div ref={contentRef} className="max-w-4xl w-full space-y-6 md:space-y-10 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
                        Global <span className="text-[#F18841]">Partnerships</span>
                    </h2>

                    <div className="space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl text-blue-100/70 leading-relaxed max-w-3xl mx-auto px-2">
                        <p>
                            With a rich legacy in motorsports and a history of collaborations with numerous
                            renowned brands, the company has cultivated an iconic and effortlessly cool
                            image.Today, it partners with{' '}
                            <span className="font-semibold text-white">Atlassian Williams Racing</span> in
                            Formula 1 and{' '}
                            <span className="font-semibold text-white">Trackhouse Racing</span> in MotoGP.
                            It also owns and partners with leading names such as{' '}
                            <span className="font-semibold text-white">
                                Reviva Coffee, ROFOGO, and TAG Heuer
                            </span>
                            , strengthening its presence across performance, innovation, and lifestyle.
                        </p>
                    </div>
                </div>

                {/* Marquee Section - Positioned at bottom of viewport */}
                <div className="w-full mt-12 md:mt-20">
                    <LogoMarquee logos={logos} />
                </div>
            </div>
        </section>
    )
}
