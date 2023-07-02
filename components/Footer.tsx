import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { About, Categories, Help } from '@/app/data';


const Footer = () => {
    return (
        <section className='w-full bg-[#121212] py-14 px-10'>
            <div className='w-full grid grid-cols-5 gap-8 justify-center items-start '>
                <div>
                    <Image src={"/logo-white.svg"} alt="rey logo" className='grayscale w-full h-10 aspect-auto' width={200} height={20} />
                    <p className='text-right mt-6 text-[#7D7D7D]'>
                        17 Irving Pl, New York,
                        NY 10003
                    </p>
                    <div className='grid grid-cols-3 w-32 mt-4 ml-12 '>
                        <Facebook className='text-white fill-white' />
                        <Twitter className='text-white fill-white' />
                        <Instagram className='text-white ' />
                    </div>
                </div>
                <div>
                    <p className='text-left mt-16 text-[#7D7D7D]'>
                        <Link href="mailto:care@reytheme.com" title="e-mail" >
                            care@reytheme.com
                        </Link>

                    </p>
                    <p className='text-left mt-2 text-[#7D7D7D]'>
                        <Link href={"tel:778 568 999 "}>
                            778 568 999
                        </Link>
                    </p>
                </div>
                <div>
                    <h1 className='text-white font-bold text-2xl'>SHOP</h1>
                    <ul className="mt-4">
                        {Categories.map(item => <li key={item} className='text-left text-[#7D7D7D]'>{item}</li>)}
                    </ul>
                </div>
                <div>
                    <h1 className='text-white font-bold text-2xl'>HELP</h1>
                    <ul className="mt-4">
                        {Help.map(item => <li key={item} className='text-left text-[#7D7D7D]'>{item}</li>)}
                    </ul>
                </div>
                <div>
                    <h1 className='text-white font-bold text-2xl'>ABOUT</h1>
                    <ul className="mt-4">
                        {About.map(item => <li key={item} className='text-left text-[#7D7D7D]'>{item}</li>)}
                    </ul>
                </div>

            </div>
            <div className='mt-16 mx-10 col-span-5 border border-gray-50/50 '>

            </div>
        </section>
    )
}

export default Footer