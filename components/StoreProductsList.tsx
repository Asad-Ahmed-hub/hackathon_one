import React from 'react'
import ProductCard from './ProductCard'

const StoreProductsList = ({grid}:{grid:number}) => {
  
    const style = `w-full grid grid-cols-${grid} gap-8  px-20 pt-6 pb-20` 
  
  return (
                
    <div className={style}>
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