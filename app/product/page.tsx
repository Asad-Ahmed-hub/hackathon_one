import ProductCartForm from '@/components/ProductCartForm'
import ProductDetail from '@/components/ProductDetail'
import RelatedProduct from '@/components/RelatedProduct'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='w-full p-20 '>
        <div className='w-full grid grid-cols-2 justify-center items-start space-x-16'>    
            <div>
               <Image src={"/product.jpg"} alt='product' width={400} height={800} className='w-full h-auto '/> 
            </div>
            <div>
              <p className='flex text-xs space-x-2 text-[#6D757E]'><span>MEN</span> <span><ChevronRight size={12} className='items-center'/></span> <span>CASUAL & URBAN WEAR</span></p>
              <h1 className='my-4 text-3xl text-black font-bold text-justify'>Vintage inspired oversized scream hoodie</h1>
              <p className='my-4 text-sm font-semibold text-black'>CERVEO</p>
              <p className='my-4 text-xl font-medium text-[#4A5158]'>£24.00</p>
              <p className='my-4 text-lg text-[#4A5158] text-justify'>Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.</p>
              <div className='flex  items-center my-4 space-x-4'>
                  <ProductCartForm />
              </div>
            </div>
        </div>

        <div className='w-full mt-16'>
        <ProductDetail />
        </div>
        <div className='w-full mt-16'>
              <h1 className='text-lg text-black font-semibold'>RELATED PRODUCTS</h1>
              <RelatedProduct />
        </div>
    </div>
  )
}

export default page