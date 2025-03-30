import React from 'react'

const Landing = () => {
    return (
        <div>
            <div className=' text-gray-900 flex justify-center items-center flex-row h-130 gap-2 p-8'>
                <div className="w-1/2 text-center">
                    <p className="text-7xl font-bold">Effortless Catering, Memorable Moments</p>
                    <button className='text-amber-50 rounded-full bg-black p-4 m-10 w-30'>book →</button>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <img
                        src="plate.png"
                        alt="plate"
                        className="transition-transform duration-300 ease-in-out hover:scale-110"
                        style={{ height: "500px", width: "500px" }}
                    />
                </div>

            </div>
        </div>
    )
}

export default Landing