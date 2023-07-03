import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='w-full py-10 px-20'>
            <h1 className='px-20 text-7xl text-black text-justify font-bold'>We are a design-led <br /> sportswear company <br /> rooted in current street <br /> culture.</h1>
            <div className='w-full px-20 py-10 flex justify-center items-start gap-12'>
                <div className='w-2/3'>
                    <Image src={"/about1.webp"} alt="about image 1" width={1000} height={800} className='w-auto h-full' />
                </div>
                <div className='w-1/3 mt-32'>
                    <Image src={"/about2.webp"} alt="about image 2" width={800} height={300} className='w-full h-auto' />
                </div>
            </div>
            <div className='w-full flex justify-center items-start px-20 gap-16  -mt-20'>
                <div className='w-[10%]'>
                    <Image src={"/reyseal.svg"} alt="rey seal" width={100} height={100} className='w-60 h-60 mx-auto' />
                </div>
                <div className='w-[90%] mt-20'>
                    <h1 className='text-black font-bold text-5xl'>Our Story</h1>
                    <p className='mt-4 text-2xl text-[#7D7D7D] text-justify'>
                        Appropriately develop high-quality interfaces vis-a-vis granular e-markets. Globally integrate <br /> accurate collaboration and idea-sharing after effective web services. Seamlessly streamline <br /> bleeding-edge paradigms for technically.
                    </p>
                    <p className='mt-4 text-2xl text-black text-justify font-bold'>
                        <span className='px-4'> <strong>EST. 2015</strong> </span>  <span className='px-4'><strong>5 DESIGNERS</strong> </span>   <span className='px-4'> <strong>WORLDWIDE DELIVERY </strong></span>
                    </p>
                    <p className='mt-4 text-2xl text-[#7D7D7D] text-justify'>
                        Appropriately develop high-quality interfaces vis-a-vis granular e-markets. Globally integrate <br /> accurate collaboration and idea-sharing after effective web services. Seamlessly streamline <br /> bleeding-edge paradigms for technically.
                    </p>
                </div>
            </div>
            <div className='w-full  mt-10 px-20 py-10 flex justify-center items-start gap-12'>
                <div className='w-1/2'>
                    <Image src={"/about3.webp"} alt="about image 1" width={500} height={500} className='w-full h-auto' />
                    
                </div>
                <div className='w-1/2 '>
                    <p className=' text-2xl text-[#7D7D7D] text-justify'>
                        Appropriately develop high-quality interfaces vis-a-vis granular e-markets. Globally  integrate accurate collaboration and idea-sharing after effective web services. Seamlessly  streamline bleeding-edge paradigms for technically sound ROI. 
                    </p>
                    <br />
                    <br />
                    <p className=' text-2xl text-[#7D7D7D] text-justify'>
                        Globally integrate accurate collaboration and idea-sharing after effective web <br />services. Seamlessly streamline bleeding-edge paradigms for technically sound ROI.
                    </p>

                    <Image src={"/signature.svg"} alt="about image 1" width={500} height={500} className='w-40 h-40' />
                </div>
            </div>
        </div>
    )
}

export default page