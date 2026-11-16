import React from 'react'
import image from "../assets/image.jpg";
import kofe from "../assets/kofe.png"
import techno from "../assets/techno.jpg"
import bolt from "../assets/bolt.png"
import plastik from "../assets/plastik.jpg"
import ilge from "../assets/ilge.png"
import vektr from "../assets/vektr.png"
import read from "../assets/read.jpg"
import book from "../assets/book.png"

const Section = () => {
    return (
        <div>
            <section>
                <div className='max-w-[100%] w-[85%] m-auto flex gap-[30px] py-[30px]'>
                    <div className="w-[304px] h-[400px] bg-cover bg-center flex flex-col flex-wrap items-center justify-center gap-[25px]" style={{ backgroundImage: `url(${image})` }}>



                        <img className='mt-[100px] mr-[180px]' src={kofe} alt="" />
                        <h2 className='text-white w-[210px] font-bold text-[20px]'>Web Design and Developmeent</h2>
                    </div>
                    <div className="w-[304px] h-[400px] bg-cover bg-center flex flex-col flex-wrap items-center justify-center gap-[25px]" style={{ backgroundImage: `url(${techno})` }}>



                        <img className='mt-[100px] mr-[180px]' src={bolt} alt="" />
                        <h2 className='text-white w-[210px] font-bold text-[20px]'>Brand Strategy Accelerator</h2>
                    </div>
                    <div className="w-[304px] h-[400px] bg-cover bg-center flex flex-col flex-wrap items-center justify-center gap-[25px]" style={{ backgroundImage: `url(${plastik})` }}>



                        <img className='mt-[100px] mr-[180px]' src={ilge} alt="" />
                        <h2 className='text-white w-[210px] font-bold text-[20px]'>Packaging and Brand Identity</h2>
                        <h2 className='text-white w-[210px] font-bold text-[20px] flex gap-[10px] items-center'>read more <img src={vektr} alt="" /></h2>
                    </div>
                    <div className="w-[304px] h-[400px] bg-cover bg-center flex flex-col flex-wrap items-center justify-center gap-[25px]" style={{ backgroundImage: `url(${read})` }}>



                        <img className='mt-[100px] mr-[180px]' src={book} alt="" />
                        <h2 className='text-white w-[210px] font-bold text-[20px]'>Content Production</h2>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section