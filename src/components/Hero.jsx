// components/Hero.jsx
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function Hero() {
    const containerRef = useRef(null);
    const logoRef = useRef(null);
    const textRef = useRef(null);
    const svgRef = useRef(null);
    const imageRefs = useRef([]);

    const images = [
        { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600', pos: 'top-[12%] left-[5%] md:left-[10%]', size: 'w-28 h-36 md:w-48 md:h-64' },
        { src: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=600', pos: 'bottom-[12%] left-[8%] md:left-[15%]', size: 'w-36 h-24 md:w-56 md:h-40' },
        { src: 'https://images.unsplash.com/photo-1444491741275-3747c53c99b4?q=80&w=600', pos: 'top-[15%] right-[5%] md:right-[12%]', size: 'w-40 h-28 md:w-64 md:h-44' },
        { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=600', pos: 'bottom-[10%] right-[10%] md:right-[8%]', size: 'w-28 h-40 md:w-40 md:h-56' },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            // Set Initial States
            gsap.set(".path-line", { strokeDasharray: 1000, strokeDashoffset: 1000 });
            gsap.set(imageRefs.current, { opacity: 0, y: 30, scale: 0.9 });

            tl.to(".path-line", {
                strokeDashoffset: 0,
                duration: 2,
                stagger: 0.15,
                ease: "power2.inOut"
            })
            .to(imageRefs.current, {
                opacity: 0.7,
                y: 0,
                scale: 1,
                duration: 1,
                stagger: 0.1,
            }, "-=1.2")
            .from([logoRef.current, ...textRef.current.children], {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
            }, "-=0.8");

            // Continuous Ambient Floating
            imageRefs.current.forEach((img, i) => {
                gsap.to(img, {
                    yPercent: i % 2 === 0 ? 8 : -8,
                    duration: 3 + i,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-screen flex items-center justify-center bg-[#0B1220] overflow-hidden selection:bg-orange-500 selection:text-white"
        >
            {/* Architectural SVG Layer */}
            <svg
                ref={svgRef}
                className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20"
                viewBox="0 0 1000 1000"
                preserveAspectRatio="xMidYMid slice"
            >
                <path className="path-line" d="M -100,300 Q 500,500 1100,300" fill="none" stroke="#F97316" strokeWidth="1" />
                <path className="path-line" d="M -100,700 Q 500,500 1100,700" fill="none" stroke="#F97316" strokeWidth="1" />
                <circle cx="500" cy="500" r="380" fill="none" stroke="#F97316" strokeWidth="0.5" strokeDasharray="12,12" />
            </svg>

            {/* Dynamic Image Grid */}
            <div className="absolute inset-0 z-10">
                {images.map((img, i) => (
                    <div
                        key={i}
                        ref={(el) => (imageRefs.current[i] = el)}
                        className={`absolute overflow-hidden rounded-xl md:rounded-2xl shadow-2xl transition-all duration-500 ease-out group hover:scale-105 hover:z-30 hover:opacity-100 ${img.pos} ${img.size}`}
                    >
                        <img
                            src={img.src}
                            alt=""
                            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                        />
                        {/* Orange glow on hover */}
                        <div className="absolute inset-0 border-0 group-hover:border-2 border-orange-500/50 rounded-xl md:rounded-2xl transition-all duration-500" />
                    </div>
                ))}
            </div>

            {/* Main Content Card */}
            <div className="relative z-20 w-full max-w-4xl mx-auto px-4 text-center">
                <div className="bg-[#0B1220]/40 backdrop-blur-xl border border-white/10 p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] shadow-2xl">
                    <div ref={logoRef} className="inline-block mb-6 md:mb-8">
                        <img
                            src="/spark-t.webp"
                            alt="Logo"
                            className="h-12 md:h-20 w-auto filter brightness-110"
                        />
                    </div>

                    <div ref={textRef} className="space-y-4">
                        <p className="uppercase tracking-[0.3em] text-orange-500 text-[10px] md:text-xs font-bold">
                            Advanced Growth Engines
                        </p>

                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight md:leading-[0.85]">
                            Charging <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                Ahead.
                            </span>
                        </h1>

                        <div className="pt-6 md:pt-10 flex items-center justify-center gap-4 md:gap-8">
                            <span className="h-[1px] flex-1 max-w-[40px] md:max-w-[80px] bg-white/20" />
                            <span className="text-[9px] md:text-[11px] uppercase tracking-[0.25em] text-gray-400 font-semibold whitespace-nowrap">
                                Innovation in Motion • 2026
                            </span>
                            <span className="h-[1px] flex-1 max-w-[40px] md:max-w-[80px] bg-white/20" />
                        </div>
                    </div>
                </div>
            </div>

            {/* UI Metadata */}
            <div className="absolute bottom-6 left-6 flex flex-col gap-1 text-[9px] text-gray-500 font-mono hidden sm:block">
                <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                    ENGINE_STATUS: OPTIMIZED
                </span>
                <span className="opacity-50 tracking-widest">DEPLOY_ID: 0B1220-X9</span>
            </div>

            <div className="absolute top-6 right-6 text-[9px] text-gray-500 font-mono text-right hidden sm:block">
                <p className="tracking-widest opacity-60">NEW YORK // GLOBAL</p>
            </div>
        </section>
    );
}
