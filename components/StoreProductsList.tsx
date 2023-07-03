import React from 'react'
import ProductCard from './ProductCard'

const StoreProductsList = () => {
  return (
                
    <div className='w-full grid grid-cols-4 gap-8  px-20 pt-6 pb-20'>
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />

    </div>

  )
}

export default StoreProductsList