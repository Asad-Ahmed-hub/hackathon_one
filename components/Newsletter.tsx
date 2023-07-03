import React from 'react'

const Newsletter = () => {
    return (
        <section className='w-100 justify-center items-center py-20'>
            <h1 className='text-4xl font-bold text-black text-center'>GET 10% OFF</h1>
            <p className='mt-8 text-[#7D7D7D] text-center text-lg'>Get 10% off your first purchase by joining our mailing list,<br />
                and receive some of the best deals possible.</p>
            <form className='w-100 mt-10 flex flex-row justify-center items-center border-2 border-[#7D7D7D]'>
                <input name='email address' type='email' placeholder='email address' className='flex-grow  focus:ring-1 ring-transparent py-2 px-4' />
                <button className='p-2 mx-2  font-medium text-black'>JOIN NOW</button>
            </form>
        </section>
    )
}

export default Newsletter