"use client"
import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from './ui/button';

const ProductCartForm = () => {

    const [qty, setQty] = useState<number>(1);
    const [variant, setvariant] = useState<string>("");
    const [qtyerror, setQtyError] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>("")

    const handleSize =  (size:string) =>  {
        setvariant(size);
        setErrorMessage("");
    }

    const handleqty = (digit: number) => {

        if(digit === -1) {
            if(qty === 1) return setQtyError("Qty Must be in Positive Number");
            setQty(qty+digit);
            return;
        } 
        setQtyError("");
        setQty(qty+digit);
    }

    const handleAddToCart = () => {
        if(!variant) {
            setErrorMessage("Please Select Size First");
             return;
            }
    }



    const  selectedsizeStyle = `py-1 px-3 border-2 border-black cursor-pointer`;

    
    const sizeStyle=`py-1 px-3 border-2 border-[#7D7D7D] hover:border-black cursor-pointer`

    return (
    <div className='w-full'>
        <div className='w-full flex items-center space-x-4'>
        <p>SIZE</p>
            <div className='flex items-center w-full space-x-4'>
                <div className={variant !== "XS" ?  sizeStyle : selectedsizeStyle} onClick={() => handleSize("XS")}>
                    XS
                </div>
                <div className={variant !== "S" ?  sizeStyle : selectedsizeStyle}  onClick={() => handleSize("S")}>
                    S
                </div>
                <div className={variant !== "M" ?  sizeStyle : selectedsizeStyle}  onClick={() => handleSize("M")}>
                    M
                </div>
                <div className={variant !== "L" ?  sizeStyle : selectedsizeStyle}  onClick={() => handleSize("L")}>
                    L
                </div>
                <div className={variant !== "XL" ?  sizeStyle : selectedsizeStyle}  onClick={() => handleSize("XL")}>
                    XL
                </div>
                <div className={variant !== "XXL" ?  sizeStyle : selectedsizeStyle} onClick={() => handleSize("XXL")}>
                    XXL
                </div>
            </div>
        </div>
        {variant && <p onClick={() => setvariant("")} className='text-black mt-4  underline hover:no-underline cursor-pointer'>Clear</p>}
        <div className=' text-white flex items-center mt-4 py-3 space-x-4 '>
            <div className='bg-white flex justify-start items-center border-2 border-black space-x-4 text-black p-2'>
            <Minus color='black' size={14} onClick={() => handleqty(-1)} className='cursor-pointer'/>
            <span className='text-base'>{qty}</span>
            <Plus color='black' size={14} onClick={() => handleqty(1)} className='cursor-pointer'/>
            </div>
            <Button size={"lg"} className={!variant ? "text-gray-600 cursor-not-allowed" : "text-white" } onClick={handleAddToCart}>ADD TO CART</Button>
        </div>
        <p className='text-sm text-red-600'>{qtyerror && (qtyerror)}</p>
        <p className='text-sm text-red-600'>{errorMessage && (errorMessage)}</p>
    </div>
  )
}

export default ProductCartForm