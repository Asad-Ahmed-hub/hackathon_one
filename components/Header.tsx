import React from 'react';
import { Search, ShoppingBag, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import NavLinks from './NavLinks';
import { Button } from "@/components/ui/button"


const Header = () => {
    return (
        <div className='w-full flex flex-row justify-around items-center py-8 px-20'>
            <div className='w-1/3 items-center justify-center'>
                <NavLinks />
            </div>
            <div className='w-1/3 flex-none items-center justify-center'>
                <Link href={"/"}>
                <Image src={"/logo.svg"} alt="rey logo" className='w-full h-10 aspect-auto' width={200} height={20} />
                </Link>
            </div>
            <div className='w-1/3 flex flex-row justify-end space-x-4 items-center'>
            <Search />
            <ShoppingBag />
            <User />
            <Button>
                <Link href="/store">
                OUTLET
                </Link>
            </Button>
            </div>
        </div>
    )
}

export default Header