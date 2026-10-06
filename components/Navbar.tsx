import Link from 'next/link'
import React from 'react'
const Navbar = () => {
  return (
    <div>
    <nav className="bg-gray-800 p-8">
        <div className="container mx-auto flex items-center justify-between">
            <div className="text-white font-bold text-xl">
                YehyaCareerBath
            </div>
           <div className="space-x-14 text-xl">
            <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
            <Link href="/plan" className="text-gray-300 hover:text-white">Plan</Link>
            <Link href="/opportunities" className="text-gray-300 hover:text-white">Opportunity</Link>
            <Link href="/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar