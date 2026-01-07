import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const NoticeOfThe16thAnnualGeneralMeeting = () => {
    const containerRef = useRef(null)

    const reportUrl = '/reports/NoticeOfThe16thAnnualGeneralMeeting.pdf'

    useEffect(() => {
        gsap.fromTo(
            containerRef.current,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
            },
        )
    }, [])

    return (
        <>
            <div ref={containerRef} className="space-y-12 md:space-y-20">
                <p className="text-gray-600 mb-8 leading-relaxed max-w-2xl">
                    Download the official notice for the 16th Annual General Meeting. This document
                    contains important information for all stakeholders.
                </p>

                <a
  href={reportUrl}
  download
  target="_blank"
  rel="noopener noreferrer"
  className="
    group inline-flex items-center gap-3
    rounded-xl px-6 py-3
    font-semibold text-white
    bg-[#1E2126]
    transition-all duration-300
    hover:bg-orange-500 hover:text-[#1E2126]
    focus:outline-none focus:ring-4 focus:ring-orange-300
  "
>
  {/* SVG Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="
      h-5 w-5
      transition-all duration-300
      group-hover:translate-y-0.5
      group-hover:rotate-12
    "
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v12m0 0l4-4m-4 4l-4-4m8 6H8"
    />
  </svg>

  {/* Button Text */}
  <span className="transition-all duration-300">
    Download Report
  </span>
</a>

            </div>
        </>
    )
}

export default NoticeOfThe16thAnnualGeneralMeeting
