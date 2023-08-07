/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

export default function PatientSection() {
    const router = useRouter()
    return (
        <div className='w-screen m-5 md:w-auto md:h-auto ml-5'>
            <div>
                <h1 className='font-roboto text-center text-3xl'>
                    Patient Details:
                </h1>
                <div className='font-roboto text-lg border-2 h-40 items-center border-gray-300 p-4 flex flex-row flex-auto bg-white rounded-xl shadow-sm mx-3 justify-evenly my-5 '>
                    <div>
                        <button onClick={()=>{router.push('patients/registerPatient')}} className='font-roboto text-lg border-2 tracking-wide border-gray-300 p-4 bg-white rounded-lg shadow-sm hover:bg-sky-300 hover:border-sky-600 hover:scale-105 transition ease-in-out duration-300'>
                            <h1>
                                Register a patient
                            </h1>
                        </button>
                    </div>
                    <div>
                        <button className='font-roboto text-lg border-2 tracking-wide border-gray-300 p-4 bg-white rounded-lg shadow-sm hover:bg-sky-300 hover:border-sky-600 hover:scale-105 transition ease-in-out duration-300' onClick={()=>{
                            toast.info('Patient Search Coming soon');
                        }}>
                            <h1>
                                Access a single patient's details
                            </h1>
                        </button>
                    </div>
{/*                     <div>
                        <button className='font-roboto text-lg border-2 tracking-wide border-gray-300 p-4 bg-white rounded-lg shadow-sm hover:bg-sky-300 hover:border-sky-600 hover:scale-105 transition ease-in-out duration-300' onClick={()=>{
                            toast.info('Patient Search Coming soon');
                        }}>
                            <h1>
                                Update a patient's details
                            </h1>
                        </button>
                    </div> */}
                    <div>
                        <button className='font-roboto text-lg border-2 tracking-wide border-gray-300 p-4 bg-white rounded-lg shadow-sm hover:bg-red-600 hover:border-black hover:scale-105 transition ease-in-out duration-300' onClick={()=>{
                            toast.info('Patient Delete Coming soon');
                        }}>
                            <h1>
                                Delete Patient Details
                            </h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}