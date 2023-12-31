import { SlidersHorizontal } from 'lucide-react'
import React from 'react'

const StoreFilterBar = ({handleGrid}: {handleGrid: any }) => {

    return (
        <div className='w-full px-20 py-10'>
            <div className='w-full flex justify-center items-center gap-8'>
                <div className='w-2/3'>
                    <span>SHOWING 1–16 OF 35 RESULTS</span>
                </div>
                <div className='w-1/3   gap-4 justify-end items-center'>
                    <div className='w-full flex justify-end items-center gap-8'>
                    <div className='space-x-4'>
                        <span>
                            VIEW 
                        </span>
                        <span onClick={() => handleGrid(2)} className='cursor-pointer'>2</span>
                        <span onClick={() => handleGrid(3)} className='cursor-pointer'>3</span>
                        <span onClick={() => handleGrid(4)} className='cursor-pointer'>4</span>
                    </div>
                    <div className=''>
                        <select name="" id="" className='bg-white'>
                            <option value="Default Sorting">Default Sorting</option>
                            <option value="Default Sorting">Sort by Rating</option>
                            <option value="Default Sorting">Sort By Latest</option>
                            <option value="Default Sorting">Sort By High to Low Price</option>
                            <option value="Default Sorting">Sort By Low to High Price</option>
                        </select>
                    </div>
                    <div className='flex justify-center items-center space-x-2'>
                    <SlidersHorizontal />
                    <span>Filter</span>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default StoreFilterBar