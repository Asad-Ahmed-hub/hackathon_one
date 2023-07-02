import React from 'react'
import ProductCard from './ProductCard'

const FeaturesProducts = () => {
    return (
        <section className='w-full mt-20'>                
        <h1 className='text-4xl font-bold text-[#484F56] text-center'>JUST IN</h1>
        <div className='w-full grid grid-cols-4 gap-8'>
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