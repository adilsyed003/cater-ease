import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <section className="py-24 relative">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                        <div
                            className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                                <img className=" rounded-xl object-cover" src="cater1.jpg" alt="about Us image" />
                            </div>
                            <img className="sm:ml-0 ml-auto rounded-xl object-cover" src="cater2.jpg"
                                alt="about Us image" />
                        </div>
                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2
                                        className="text-gray-900 text-6xl font-bold font-manrope leading-normal lg:text-start text-center">
                                        About Us</h2>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        Cater Ease is a premier catering service dedicated to delivering exceptional culinary experiences for all occasions
                                        .</p>
                                </div>
                                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">13+</h3>
                                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">Types of Menu's</h6>
                                    </div>
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">15+</h4>
                                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">Types of occasions</h6>
                                    </div>
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">12+</h4>
                                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">Menu Items</h6>
                                    </div>
                                </div>
                            </div>
                            <Link to="/about"
                                className="sm:w-fit w-full px-3.5 py-2 bg-black transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                <span className="px-1.5 text-white text-sm font-medium leading-6">About Us</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About