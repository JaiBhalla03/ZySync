import Image from 'next/image'
import React, { useState } from 'react'
import userImage from '../../public/images/Ellipse 1.png';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Logo from './utils/Logo';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div>
            <nav className='flex w-full items-center justify-between border-[#444444] border-b py-1 px-2'>
                <div>
                    <Logo />
                </div>
                <Sheet key={'left'}>
                    <SheetTrigger>
                        <Image src={userImage} alt='' />
                    </SheetTrigger>
                    <SheetContent side={'left'} className='bg-[#131313] text-white border-none py-2 px-0 font-poppins flex flex-col justify-between'>
                        <div>
                            <div className='flex w-full justify-between items-center border-[#444444] border-b pb-2 pr-10 pl-2'>
                                <Logo />
                                <div className='text-sm md:text-lg'>Welcome, <i className='not-italic font-bold'>Rajiv Bhalla</i></div>
                            </div>
                            <div>
                                <ul>
                                    {[
                                        { title: 'Employee Management', options: ['Add New Employee', 'Edit Employee Details', 'Remove Employee', 'Search Employee'] },
                                        { title: 'Employee Tracking', options: ['View Schedules', 'Analyze Performance', 'Track Doctor Visits', 'Monitor Consistency'] },
                                        { title: 'Doctor Management', options: ['View Doctors', 'Search Doctors', 'Assign Employees', 'Doctors Visit Logs'] },
                                        { title: 'Sales & Regional Performance', options: ['Track Sales By Region'] },
                                        { title: 'System & Security', options: ['Reset Passwords', 'Change Admin Credentials'] }
                                    ].map((section) => (
                                        <li key={section.title} className='border-b border-[#444444]'>
                                            <button
                                                onClick={() => toggleSection(section.title)}
                                                className='hover:bg-[#202020] transition-all duration-300 py-4 w-full text-center'
                                            >
                                                {section.title}
                                            </button>
                                            {openSection === section.title && (
                                                <ul className="bg-[#1a1a1a]">
                                                    {section.options.map((option) => (
                                                        <li key={option} className='py-2 px-6 hover:bg-[#2a2a2a] transition-all duration-300'>
                                                            {option}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
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
