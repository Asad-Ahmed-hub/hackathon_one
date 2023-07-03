import { ArrowRight } from 'lucide-react'
import React from 'react'

const StorePagination = () => {
    return (
        <div className='w-full px-20 py-10 flex justify-center items-center'>
            <div className='w-auto h-auto flex justify-center items-center gap-4'>
                <p className='border-2  px-3 py-2'>1</p>
                <p className='px-3 py-2'>2</p>
                <p className='px-3 py-2'>3</p>
                <ArrowRight className='ml-8' />
            </div>
        </div>
    )
}

export default StorePagination