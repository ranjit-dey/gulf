import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Anim = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const cardsRef = useRef([]);

  // Clear refs array on re-render
  cardsRef.current = [];
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Logo appears (Scale and Fade)
      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
      );

      // 2. Cards show one by one (Staggered)
      tl.fromTo(
        cardsRef.current,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.7)"
        },
        "-=0.4" // Starts slightly before logo finishes
      );

      // 3. Subtle Pulse Animation (Infinite)
      gsap.to(cardsRef.current, {
        scale: 1.03,
        borderColor: "rgba(255, 165, 0, 0.8)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.2,
          repeat: -1,
          yoyo: true,
        },
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  const cardData = [
    { title: "Strategies", text: "Are crystal clear, mapped distinctly...", top: "120%", left: "5%", arrowUp: true },
    { title: "Plans", text: "Are refined and ready to execute.", top: "-120%", left: "30%" },
    { title: "Actions", text: "Are impact-driven, shifting from intent...", top: "120%", left: "42%", arrowUp: true },
    { title: "Resources", text: "Are realigned to amplify outcomes.", top: "-120%", left: "68%" },
    { title: "KRA/KPIs", text: "Are simplified, transparent and tightly...", top: "120%", left: "82%", arrowUp: true },
  ];

  return (
    <div ref={containerRef} className="bg-black relative min-h-screen overflow-hidden">
      {/* Background stays the same */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)" }} />
      </div>

      <div className="relative z-10 px-4 py-32 lg:py-72">
        <div className="relative max-w-6xl mx-auto w-full flex flex-col items-center">

          {/* Logo with Ref */}
          <div ref={logoRef} className="relative mb-12 md:mb-0 opacity-0">
            <img
              src="/spark-t.webp"
              alt="SPARK"
              className="w-full h-auto max-w-xs md:max-w-4xl mx-auto"
              style={{ filter: "drop-shadow(0 0 30px rgba(255,165,0,0.6))" }}
            />

            {/* DESKTOP FLOATING CARDS */}
            <div className="hidden md:block">
              {cardData.map((item, i) => (
                <div
                  key={i}
                  ref={addToRefs}
                  className="absolute opacity-0"
                  style={{ top: item.top, left: item.left, transform: "translateX(-50%)" }}
                >
                  <div className="relative p-4 w-72 rounded-lg backdrop-blur-sm bg-black/90 text-white border border-orange-500/40">
                    <div className="bg-linear-to-r from-orange-500 to-orange-400 text-black px-3 py-1 text-sm font-bold rounded-lg mb-2 inline-block">
                      {item.title}
                    </div>
                    <p className="text-sm text-gray-100">{item.text}</p>
                  </div>
                  {/* Connectors */}
                  <div className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-orange-500 ${item.arrowUp ? "bottom-full h-5" : "top-full h-6"}`} />
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE STACK */}
          <div className="w-full max-w-md mt-8 md:hidden">
            {cardData.map((item, i) => (
              <div
                key={i}
                ref={addToRefs}
                className="p-4 mb-4 rounded-lg bg-black/90 border border-orange-500/40 opacity-0"
              >
                <div className="bg-orange-500 text-black px-3 py-1 text-sm font-bold rounded mb-2 inline-block">
                  {item.title}
                </div>
                <p className="text-sm text-gray-100">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anim;
