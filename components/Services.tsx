import { Categories, Help } from '@/app/data'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <section className='w-full  py-14 '>
            <div className='w-full grid grid-cols-3 gap-8  '>
                <div className='w-full flex flex-row gap-8 justify-start items-center p-20 bg-[#FAFAFA]'>
                    <div className='w-[30%] justify-center items-center'>
                        <Image src={"/gift_card.svg"} alt="gift card" className='grayscale h-auto w-full' width={150} height={150} />
                    </div>
                    <div className=' w-[70%] mt-4'>
                        <h1 className='text-black font-semibold text-3xl'>GIFT CARD</h1>
                        <p className='mt-4 text-justify text-[#7D7D7D]'>{`Don’t know their size or favorite color? No need to worry – give them a Gift card and let them decide.`}</p>
                        <p className='mt-4'><span className='cursor-pointer text-xl border-b-4 border-black text-black'>GET A GIFT CARD</span></p>
                    </div>
                </div>
                <div className='w-full flex flex-row gap-8 justify-start items-center p-20'>
                    <div className=' w-full mt-4'>
                        <Image src={"/returns.svg"} alt="gift card" className='grayscale h-20 w-20' width={150} height={150} />
                        <h1 className='mt-4 text-black font-semibold text-3xl'>14 DAYS RETURNS</h1>
                        <p className='mt-4 text-justify text-[#7D7D7D]'>You have 14 days to change your mind and
                            return the item.</p>
                        <p className='mt-4 text-[#7D7D7D] text-justify'>No questions asked!</p>
                    </div>
                </div>
                <div className='w-full flex flex-row gap-8 justify-start items-center p-20'>
                    <div className=' w-full mt-4'>
                        <Image src={"/delivery.svg"} alt="gift card" className='grayscale h-20 w-20' width={150} height={150} />
                        <h1 className='mt-4 text-black font-semibold text-3xl'>FREE DELIVERY</h1>
                        <p className='mt-4 text-justify text-[#7D7D7D]'>If you purchase over 100$, shipping is on us. Receive your order within 1 to 2 working days.</p>
                        <p className='mt-4 text-[#7D7D7D] text-justify'>Yes, we ship to Pakistan!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services