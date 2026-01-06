// components/Navbar.jsx
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // Ensure ScrollTrigger is registered
import { ChevronDown, Download, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Register ScrollTrigger if in a browser environment
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const navItems = ['Corporate Overview', 'Statutory Reports', 'Financial Statements', 'Notice'];

export default function Navbar() {
    const navRef = useRef(null);
    const progressBarRef = useRef(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // 1. Initial entrance animation
        gsap.fromTo(
            ".nav-content",
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power4.out' }
        );

        // 2. Scroll Progress Bar Animation
        gsap.to(progressBarRef.current, {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 0.3, // Smoother follow
            }
        });
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full bg-[#0B1220]/90 backdrop-blur-md border-b border-white/10 z-[100]">
            {/* Scroll Progress Bar */}
            <div
                ref={progressBarRef}
                className="absolute bottom-0 left-0 h-[3px] w-full bg-orange-500 origin-left scale-x-0 z-50"
            />

            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <div className="nav-content flex items-center gap-2">
                    <img src="/gulf-logo.svg" alt="Logo" className="h-8 md:h-10 w-auto brightness-110" />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <li
                            key={item}
                            className="nav-content flex items-center gap-1 text-xs uppercase tracking-widest font-bold text-gray-300 cursor-pointer hover:text-orange-500 transition-colors duration-300"
                        >
                            {item}
                            <ChevronDown size={14} className="opacity-50" />
                        </li>
                    ))}
                </ul>

                {/* Action Button */}
                <div className="nav-content hidden md:block">
                    <button className="flex items-center gap-2 border border-orange-500/50 px-5 py-2 rounded-full text-[10px] uppercase tracking-tighter font-black text-white hover:bg-orange-500 hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                        <Download size={14} className="text-orange-500 hover:text-white group-hover:text-white" />
                        Download Report
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="nav-content md:hidden p-2 text-white hover:text-orange-500 transition-colors"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`absolute top-full left-0 w-full bg-[#0B1220] border-b border-white/10 transition-all duration-500 ease-in-out overflow-hidden ${
                    open ? 'max-h-screen opacity-100 py-8' : 'max-h-0 opacity-0 py-0'
                }`}
            >
                <div className="flex flex-col items-center gap-6 px-6">
                    {navItems.map((item) => (
                        <div
                            key={item}
                            className="text-sm uppercase tracking-[0.2em] font-bold text-gray-300 hover:text-orange-500"
                            onClick={() => setOpen(false)}
                        >
                            {item}
                        </div>
                    ))}
                    <button className="w-full max-w-xs bg-orange-500 text-white py-3 rounded-full text-xs font-bold uppercase tracking-widest">
                        Download Report
                    </button>
                </div>
            </div>
        </header>
    );
}
