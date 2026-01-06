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

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(contentRef.current.children, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="relative  py-24" >
            <div ref={contentRef} className="max-w-3xl space-y-6 mx-auto text-center">
                <h2 className=" text-center text-3xl md:text-4xl font-semibold text-gray-900">
                    Global <span className="text-[#8A4C24]">Partnerships</span>
                </h2>

                <p className="text-gray-600 leading-relaxed">
                    With a rich legacy in motorsports and a history of collaborations with numerous
                    renowned brands, the company has cultivated an iconic and effortlessly cool
                    image.
                </p>

                <p className="text-gray-600 leading-relaxed">
                    Today, it partners with{' '}
                    <span className="font-medium text-gray-900">Atlassian Williams Racing</span> in
                    Formula 1 and{' '}
                    <span className="font-medium text-gray-900">Trackhouse Racing</span> in MotoGP.
                </p>

                <p className="text-gray-600 leading-relaxed">
                    It also owns and partners with leading names such as{' '}
                    <span className="font-medium text-gray-900">
                        Reviva Coffee, ROFOGO, and TAG Heuer
                    </span>
                    , strengthening its presence across performance, innovation, and lifestyle.
                </p>
            </div>

            <LogoMarquee logos={logos} />
        </section>
    )
}
