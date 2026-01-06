const Anim = () => {
  return (
    <div className="bg-black relative">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-12 md:py-32 lg:py-72 xl:py-96">
        <div className="relative max-w-6xl mx-auto w-full flex flex-col items-center">

          {/* IMAGE (Top on mobile, center on desktop) */}
          <div className="relative mb-12 md:mb-0 transition-all duration-1000 opacity-100 translate-y-0 scale-100">
            <img
              src="/spark-t.webp"
              alt="SPARK"
              className="w-full h-auto max-w-xs sm:max-w-md md:max-w-4xl mx-auto drop-shadow-2xl"
              style={{
                filter:
                  "drop-shadow(0 0 30px rgba(255,165,0,0.6)) drop-shadow(0 0 60px rgba(255,165,0,0.3))",
              }}
            />

            {/* DESKTOP FLOATING CARDS */}
            <div className="hidden md:block">
              {[
                {
                  title: "Strategies",
                  text:
                    "Are crystal clear, mapped distinctly across core strengths, new growth levers and future opportunities.",
                  top: "120%",
                  left: "5%",
                  arrowUp: true,
                },
                {
                  title: "Plans",
                  text: "Are refined and ready to execute.",
                  top: "-120%",
                  left: "30%",
                },
                {
                  title: "Actions",
                  text:
                    "Are impact-driven, shifting from intent to execution with teams mobilised and priorities sharpened.",
                  top: "120%",
                  left: "42%",
                  arrowUp: true,
                },
                {
                  title: "Resources",
                  text: "Are realigned to amplify outcomes.",
                  top: "-120%",
                  left: "68%",
                },
                {
                  title: "KRA/KPIs",
                  text:
                    "Are simplified, transparent and tightly woven into rewards architecture to drive performance and accountability.",
                  top: "120%",
                  left: "82%",
                  arrowUp: true,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{ top: item.top, left: item.left, transform: "translateX(-50%)" }}
                >
                  <div className="relative p-4 w-72 rounded-lg shadow-2xl backdrop-blur-sm bg-black/90 text-white border border-orange-500/40">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-black px-3 py-2 text-sm font-bold rounded-lg mb-3 inline-block">
                      {item.title}
                    </div>
                    <p className="text-sm text-gray-100 leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                  {/* Connector */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-orange-400 to-orange-600 ${
                      item.arrowUp ? "bottom-full h-5" : "top-full h-6"
                    }`}
                  />

                  {/* Arrow */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 ${
                      item.arrowUp ? "top-[-8px]" : "bottom-[-8px] rotate-180"
                    }`}
                  >
                    <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[16px] border-l-transparent border-r-transparent border-b-orange-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE STACK (Bottom on small screens) */}
          <div className="w-full max-w-6xl mt- md:hidden">
            {[
              "Strategies",
              "Plans",
              "Actions",
              "Resources",
              "KRA/KPIs",
            ].map((title, i) => (
              <div
                key={i}
                className="p-4 mb-3 rounded-lg shadow-2xl backdrop-blur-sm bg-black/90 text-white border border-orange-500/40"
              >
                <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-black px-3 py-2 text-sm font-bold rounded-lg mb-3 inline-block">
                  {title}
                </div>
                <p className="text-sm text-gray-100 leading-relaxed">
                  Content goes here.
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Anim
