'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import userImage from '../../public/images/Ellipse 1.png';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Logo from './utils/Logo';
import { Button } from '@/components/ui/button';

// Simulate user role (Change this dynamically based on authentication)
const userRole:String = "employee"; // Change to "admin" for admin dashboard

type Section = {
    title: string;
    options?: string[]; // Optional property
};


export default function Dashboard() {
    const [openSection, setOpenSection] = useState<string | null>(null);
    const router = useRouter();

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    const adminSections: Section[] = [
        { title: 'Employee Management'},
        { title: 'Employee Tracking', options: ['View Schedules', 'Analyze Performance', 'Track Doctor Visits'] },
        { title: 'Doctor Management'},
        { title: 'Sales Performance'},
        { title: 'Approve Leave'}, // No options, should go directly
        { title: 'System & Security', options: ['Reset Passwords', 'Change Admin Credentials'] }
    ];

    const employeeSections: Section[] = [
        { title: 'Update Profile'},
        { title: 'Add Doctors' },
        { title: 'Plan Schedule' },
        { title: 'Check Leaderboard' },
        { title: 'Apply For Leave'}
    ];

    const handleNavigation = (path: string) => {
        const route = path.toLowerCase().replace(/\s+/g, '-'); // Convert to URL-friendly format
        router.push(`/${route}`);
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
                                    {(userRole === "admin" ? adminSections : employeeSections).map((section) => (
                                        <li key={section.title} className='border-b border-[#444444]'>
                                            {/* If no options, navigate directly */}
                                            <button
                                                onClick={() => section.options ? toggleSection(section.title) : handleNavigation(section.title)}
                                                className={`transition-all duration-300 py-4 w-full text-center text-sm ${openSection === section.title ? 'bg-blue-400/50 text-white' : 'hover:bg-blue-400/50'}`}
                                            >
                                                {section.title}
                                            </button>
                                            {/* If section has options, show them */}
                                            {openSection === section.title && section.options && (
                                                <ul className="bg-[#1a1a1a]">
                                                    {section.options.map((option) => (
                                                        <li key={option} className='cursor-pointer text-center py-2 px-6 hover:bg-[#2a2a2a] transition-all duration-300 text-xs'
                                                            onClick={() => handleNavigation(option)}
                                                        >
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
