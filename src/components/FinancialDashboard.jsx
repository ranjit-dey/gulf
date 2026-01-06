import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

const FinancialDashboard = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [cardsToShow, setCardsToShow] = useState(4)

    const sectionRef = useRef(null)
    const carouselRef = useRef(null)

    const metrics = [
        { title: 'Revenue', img: '/Revenue.webp' },
        { title: 'Net worth', img: '/Net-worth.webp' },
        { title: 'EBITDA', img: '/Ebitda.webp' },
        { title: 'PAT', img: '/PAT.webp' },
        { title: 'Cash & Bank Balance', img: '/Cash-and-Bank-Balance.webp' },
        { title: 'Dividend Per Share', img: '/Dividend-Per-Share.webp' },
        { title: 'EPS', img: '/EPS.webp' },
        { title: 'Dividend Payout', img: '/Dividend-Payout.webp' },
    ]

    /* -------------------- RESPONSIVE CARDS -------------------- */
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setCardsToShow(1)
            else if (window.innerWidth < 1024) setCardsToShow(2)
            else setCardsToShow(4)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    /* -------------------- SCROLLTRIGGER REVEAL -------------------- */
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.graph-reveal',
                { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0, scale: 0.9 },
                {
                    clipPath: 'inset(0% 0% 0% 0%)',
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: 'expo.out',
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                    },
                },
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    /* -------------------- ACTIVE SLIDE FEEL -------------------- */
    useEffect(() => {
        gsap.fromTo(
            '.graph-reveal',
            { opacity: 0.5, y: 10 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.05 },
        )
    }, [currentIndex])

    /* -------------------- MOUSE WHEEL SCROLL -------------------- */
    useEffect(() => {
        const el = carouselRef.current
        if (!el) return

        let isThrottled = false

        const onWheel = (e) => {
            e.preventDefault()
            if (isThrottled) return

            if (e.deltaY > 0) {
                setCurrentIndex((prev) => Math.min(prev + 1, metrics.length - cardsToShow))
            } else {
                setCurrentIndex((prev) => Math.max(prev - 1, 0))
            }

            isThrottled = true
            setTimeout(() => {
                isThrottled = false
            }, 600)
        }

        el.addEventListener('wheel', onWheel, { passive: false })
        return () => el.removeEventListener('wheel', onWheel)
    }, [cardsToShow, metrics.length])

    /* -------------------- CONTROLS -------------------- */
    const nextSlide = () => {
        if (currentIndex < metrics.length - cardsToShow) {
            setCurrentIndex((prev) => prev + 1)
        }
    }

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1)
        }
    }

    return (
        <section ref={sectionRef} className="bg-[#FAF9F6] py-16 px-6 md:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* HEADER */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div className="space-y-2">
                        <p className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs">
                            Annual Metrics
                        </p>
                        <h1 className="text-4xl md:text-6xl font-black text-[#0B1220] tracking-tighter">
                            Financial <span className="text-orange-500">Performance.</span>
                        </h1>
                    </div>

                    {/* BUTTON CONTROLS */}
                    <div className="flex gap-3">
                        <button
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className={`p-3 rounded-full border-2 transition-all ${
                                currentIndex === 0
                                    ? 'border-gray-200 text-gray-300'
                                    : 'border-[#0B1220] text-[#0B1220] hover:bg-[#0B1220] hover:text-white'
                            }`}
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            disabled={currentIndex >= metrics.length - cardsToShow}
                            className={`p-3 rounded-full border-2 transition-all ${
                                currentIndex >= metrics.length - cardsToShow
                                    ? 'border-gray-200 text-gray-300'
                                    : 'border-[#0B1220] text-[#0B1220] hover:bg-[#0B1220] hover:text-white'
                            }`}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* CAROUSEL */}
                <div ref={carouselRef} className="relative">
                    <div
                        className="flex transition-transform duration-700"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
                        }}
                    >
                        {metrics.map((item, idx) => (
                            <div
                                key={idx}
                                style={{ minWidth: `${100 / cardsToShow}%` }}
                                className="px-3"
                            >
                                <div className="group bg-white rounded-2xl border border-gray-400/30 hover:border-orange-500 p-8 flex flex-col items-center shadow-[0_20px_50px_rgba(11,18,32,0.05)] hover:shadow-[0_20px_60px_rgba(249,115,22,0.1)] transition-all duration-500">
                                    <h2 className="text-lg md:text-xl font-black text-[#0B1220] group-hover:text-orange-500 transition-colors duration-300">
                                        {item.title}
                                    </h2>

                                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1 mb-8 font-bold">
                                        Figures in ₹ Crores
                                    </p>

                                    <div className="relative w-full aspect-[4/3] flex items-center justify-center overflow-hidden rounded-xl">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="graph-reveal w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FinancialDashboard
