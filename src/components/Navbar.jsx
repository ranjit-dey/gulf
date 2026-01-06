// components/Navbar.jsx
import gsap from 'gsap'
import { ChevronDown, Download, Menu } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const navItems = ['Corporate Overview', 'Statutory Reports', 'Financial Statements', 'Notice']

export default function Navbar() {
    const navRef = useRef(null)
    const mobileMenuRef = useRef(null)
    const [open, setOpen] = useState(false)

    // Initial animation
    useEffect(() => {
        gsap.fromTo(
            navRef.current.children,
            { y: -30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power3.out',
            },
        )
    }, [])

    // Mobile menu animation
    useEffect(() => {
        if (open) {
            gsap.fromTo(
                mobileMenuRef.current,
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' },
            )
        }
    }, [open])

    return (
        <header className="w-full bg-white border-b absolute top-0 z-100">
            <nav
                ref={navRef}
                className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4"
            >
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="/gulf-logo.svg" alt="Gulf Logo" className="h-10 w-auto" />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <li
                            key={item}
                            className="flex items-center gap-1 text-sm font-medium text-gray-700 cursor-pointer hover:text-gray-900 transition "
                        >
                            {item}
                            <ChevronDown size={16} className="text-gray-500" />
                        </li>
                    ))}
                </ul>

                {/* Report Button */}
                <div className="hidden md:block">
                    <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
                        <Download size={16} />
                        Report
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <button onClick={() => setOpen(!open)} className="md:hidden size-8 flex items-center justify-center bg-blue-800 rounded-full text-white">
                    <Menu width={14} />
                </button>
            </nav>

            {/* Mobile Menu */}
            {open && (
                <div
                    ref={mobileMenuRef}
                    className="md:hidden bg-white border-t px-6 py-4 space-y-4"
                >
                    {navItems.map((item) => (
                        <div key={item} className="text-sm font-medium text-gray-700">
                            {item}
                        </div>
                    ))}

                    <button className="w-full border px-4 py-2 rounded-full text-sm font-medium">
                        Report
                    </button>
                </div>
            )}
        </header>
    )
}
