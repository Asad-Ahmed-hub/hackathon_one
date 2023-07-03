import { Categories } from '@/app/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StoreTitle = () => {
    return (
        <div className='bg-[#f5f5fa] py-10 px-20'>
            <div className='grid grid-cols-4'>
                <div className='col-span-2'>
                    <h1 className='text-4xl font-bold '>STORE</h1>
                    <ul className='mt-10 text-lg text-[#7D7D7D] grid grid-cols-4 leading-loose	'>
                        {Categories.map(item =>
                            <Link key={item.id} href={item.link}>
                                <li >{item.name}</li>
                            </Link>)}
                    </ul>
                </div>
                <div></div>
                <div>
                    <Image src={"/storewave.svg"} width={200} height={200} className='w-auto h-60' alt="Store Wave" />
                </div>
            </div>
        </div>
    )
}

export default StoreTitle