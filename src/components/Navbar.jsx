import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import navData from './navData.js'

export default function FuturisticNavbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const formatSlug = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[&]/g, 'and')

    return (
        <header
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
                scrolled
                    ? 'bg-[#0B1220]/95 backdrop-blur-md border-b border-cyan-500/20'
                    : 'bg-transparent'
            }`}
        >
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
                {/* Logo */}
                <Link to="/" className="flex-shrink-0">
                    <img src="/gulf-logo.svg" alt="Logo" className="h-9 w-auto brightness-110" />
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex items-center gap-1 h-full">
                    {navData.map((category, idx) => (
                        <li
                            key={idx}
                            className="relative h-full flex items-center"
                            onMouseEnter={() => setActiveDropdown(idx)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button
                                className={`flex items-center gap-1 px-4 py-2 text-[10px] tracking-[0.15em] font-bold uppercase transition-colors ${
                                    activeDropdown === idx
                                        ? 'text-cyan-400'
                                        : 'text-gray-300 hover:text-white'
                                }`}
                            >
                                {category.title}
                                <ChevronDown
                                    size={14}
                                    className={`transition-transform duration-300 ${
                                        activeDropdown === idx ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>

                            {/* COMPACT GRID DROPDOWN */}
                            <div
                                className={`absolute top-[80%] left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                                    activeDropdown === idx
                                        ? 'opacity-100 visible translate-y-0'
                                        : 'opacity-0 invisible -translate-y-2'
                                }`}
                            >
                                <div className="w-[850px] bg-[#0F172A] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex">
                                    {/* Sidebar Accent */}
                                    <div className="w-1/3 p-6 bg-cyan-500/5 border-r border-white/5 flex flex-col justify-between">
                                        <div>
                                            <div className="text-cyan-500 font-mono text-[9px] mb-2 tracking-widest">
                                                SECTION_0{idx + 1}
                                            </div>
                                            <h3 className="text-white text-xl font-black uppercase leading-tight">
                                                {category.title}
                                            </h3>
                                        </div>
                                        <div className="h-1 w-12 bg-cyan-500/50" />
                                    </div>

                                    {/* Scroll-free Grid */}
                                    <div className="w-2/3 p-6 grid grid-cols-2 gap-2">
                                        {category.items.map((item, i) => (
                                            <Link
                                                key={i}
                                                to={`/${formatSlug(category.title)}/${formatSlug(
                                                    item,
                                                )}`}
                                                onClick={() => setActiveDropdown(null)}
                                                className="group flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
                                            >
                                                <span
                                                    className={`text-[13px] font-medium ${
                                                        item === 'unlock2.0'
                                                            ? 'text-orange-400'
                                                            : 'text-gray-400 group-hover:text-white'
                                                    }`}
                                                >
                                                    {item}
                                                </span>
                                                <ArrowUpRight
                                                    size={14}
                                                    className="text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                                />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* Right Action */}
                <div className="hidden lg:block">
                    <button className="px-6 py-2 bg-white text-[#0B1220] text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-cyan-400 transition-all transform hover:scale-105 active:scale-95">
                        Download Report
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-white">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Menu - Grid Layout */}
            <div
                className={`lg:hidden fixed inset-0 top-20 bg-[#0B1220] z-50 transition-transform duration-500 ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="p-6 h-full overflow-y-auto pb-32">
                    {navData.map((category, idx) => (
                        <div key={idx} className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-cyan-500 text-[10px] font-bold">
                                    0{idx + 1}
                                </span>
                                <h4 className="text-white text-xs font-black uppercase tracking-widest">
                                    {category.title}
                                </h4>
                            </div>
                            <div className="grid grid-cols-2 gap-3 pl-4">
                                {category.items.map((item, i) => (
                                    <Link
                                        key={i}
                                        to={`/${formatSlug(category.title)}/${formatSlug(item)}`}
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-400 text-sm py-1 hover:text-cyan-400"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    )
}
