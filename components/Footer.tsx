import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Facebook, Instagram, Mail, Phone, Twitter } from 'lucide-react';
import { About, Categories, Help } from '@/app/data';


const Footer = () => {
    return (
        <section className='w-full bg-[#121212] py-14 px-10'>
            <div className='w-full grid grid-cols-5 gap-8 justify-start items-start '>
                <div>
                    <Image src={"/logo-white.svg"} alt="rey logo" className='grayscale w-full ml-auto left-0 h-10 aspect-auto' width={200} height={20} />
                    <p className='text-left mt-6 text-[#7D7D7D] '>
                        17 Irving Pl, New York,
                        NY 10003
                    </p>
                    <div className='grid grid-cols-3 w-32 mt-4  '>
                        <Facebook className='text-white cursor-pointer' />
                        <Twitter className='text-white cursor-pointer' />
                        <Instagram className='text-white cursor-pointer' />
                    </div>
                </div>

                <div>
                    <h1 className='text-white font-bold text-2xl'>SHOP</h1>
                    <ul className="mt-4">
                        {Categories.map(item => <li key={item} className='text-left text-[#7D7D7D] hover:text-white cursor-pointer'>{item}</li>)}
                    </ul>
                </div>
                <div>
                    <h1 className='text-white font-bold text-2xl'>HELP</h1>
                    <ul className="mt-4">
                        {Help.map(item => <li key={item} className='text-left text-[#7D7D7D] hover:text-white cursor-pointer'>{item}</li>)}
                    </ul>
                </div>
                <div>
                    <h1 className='text-white font-bold text-2xl'>ABOUT</h1>
                    <ul className="mt-4">
                        {About.map(item => <li key={item} className='text-left text-[#7D7D7D] hover:text-white cursor-pointer'>{item}</li>)}
                    </ul>
                </div>
                <div>
                    <h1 className='text-white font-bold text-2xl'>CONTACT US</h1>
                    <p className='flex gap-2 text-left mt-4 text-[#7D7D7D] hover:text-white cursor-pointer'>
                        <Mail className='text-white ' />
                        <Link href="mailto:asad.ahmed2813@gmail.com" title="e-mail" >
                            asad.ahmed2813@gmail.com
                        </Link>

                    </p>
                    <p className=' flex gap-2 text-left mt-4 text-[#7D7D7D] hover:text-white cursor-pointer'>
                        <Phone  className=' text-white'/>

                        <Link href={"tel:778 568 999 "}>
                            +923072884889
                        </Link>
                    </p>
                </div>
            </div>
            <div className='w-full mt-16  border border-black/5 '>
                <p className='text-white text-center'>Designed By <Link href={"https://asad-ahmed.vercel.app/"} target='_blank' title="Asad Ahmed"> <strong >Asad Ahmed</strong></Link></p>
            </div>
        </section>
    )
}

export default Footer