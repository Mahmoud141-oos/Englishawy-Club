import React from 'react'
import { Link } from 'react-router-dom'

const UnitOne = () => {
    return (
        <div className="container h-s mx-auto ">
            {/* Unit Title */}
            <hr className="md:my-8 my-2 text-[#36d7b73c]" />
            <h1 className="text-4xl font-bold text-center text-white">
                Unit One
            </h1>
            {/* Options Grid */}
            <div className="w-full flex justify-center items-center mt-20 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">

                    {/* Vocabulary Box */}
                    <Link to="/UnitOne/Vocabulary">
                        <div className="group bg-[#0f172a] border border-[#36d7b7] rounded-2xl p-8 text-center cursor-pointer
                            transition-all duration-300 hover:bg-[#36d7b7] hover:text-black">
                            <h2 className="text-3xl font-bold text-[#36d7b7] group-hover:text-black">
                                Vocabulary
                            </h2>
                            <p className="mt-4 text-gray-300 group-hover:text-black">
                                Learn new English words with examples and practice.
                            </p>
                        </div>
                    </Link>

                    {/* Grammar Box */}
                    <Link to="/UnitOne/Grammar">
                        <div className="group bg-[#0f172a] border border-[#36d7b7] rounded-2xl p-8 text-center cursor-pointer
                            transition-all duration-300 hover:bg-[#36d7b7] hover:text-black">
                            <h2 className="text-3xl font-bold text-[#36d7b7] group-hover:text-black">
                                Grammar
                            </h2>
                            <p className="mt-4 text-gray-300 group-hover:text-black">
                                Understand English grammar rules in a simple way.
                            </p>
                        </div>
                    </Link>

                </div>
            </div>
            <hr className="md:my-8 my-2 text-[#36d7b73c]" />
        </div>
    )
}

export default UnitOne