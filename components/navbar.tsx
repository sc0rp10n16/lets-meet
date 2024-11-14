import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-white shadow-md'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
                <div className="flex-shrink-0">
                    <Image src='/logo.svg' height={30} width={30} alt='logo' />
                </div>
                <div className="flex items-center space-x-4">
                    <UserButton/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar