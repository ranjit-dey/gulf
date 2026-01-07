import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TrendingUp, Globe, Factory, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { label: "Touchpoints", value: 90000, suffix: "+", icon: <Zap size={20}/>, color: "from-orange-500 to-orange-600" },
    { label: "Revenue Growth", value: 15, suffix: "%", icon: <TrendingUp size={20}/>, color: "from-blue-600 to-blue-700" },
    { label: "B2B Countries", value: 25, suffix: "+", icon: <Globe size={20}/>, color: "from-slate-800 to-slate-900" },
    { label: "OEM Partnerships", value: 50, suffix: "+", icon: <Factory size={20}/>, color: "from-orange-600 to-red-600" },
];

export default function ManufacturingAndRdProwess() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // entrance animation
            gsap.from(".stat-card", {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            // Count-up animation
            stats.forEach((stat, i) => {
                const obj = { val: 0 };
                gsap.to(obj, {
                    val: stat.value,
                    duration: 2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
                    onUpdate: () => {
                        const el = document.getElementById(`stat-count-${i}`);
                        if (el) el.textContent = Math.floor(obj.val).toLocaleString();
                    }
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // 3D Tilt Effect on Mouse Move
    const handleMouseMove = (e, index) => {
        const card = cardsRef.current[index];
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            scale: 1.05,
            duration: 0.5,
            ease: "power2.out"
        });
    };

    const handleMouseLeave = (index) => {
        gsap.to(cardsRef.current[index], {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
        });
    };

    return (
        <section ref={sectionRef} className="py-12 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        ref={el => cardsRef.current[i] = el}
                        onMouseMove={(e) => handleMouseMove(e, i)}
                        onMouseLeave={() => handleMouseLeave(i)}
                        className="stat-card group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(249,115,22,0.1)] transition-shadow duration-500 overflow-hidden"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        {/* Subtle background glow on hover */}
                        <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />

                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div className="mb-8 p-3 w-fit rounded-2xl bg-slate-50 text-slate-800 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-500">
                                {stat.icon}
                            </div>

                            <div>
                                <div className="flex items-baseline gap-1">
                                    <span
                                        id={`stat-count-${i}`}
                                        className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter"
                                    >
                                        0
                                    </span>
                                    <span className="text-2xl font-bold text-orange-500">{stat.suffix}</span>
                                </div>
                                <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mt-2">
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Out of the box detail: Modern Floating Sub-text */}
            <div className="mt-12 flex flex-col md:flex-row items-center justify-between p-8 rounded-3xl bg-[#0B1220] text-white">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold">Consistently ranking in the top 2-3</h3>
                    <p className="text-slate-400 text-sm">Across bazaar segments with a well-diversified portfolio.</p>
                </div>
                <div className="px-6 py-3 bg-orange-500 rounded-full font-black text-sm uppercase ">
                    Amongst Top 3 in India
                </div>
            </div>
        </section>
    );
}

