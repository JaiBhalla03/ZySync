import Image from 'next/image'
import React from 'react'
import userImage from '../../public/images/Ellipse 1.png';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Logo from './utils/Logo';
  

export default function Dashboard() {
  return (
    <div>
        <nav className='flex w-full items-center justify-between border-[#444444] border-b p-2'>
            <div>
                <Logo/>
            </div>
            <Sheet key={'left'}>
                <SheetTrigger>
                    <Image src={userImage} alt=''/>
                </SheetTrigger>
                <SheetContent side={'left'} className='bg-[#151515] text-white border-none py-2 px-0 font-poppins'>
                    <div className='flex w-full justify-between items-center border-[#444444] border-b pb-2 pr-10 pl-2'>
                        <Logo/> 
                        <div className='font-bold text-xl'>Welcome, Rajiv Bhalla</div>
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    </div>
  )
}


