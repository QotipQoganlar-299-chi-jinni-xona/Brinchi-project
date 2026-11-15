import React from 'react'
import cet from '../assets/cet.png'
const Footer = () => {
  return (
    <div className='bg-[#000] text-[#fff] '>
        <div className='max-w-[100%] w-[85%] mx-auto py-[50px] flex justify-around '>
            <div>
                <p className='text-[40px] mb-[20px]'>Themebau.</p>
                <p className='w-[240px] mb-[0px]'>
                    Be saying moveth spirit fruitful 
                    called set evening fly give shall 
                    moveth lesser very.
                </p>
                <p className='mt-[50px]'>+44 207 112 82 85</p>
                <a href="">hello@themebau.com</a>
                <img className='mt-[90px]' src={cet} alt="" />
            </div>
            <div>
                <p className='text-[#6e6e6e] text-[10px]'>subscribe of newsletter</p>
                <input
                    type="email"
                    placeholder="Your Email *"
                    className=" mt-[10px] text-[#fff] border-b w-[570px] "
                />
                <div className='w-[526px] flex mt-[100px] gap-[30px]'>
                    <div className='w-[76px] flex flex-col gap-[10px]'>
                        <a className='hover:text-[#f00] ' href="">About us</a>
                        <a className='hover:text-[#f00] ' href="">Services</a>
                        <a className='hover:text-[#f00] ' href="">Our team</a>
                        <a className='hover:text-[#f00] ' href="">Careers</a>
                    </div>
                    <div className='w-[112px] flex flex-col gap-[10px]'>
                        <a className='hover:text-[#f00] ' href="">Work process</a>
                        <a className='hover:text-[#f00] ' href="">FAQ</a>
                        <a className='hover:text-[#f00] ' href="">Our blog</a>
                        <a className='hover:text-[#f00] ' href="">Contacts</a>
                    </div>
                    <div className='w-[126px] flex flex-col gap-[10px]'>
                        <a className='hover:text-[#f00] ' href="">Privacy</a>
                        <a className='hover:text-[#f00] ' href="">Terms of te use</a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer