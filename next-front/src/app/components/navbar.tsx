import React from 'react'

interface Props { }

function Navbar(props: Props) {
    const { } = props

    return (
        <>
            <nav className="flex justify-between items-center p-2 bg-cyan-900">
                <h2 className="text-white font-bold text-xl">AEX</h2>
                <ul className="flex space-x-6">
                    <li className="text-white text-opacity-70 hover:text-opacity-100 py-2 cursor-pointer transition-opacity duration-300">Home</li>
                    <li className="text-white text-opacity-70 hover:text-opacity-100 py-2 cursor-pointer transition-opacity duration-300">Experience</li>
                    <li className="text-white text-opacity-70 hover:text-opacity-100 py-2 cursor-pointer transition-opacity duration-300">Languages</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
