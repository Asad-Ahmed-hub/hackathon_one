import Image from 'next/image'
import React from 'react'

const ProductCard = () => {
    return (
        <div className='group hover:cursor-pointer'>
            <Image src={"/tshirt-2.jpg"} width={300} height={600} className='h-auto w-full' alt='Hoodies' />
            <div className=''>
            <p className='mt-4 text-sm text-[#484F56]'>STARTING AT $19</p>
            <h1 className='mt-2 text-xl text-black'>Printed sweatshirt with hood</h1>
            <p className='mt-2 text-lg text-[#484F56] transition-all group-hover:hidden '>$24.00</p>
            <p className='mt-2 hidden group-hover:block transition-all text-[#7D7D7D] text-lg '>
             <span className='group-hover:border-b-2 group-hover:border-[#7D7D7D] font-semibold'>ADD TO CART</span>
            
             <span className='group-hover:border-b-2 group-hover:border-[#7D7D7D] font-semibold ml-4'>QUICKVIEW</span>
            </p>
            </div>
        </div>
    )
}

export default ProductCard