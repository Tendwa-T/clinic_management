/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export default function LabSection() {
    return (
        <div className='w-screen m-5'>
            <div>
                <h1 className='font-roboto text-center text-3xl'>
                    Lab Details:
                </h1>
                <div className='font-roboto text-lg border-2 h-40 items-center border-gray-300 p-4 flex flex-row flex-auto bg-white rounded-xl shadow-sm mx-3 justify-evenly my-5'>
                    <div>
                        <button className='font-roboto text-lg border-2 tracking-wide border-gray-300 p-4 bg-white rounded-lg shadow-sm hover:bg-sky-300 hover:border-sky-600 hover:scale-105 transition ease-in-out duration-300'>
                            <h1>
                                Register a patient
                            </h1>
                        </button>
                    </div>
                    <div>
                        <button className='font-roboto text-lg border-2 tracking-wide border-gray-300 p-4 bg-white rounded-lg shadow-sm hover:bg-sky-300 hover:border-sky-600 hover:scale-105 transition ease-in-out duration-300'>
                            <h1>
                                Access a single patient's details
                            </h1>
                        </button>
                    </div>
                    <div>
                        <button className='font-roboto text-lg border-2 tracking-wide border-gray-300 p-4 bg-white rounded-lg shadow-sm hover:bg-sky-300 hover:border-sky-600 hover:scale-105 transition ease-in-out duration-300'>
                            <h1>
                                Update a patient's details
                            </h1>
                        </button>
                    </div>
                    <div>
                        <button className='font-roboto text-lg border-2 tracking-wide border-gray-300 p-4 bg-white rounded-lg shadow-sm hover:bg-sky-300 hover:border-sky-600 hover:scale-105 transition ease-in-out duration-300'>
                            <h1>
                                More
                            </h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}