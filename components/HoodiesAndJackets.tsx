import Image from 'next/image'
import React from 'react'

const HoodiesAndJackets = () => {
  return (
    <section className='w-full grid grid-cols-2 gap-8'>
        <div>
            <Image src={"/hoodies.jpg"} width={500} height={1000} className='h-auto w-full' alt='Hoodies' />
            <div className='w-10 bg-[#C52424] ml-6 pl-20 pr-10 py-6 origin-center  rotate-90 rounded-sm mt-[-40px]'>
                <p className='origin-center  -rotate-90 text-center pr-6 text-white text-xl'>20%</p> 
            </div>
            <div className=' pl-12 mt-10'>
            <h1 className='text-4xl font-bold text-[#484F56]'>HOODIES</h1>
            <p className='text-lg text-[#484F56]'>STARTING AT $19</p>
            </div>
        </div>
        <div>
        <Image src={"/jacket.jpg"} width={500} height={1000} className='h-auto w-full' alt='Hoodies' />
            <div className='w-10 bg-[#C52424] ml-6 pl-20 pr-10 py-6 origin-center  rotate-90 rounded-sm mt-[-40px]'>
                <p className='origin-center  -rotate-90 text-center pr-6 text-white text-xl'>20%</p>                
            </div>
            <div className=' pl-12 mt-10'>
            <h1 className='text-4xl font-bold text-[#484F56]'>COATS & JACKETS</h1>
            <p className='text-lg text-[#484F56]'>STARTING AT $79</p>
            </div>
        </div>
    </section>
  )
}

export default HoodiesAndJackets