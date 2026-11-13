import React from 'react'
import facebookImg from '../assets/facebook.png'
import twitterImg from '../assets/twitter.png'
import instaImg from '../assets/insta.png'
import colibriImg from '../assets/colibri.png'


const Header = () => {
    return (
        <div>
            <header className="navbar text-white bg-black  px-10 py-5">
                <div className="flex-1">
                    <a href="#" className="text-xl font-bold tracking-wider">Themebau</a>
                </div>

                <div className="flex-none">
                    <nav>
                        <ul className="menu menu-horizontal px-1 space-x-6 text-sm">
                            <li><a href="#">home</a></li>
                            <li><a href="#projects">projects</a></li>
                            <li><a href="#pages">pages</a></li>
                            <li><a href="#contact">contact</a></li>

                            <li>
                                <a href="#">
                                    <img src={facebookImg} alt="facebookImg" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={twitterImg} alt="twitterImg" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={instaImg} alt="instaImg" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className="w-full flex items-center justify-center p-[20px] bg-black">
                <div className="relative w-full max-w-[1200px] h-[550px] bg-zinc-800 flex items-center p-[60px] rounded overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src={colibriImg}
                            alt="Colibri"
                            className="w-full h-full object-cover opacity-90"
                        />
                    </div>
                    <div className="relative z-10 text-white">
                        <div className="w-[40px] h-[1px] bg-white mb-[20px]"></div>
                        <h1 className="text-[65px] font-light leading-[75px] mb-[20px]">
                            Colibri Creative <br /> Project
                        </h1>
                        <p className="text-[24px] font-mono mt-[40px] opacity-70">
                            01 — 03
                        </p>
                    </div>
                    <div className="absolute bottom-[0px] right-[60px] z-10">
                        <button className="w-[90px] h-[90px] bg-white text-black font-medium text-[14px] uppercase rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                            view
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
