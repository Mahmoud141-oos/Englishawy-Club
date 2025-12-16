import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="w-full py-4 flex-col flex justify-center items-center">
            <Link to='/' className="text-4xl md:text-5xl font-bold text-[#36d7b7]">Englishawy Club</Link>
        </div>
    )
}

export default NavBar