import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { PAGE_MAP } from '../data/pageRegistry';
import { ChevronRight } from 'lucide-react';

export default function DynamicContentPage() {
    const { category, slug } = useParams();
    const headerRef = useRef(null);
    const contentRef = useRef(null);

    const PageContent = PAGE_MAP[slug];

    // Format display strings
    const displayCategory = category.replace(/-/g, ' ');
    const displayTitle = slug
        .split('-')
        .map(word => {
            if (['md', 'ceo', 'cfo', 'rd'].includes(word.toLowerCase())) return word.toUpperCase();
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');

    // GSAP Animation Trigger
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial state: hidden and slightly down
            gsap.fromTo(".animate-header",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power4.out" }
            );

            gsap.fromTo(contentRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1, delay: 0.4, ease: "none" }
            );
        }, headerRef);

        return () => ctx.revert(); // Cleanup on unmount/slug change
    }, [slug]); // Re-run animation when user navigates to a new item

    return (
        <div className="min-h-screen bg-white pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 md:px-10">
            <div className="max-w-7xl mx-auto" ref={headerRef}>

                {/* Responsive & Functional Breadcrumbs */}
                <nav className="animate-header mb-4 md:mb-6">
                    <ol className="flex flex-wrap items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">
                        <li>
                            <span className="hover:text-orange-500 transition-colors cursor-default">Home</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={12} className="opacity-50" />
                            <span className="cursor-default hover:text-orange-500 transition-colors ">{displayCategory}</span>
                        </li>
                        <li className="flex items-center gap-2 text-orange-500">
                            <ChevronRight size={12} className="opacity-50 text-gray-400" />
                            <span className="truncate max-w-[150px] sm:max-w-none">{displayTitle}</span>
                        </li>
                    </ol>
                </nav>

                {/* Header Section */}
                <div className="max-w-5xl mb-8 md:mb-12">
                    <h1 className="animate-header text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-[#0B1220] leading-[1.1] tracking-tight">
                        {displayTitle}
                    </h1>
                </div>

                {/* Content Area with Ref for GSAP */}
                <div className="page-content-area w-full" ref={contentRef}>
                    {PageContent ? (
                        <PageContent />
                    ) : (
                        <div className="py-12 md:py-20 text-gray-400 border-2 border-dashed border-gray-200 rounded-2xl md:rounded-3xl text-center px-4">
                            <p className="text-lg md:text-xl font-medium mb-2">Section under construction</p>
                            <p className="text-sm opacity-70">Detailed content for "{displayTitle}" will be available soon.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
