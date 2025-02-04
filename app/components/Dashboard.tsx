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
import { Button } from '@/components/ui/button';
  

export default function Dashboard() {
  return (
    <div>
        <nav className='flex w-full items-center justify-between border-[#444444] border-b py-1 px-2'>
            <div>
                <Logo/>
            </div>
            <Sheet key={'left'}>
                <SheetTrigger>
                    <Image src={userImage} alt=''/>
                </SheetTrigger>
                <SheetContent side={'left'} className='bg-[#131313] text-white border-none py-2 px-0 font-poppins flex flex-col justify-between'>
                    <div>
                        <div className='flex w-full justify-between items-center border-[#444444] border-b pb-2 pr-10 pl-2'>
                            <Logo/> 
                            <div className='text-sm md:text-lg'>Welcome, <i className='not-italic font-bold'>Rajiv Bhalla</i></div>
                        </div>
                        <div>
                            <ul>
                                <li className='hover:bg-[#202020] transition-all duration-300 py-4 border-b border-[#444444] flex items-center justify-center'>User Management</li>
                                <li className='hover:bg-[#202020] transition-all duration-300 py-4 border-b border-[#444444] flex items-center justify-center'>Employee Tracking</li>
                                <li className='hover:bg-[#202020] transition-all duration-300 py-4 border-b border-[#444444] flex items-center justify-center'>Regional Performance</li>
                                <li className='hover:bg-[#202020] transition-all duration-300 py-4 border-b border-[#444444] flex items-center justify-center'>System & Security</li>
                            </ul>
                        </div>
                    </div>
                    <Button variant="outline" className='mx-auto w-48 bg-[#151515]'>Log Out</Button>
                </SheetContent>
            </Sheet>
        </nav>
    </div>
  )
}


