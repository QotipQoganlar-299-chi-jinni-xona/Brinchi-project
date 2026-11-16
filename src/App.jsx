import React from 'react'

const App = () => {
  return (
    <div>


      <div>


        <div>
          <p className='text-[40px] text-center text-black font-bold'>
            What’s new? </p>
        </div>


        <div className='flex flex-wrap gap-20 justify-center'>


          <div className='ml-[100px]'>
            <img className='w-[250px] h-[550px] drop-shadow-2xl py-[100px]' src={logo} alt="Logo" />
            <p className='text-[20px] w-[250px] mt-[-100px] font-bold text-black'>Office explained in fewer than
              100+ Characters</p>
          </div>



          <div className='ml-[100px]'>
            <img className='w-[370px] h-[550px]  drop-shadow-2xl py-[100px]' src={img2} alt="Logo" />
            <p className='text-[20px] w-[250px] mt-[-100px] font-bold text-black'>This week's top Stories about
              Development</p>
          </div>


          <div className='ml-[100px]'>
            <img className='w-[250px] drop-shadow-2xl py-[100px]' src={logo} alt="Logo" />
            <p className='text-[20px] w-[250px] mt-[-100px] font-bold text-black'>Facts about Business that you
              never knew</p>
          </div>




        </div>


        <div className='flex justify-center py-[100px]'>
          <button className="group  flex h-[51px] w-[160px] items-center justify-center gap-[18px] border border-[#111] bg-[#111] text-[15px] text-white transition-all  hover:bg-white hover:text-[#111] active:scale-95">
            <span>all posts</span>

            <span className="text-[20px] transition-transform ">
              •
            </span>
          </button>

        </div>


      </div>




    </div>

  )
}

export default App