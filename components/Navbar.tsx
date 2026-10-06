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
            <a href="/dashboard" className="text-gray-300 hover:text-white">Home</a>
            <a href="/plan" className="text-gray-300 hover:text-white">Plan</a>
            <a href="/opportunities" className="text-gray-300 hover:text-white">Opportunity</a>
            <a href="/dashboard" className="text-gray-300 hover:text-white">Dashboard</a>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
