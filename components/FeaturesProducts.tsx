import React from 'react'
import ProductCard from './ProductCard'

const FeaturesProducts = () => {
    return (
        <section className='w-full mt-20'>                
        <h1 className='text-4xl font-bold text-[#484F56] text-center'>JUST IN</h1>
        <h1 className='text-center mt-6'><span className='text-xl font-semibold text-[#484F56] text-center border-b-[3px] border-[#7D7D7D]'>SHOP ALL</span></h1>
        <div className='w-full grid grid-cols-4 gap-8 mt-10'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

        </div>
        </section>
    )
}

export default FeaturesProducts