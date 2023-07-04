import { ContactForm } from '@/components/ContactForm'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <section className='w-full p-20'>
            <h1 className='text-5xl font-bold text-black pt-20'>Get in touch</h1>
            <div className='mt-10 border-b-[30px] border-[#F7F7F7]'></div>
            <div className='flex justify-center py-10 gap-8 '>
                <div className='w-[70%]'>
                    <h1 className='text-3xl font-bold'>Can We Help?</h1>
                    <p className='mt-4 text-lg text-[#7D7D7D] text-justify leading-loose'>Our team was handpicked for their understanding of materials, process and passion for fashion. Whether you are browsing our site or visiting our store, we are always willing to share our deep knowledge and understanding of our makers and their craft.
                    </p>
                    <p className='mt-4 text-lg text-[#7D7D7D] text-justify leading-loose'>
                        The most commonly asked questions are covered in Our FAQs. If you have any specific questions please do not hesitate to contact us by completing this form or calling our customer services team on 778 568 999.</p>
                    <div className='flex justify-center w-full gap-8 mt-14'>
                        <div className='w-1/3'>
                            <h1 className='text-3xl font-bold'>Customer Service</h1>
                            <p className='mt-4 text-lg text-[#7D7D7D] text-justify leading-loose'>Our Monday – Thursday 8 – 16
                                Friday 8 – 15 EST
                            </p>

                            <p className='mt-4 text-lg text-[#7D7D7D] text-justify leading-loose'>
                                Our Phone: <Link href={"tel:+923072884889"}>+923072884889</Link><br />
                                Email: <Link href={"mailto:asad.ahmed2813d@gmail.com"}>asad.ahmed2813d@gmail.com</Link>
                            </p>
                        </div>
                        <div className='w-1/3'>
                            <h1 className='text-3xl font-bold'>Press Contact</h1>
                            <p className='mt-4 text-lg text-[#7D7D7D] text-justify leading-loose'>Email: <Link href={"mailto:asad.ahmed2813d@gmail.com"}>asad.ahmed2813@gmail.com</Link>
                            </p>
                        </div>
                        <div className='w-1/3'>
                            <h1 className='text-3xl font-bold'>Press Contact</h1>
                            <p className='mt-4 text-lg text-[#7D7D7D] text-justify leading-loose'>17 Irving Pl, New York,
                                NY 10003
                            </p>

                        </div>
                    </div>
                </div>
                <div className='w-[30%]'>
                    <h1 className='text-3xl font-bold '>Contact Us</h1>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default page