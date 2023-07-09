import React from 'react'

const ProductDetail = () => {
  return (
    <div className=' mt-16 w-full grid grid-cols-3 space-x-10'>
        <div>
            <h1 className='text-3xl text-black font-bold'>Description</h1>
            <p className='text-lg text-justify text-[#7D7D7D] mt-4'>Compellingly grow performance based mindshare through parallel potentialities. Rapidiously underwhelm top-line catalysts for change before best-of-breed materials. Competently brand timely catalysts for change through sustainable systems. Completely expedite ubiquitous bandwidth after integrated action items. Progressively transform leading-edge supply chains whereas flexible niche markets.</p>
        </div>
        <div>
            <h1 className='text-3xl text-black font-bold'>Information</h1>
            <p className='text-lg text-justify text-[#7D7D7D] mt-4'><strong className="text-black ">Shipping</strong><br/>
            We currently offer free shipping worldwide on all orders over $100.<br/>

            <strong className="text-black mt-3">Sizing</strong><br/>
            Fits true to size. Do you need size advice? <br/>

            <strong className="text-black mt-3">Return & exchange</strong><br/>
            If you are not satisfied with your purchase you can return it to us within 14 days for an exchange or refund. More info.<br/>

            <strong className="text-black mt-3">Assistance</strong><br/>
            Contact us on (+44) 555 88 65, or email us at support@reytheme.com.</p>
        </div>
        <div>
            <h1 className='text-3xl text-black font-bold'>Specifications</h1>
            <p className='text-lg text-justify text-[#7D7D7D] mt-4'>
            WEIGHT	1.20 kg
            DIMENSIONS	20 × 10 × 50 cm
            SIZE	
            XS, S, M, L, XL, XXL

            MATERIAL	
            Polyester

            COLOR	
            Greens

            BRAND	
            Cerveo

</p>
        </div>
    </div>
  )
}

export default ProductDetail