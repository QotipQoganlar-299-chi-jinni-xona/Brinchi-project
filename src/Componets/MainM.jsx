import React from 'react'
import img from "../assets/bg.png"
import img2 from "../assets/“ icon.png"
const MainM = () => {
    return (
        <div className='bg-black w-full h-[591px]'>
            <div className='max-w-full w-[85%] mx-auto'>
                <div className='flex justify-center pt-[90px] items-center '>
                    <img className='flex ' src={img2} alt="" />

                </div>
                <div className='flex flex-col items-center pt-[90px] justify-center'>

                    <p className='  text-white text-[30px]'> “ There from stars gathering gathered, upon tree brought </p>
                    <p className='  text-white text-[30px]'>life fruitful shall that together without there form </p>
                    <p className='  text-white text-[30px]'>You make, morning he from unto.  ”</p>

                </div>
                <div className='flex flex-col items-center  pt-[20px]'>
                    <p className='text-[#969696]'>Brian Newton, Unvab Inc.</p>
                </div>

                <div className='flex flex-col items-center  pt-[40px]'>
                    <p className='text-white text-[20px]'>01 - 03</p>
                </div>

            </div>
        </div>
    )
}

export default MainM