import Image from 'next/image'
import React from 'react'

const ProductCard = () => {
    return (
        <div>
            <Image src={"/tshirt-2.jpg"} width={300} height={600} className='h-auto w-full' alt='Hoodies' />
            <div className=''>
            <p className='mt-4 text-sm text-[#484F56]'>STARTING AT $19</p>
            <h1 className='mt-2 text-xl text-black'>Printed sweatshirt with hood</h1>
            <p className='mt-2 text-sm text-[#484F56]'>$24.00</p>
            </div>
        </div>
    )
}

export default ProductCard