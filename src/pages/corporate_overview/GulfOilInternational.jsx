const GulfOilInternational = () => {
    return (
        <div className="space-y-12 md:space-y-12">
            <h2 className=" text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-black text-orange-500 leading-[1.1] tracking-tight">
                Sparking Global Momentum
            </h2>
            <p className="text-justify">
                Gulf Oil International, part of the Hinduja Group, stands as one of the most
                recognisable lubricant brands worldwide. We power the world’s momentum with purpose.
                With our roots tracing back to the early 1900s, we have built a reputation for
                high-quality products, innovation and strong partnerships in both automotive and
                industrial lubricant segments. Our wide spectrum of high-performance lubricants,
                spanning automotive and engine oils, gear and marine solutions and hydraulic
                formulations, keeps machines moving, engines running and industries thriving.
            </p>
            <div className="my-12 h-75 md:h-125 bg-blue-900 overflow-hidden p-10">
                <img
                    src="/diversified-business.png"
                    className="w-full h-full object-contain opacity-80"
                    alt="diversified"
                />
            </div>
            <div className="my-12 h-75 md:h-125 overflow-hidden p-10">
                <img
                    src="/about-img.webp"
                    className="w-full h-full object-contain opacity-80"
                    alt="about"
                />
            </div>
            <h3 className=" text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-black text-orange-500 leading-[1.1] tracking-tight ">
                Global Partnerships
            </h3>
            <p className="text-justify">
                With a rich legacy in motorsports and a history of collaborations with numerous
                renowned brands, the company has cultivated an iconic and effortlessly cool image.
                Today, it partners with Atlassian William Racing in Formula 1 and Trackhouse Racing
                in MotoGP. It also owns and partners with leading names such as Reviva Coffee,
                ROFOGO, TAG Heuer, strengthening its presence in both performance and style.
            </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 w-full place-items-center">
                <img src="/Williams.webp" alt="William" />
                <img src="/Mclaren.webp" alt="Mclaren" />
                <img src="/Rofgo.webp" alt="" />
                <img src="/Everrati.webp" alt="Everrati" />
                <img src="/TagHeuer.webp" alt="" />
                <img src="/Trackhouse.webp" alt="" />
            </div>
        </div>
    )
}

export default GulfOilInternational
