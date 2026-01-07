import { ChevronRight, MapPin, MapPinned, Satellite } from 'lucide-react'
const Rd = () => {
    return (
        <div className="bg-gray-900  overflow-x-hidden max-w-screen">
            <div className="max-w-7xl mx-auto py-15 px-7 2xl:px-0 space-y-15 bg-gray-900">
                <div>
                    <h1 className="text-orange-500 text-sm tracking-wide font-semibold uppercase mb-3">
                        Manufacturing and R&D Prowess
                    </h1>
                    <h2 className="text-blue-300 font-bold text-2xl sm:text-3xl md:text-4xl">
                        Strengthening Manufacturing Capabilities
                    </h2>
                    <p className="mt-5 text-justify text-sm sm:text-lg md:text-xl text-gray-400">
                        We operate two advanced lubricant manufacturing facilities in Chennai and
                        Silvassa, with a combined capacity of 140,000 KL per annum. Our Global R&D
                        Centre located in Chennai plant is the largest in Gulf’s global network and
                        it serves as a hub for formulation, testing and customisation of
                        high-performance lubricants, developed in close collaboration with leading
                        OEMs. Both facilities incorporate eco-conscious features such as solar
                        power, greywater recycling, rainwater harvesting, natural lighting and
                        finished goods warehouse with fully Automated Storage and Retrieval System
                        (ASRS). Certified as Green Buildings by IGBC, they reflect our commitment to
                        sustainable and efficient manufacturing.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row  justify-between items-center ">
                    <div className="w-full md:w-1/2  flex flex-col gap-3">
                        <h4 className="font-bold text-2xl text-blue-400">
                            Technology and Infrastructure
                        </h4>
                        <ul>
                            <li className="flex gap-2 items-start text-gray-300">
                                <ChevronRight width={16} className="text-orange-500" />
                                Integrated high-speed, end-to-end automatic filling line
                            </li>
                            <li className="flex gap-2 items-start text-gray-300">
                                <ChevronRight width={16} className="text-orange-500" />
                                PLC-enabled Automatic Blending Operation
                            </li>
                            <li className="flex gap-2 items-start text-gray-300">
                                <ChevronRight width={16} className="text-orange-500" />
                                NABL accredited QC lab with Standard ISO/IEC 17025:2017
                            </li>
                        </ul>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-7 mt-5">
                            <div className="flex justify-between flex-col gap-2 bg-gray-800 rounded-xl px-6 py-3">
                                <p className="text-rose-400 text-4xl font-bold">
                                    90,000<span className="text-green-400 text-xl"> KL/year</span>
                                </p>
                                <span className="text-white/60 text-sm uppercase ">Lubricants</span>
                            </div>
                            <div className="flex justify-between gap-2 flex-col bg-gray-800 rounded-xl px-6 py-3">
                                <p className="text-orange-500 text-4xl font-bold">
                                    36,000<span className="text-green-400 text-xl"> KL/year</span>
                                </p>
                                <span className="text-white/60 text-sm uppercase ">AdBlue®</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2  flex flex-col gap-3 mt-10 sm:mt-0">
                        <h4 className="font-bold text-2xl text-blue-400">
                            Silvassa Plant (West India)
                        </h4>
                        <img
                            src="/Silvassa.png"
                            alt=""
                            className="rounded-xl mt-3 h-90 object-cover w-full"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-9 justify-between items-center ">
                    <div className="w-full md:w-1/2  flex flex-col gap-3">
                        <h4 className="font-bold text-2xl text-blue-400">
                            Chennai Plant (South India)
                        </h4>
                        <img src="/Chennai.png" alt="" className="rounded-xl mt-3 " />
                    </div>
                    <div className="w-full md:w-1/2  flex flex-col gap-3">
                        <h4 className="font-bold text-2xl text-blue-400">
                            Technology and Infrastructure
                        </h4>
                        <ul>
                            <li className="flex gap-2 items-start text-gray-300">
                                <ChevronRight width={16} className="text-orange-500" />
                                New global R&D Centre - Gulf's biggest facility globally
                            </li>
                            <li className="flex gap-2 items-start text-gray-300">
                                <ChevronRight width={16} className="text-orange-500" />
                                Customer Experience Centre - the first of its kind in India
                            </li>
                            <li className="flex gap-2 items-start text-gray-300">
                                <ChevronRight width={40} className="text-orange-500" />
                                State-of-the-art blending technology from ABB France Simultaneous
                                Metered Blending (SMB), Automated Batch Blender (ABB), completely
                                piggable manifold, Drum Decanting Unit (DDU) all integrated by
                                Lubcel™ Manufacturing Execution System
                            </li>
                        </ul>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-7 mt-5">
                            <div className="flex justify-between flex-col gap-2 bg-gray-800 rounded-xl px-6 py-3">
                                <p className="text-rose-400 text-4xl font-bold">
                                    50,000<span className="text-green-400 text-xl"> KL/year</span>
                                </p>
                                <span className="text-white/60 text-sm uppercase ">Lubricants</span>
                            </div>
                            <div className="flex justify-between gap-2 flex-col bg-gray-800 rounded-xl px-6 py-3">
                                <p className="text-orange-500 text-4xl font-bold">
                                    39,000<span className="text-green-400 text-xl"> KL/year</span>
                                </p>
                                <span className="text-white/60 text-sm uppercase ">AdBlue®</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-9 justify-between items-center ">
                    <div className="w-full md:w-1/2  flex flex-col gap-3">
                        <div className='mb-4'>
                            <h4 className="font-bold text-2xl text-blue-400">
                                Capabilities across Both Plants
                            </h4>
                            <ul>
                                <li className="flex text-gray-300 gap-2 items-start">
                                    <ChevronRight width={16} className="text-orange-500" />
                                    Advance and fully equipped Quality Control laboratory
                                </li>
                                <li className="flex text-gray-300  gap-2 items-start">
                                    <ChevronRight width={16} className="text-orange-500" />
                                    Finished goods warehouse with fully Automated Storage and
                                    Retrieval System (ASRS)
                                </li>
                                <li className="flex text-gray-300  gap-2 items-start">
                                    <ChevronRight width={16} className="text-orange-500" />
                                    Installed and commissioned rooftop solar panels and rainwater
                                    harvesting
                                </li>
                                <li className="flex text-gray-300   gap-2 items-start">
                                    <ChevronRight width={16} className="text-orange-500" />
                                    Approved by several Indian and global OEMs
                                </li>
                                <li className="flex text-gray-300 gap-2 items-start">
                                    <ChevronRight width={16} className="text-orange-500" />
                                    Robust Safety & Disaster Management Systems and supports
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-2xl text-blue-400">
                                Certifications and Licenses
                            </h4>
                            <ul>
                                <li className="flex gap-2 items-center text-gray-300">
                                    <ChevronRight width={16} className="text-orange-500" />
                                    VDA license by QMC Germany for AdBlue®
                                </li>
                                <li className="flex gap-2 items-center text-gray-300">
                                    <ChevronRight width={16} className="text-orange-500" />
                                    BIS Certification marks license as per IS17042:Part I:2020
                                </li>
                                <li className="flex gap-2 items-center text-gray-300">
                                    <ChevronRight width={16} className="text-orange-500" />
                                    ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, IATF 16949:2016
                                </li>
                                <li className="flex gap-2 items-center text-gray-300">
                                    <ChevronRight width={16} className="text-orange-500" />
                                    Silvassa plant certified Platinum recently while Chennai plant
                                    certified Gold by Indian Green Building Council (IGBC)
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col gap-3">
                        <img src="/global.png" alt="" className="h-90 object-contain" />
                    </div>
                </div>

                <div className="flex flex-col gap-4 md:gap-9 justify-between items-center ">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-9 justify-between items-center ">
                        <div className="w-full md:w-1/2  flex flex-col gap-3">
                            <h4 className="font-bold text-2xl text-blue-400">
                                Our Largest Global R&D Facility – Chennai, India
                            </h4>
                            <img
                                src="/doctor.png"
                                alt=""
                                className="rounded-xl mt-3 h-90 object-cover "
                            />
                        </div>
                        <div className="w-full md:w-1/2  flex flex-col gap-3">
                            <h4 className="font-bold text-2xl text-blue-400 flex items-center gap-2 mt-3 sm:mt-0">
                                <MapPinned className="text-green-500" /> Gulf Plant
                            </h4>
                            <ul className="flex flex-col justify-start gap-2">
                                <li className="px-4 py-1 rounded bg-gray-700 text-gray-300">
                                    Chennai
                                </li>
                                <li className="px-4 py-1 rounded bg-gray-700 text-gray-300">
                                    Tamil Nadu
                                </li>
                                <li className="px-4 py-1 rounded bg-gray-700 text-gray-300">
                                    Silvassa
                                </li>
                                <li className="px-4 py-1 rounded bg-gray-700 text-gray-300">
                                    Dadra & Nagar Haveli
                                </li>
                            </ul>
                            <div className="flex gap-4 lg:gap-7 mt-5 flex-col lg:flex-row">
                                <div className="flex justify-between flex-col gap-2 bg-gray-800 rounded-xl px-6 py-3">
                                    <p className="text-orange-500 text-2xl md:text-3xl font-bold">
                                        1,40,000 KL
                                    </p>
                                    <p className="text-white/60 text-sm border-t-2 border-gray-400/20 py-3 ">
                                        Total lubricants capacity of our two plants (per annum) - on
                                        2 shift basis
                                    </p>
                                </div>
                                <div className="flex justify-between gap-2 flex-col bg-gray-800 rounded-xl px-6 py-3">
                                    <p className="text-orange-500 text-2xl md:text-3xl font-bold">
                                        ~2,79,000 KL
                                    </p>
                                    <span className="text-white/60 text-sm border-t-2 border-gray-400/20 py-3">
                                        Combined AdBlue® capacity of two in-house plants and 12
                                        external satellite Plants
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full ">
                        <h4 className="text-orange-500 flex gap-4 text-2xl sm:text-3xl font-bold items-center mb-3">
                            <Satellite height={60} className="" />
                            AdBlue® Satellite Plants
                        </h4>
                        <ul className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
                            <li className="text-green-500 flex items-center gap-2 px-4 py-3 bg-gray-700 rounded">
                                <MapPin />
                                Howrah, West Bengal
                            </li>
                            <li className="text-blue-500 flex items-center gap-2 px-4 py-3 bg-gray-700 rounded">
                                <MapPin />
                                Kolkata, West Bengal
                            </li>
                            <li className="text-orange-500 flex items-center gap-2 px-4 py-3 bg-gray-700 rounded">
                                <MapPin />
                                Guwahati, Assam
                            </li>
                            <li className="text-rose-500 flex items-center gap-2 px-4 py-3 bg-gray-700 rounded">
                                <MapPin />
                                Varanasi, Uttar Pradesh
                            </li>
                            <li className="text-white flex items-center gap-2 px-4 py-3 bg-gray-700 rounded">
                                <MapPin />
                                Alwar, Rajasthan
                            </li>
                            <li className="text-green-500 flex items-center gap-2 px-4 py-3 bg-gray-700 rounded">
                                <MapPin />
                                Kanpur, Uttar Pradesh
                            </li>
                            <li className="text-green-500 flex items-center gap-2 px-4 py-3 bg-gray-700 rounded">
                                <MapPin />
                                Hosur, Tamil Nadu
                            </li>
                            <li className="text-green-500 flex items-center gap-2 px-4 py-3 bg-gray-700 rounded">
                                <MapPin />
                                Kondapur, Hyderabad,
                            </li>
                            <li className="text-green-500 flex items-center gap-2 px-4 py-3 bg-gray-700 rounded">
                                <MapPin />
                                Telangana
                            </li>
                            <li className="text-green-500 flex items-center gap-2 px-4 py-3 bg-gray-700 rounded">
                                <MapPin />
                                Patancheru, Hyderabad,
                            </li>
                            <li className="text-green-500 flex items-center gap-2 px-4 py-3 bg-gray-700 rounded">
                                <MapPin />
                                Telangana
                            </li>
                            <li className="text-green-500 flex items-center gap-2 px-4 py-3 bg-gray-700 rounded">
                                <MapPin />
                                Patalganga, Maharashtra
                            </li>
                            <li className="text-green-500 flex items-center gap-2 px-4 py-3 bg-gray-700 rounded">
                                <MapPin />
                                Raipur, Chhattisgarh
                            </li>
                            <li className="text-green-500 flex items-center gap-2 px-4 py-3 bg-gray-700 rounded">
                                <MapPin />
                                Indore, Madhya Pradesh
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col w-full gap-4 md:gap-9 justify-between items-center ">
                    <h4 className="text-orange-500 flex w-full gap-4 text-3xl font-bold items-center">
                        Accelerating Growth Engines
                    </h4>
                    <p className=" text-justify  text-sm sm:text-lg md:text-xl text-gray-400">
                        We are undertaking a phased capacity expansion at our Chennai and Silvassa
                        facilities over the next two years to enhance scalability, meet rising
                        demand and support long-term growth. This initiative, aligned with our
                        strategic vision, will strengthen market presence and create the capability
                        to achieve 2–3x industry volume growth, while maintaining a strong focus on
                        operational excellence and efficiency
                    </p>
                    <div className="p-4 bg-[#EDF0F0] rounded-xl">
                        <img src="/capacity.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rd
