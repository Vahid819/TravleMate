import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

function Navbar() {
    return (
        <div className='w-full h-20 bg-transparent flex justify-around items-center'>
            <div>Logo</div>
            <div className='flex gap-4'>
                <Link href='/'
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 text-xl">
                    Home
                </Link>
                <Link href='/about'
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 text-xl">
                    About
                </Link>
                <Link href='/contact'
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 text-xl">
                    Blogs
                </Link>
            </div>
            <div className='flex gap-4'>
                <Link href={'/sign-Up'}>
                    <Button className="transform transition duration-500 hover:scale-110">Sign Up</Button>
                </Link>
                <Link href={'/sign-In'}>
                    <Button className="transform transition duration-500 hover:scale-110">Sign In</Button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar