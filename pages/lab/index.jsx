/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "@/context/UserContext";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { CheckIcon, ClockIcon } from "@heroicons/react/20/solid";
import LabSection from "./labSection";

export default function Lab() {
    const router = useRouter()
    const { user } = useContext(UserContext)
    const [labTests, setLabTests] = useState([])
    const [singleTest , setSingleTest] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/labs/all')
            .then(response => setLabTests(response.data))
            .catch(error => console.log('Error fetching data', error))
    }, []);

   const checkStatus = (labTests) => {
    labTests.map((test) => {
        if (test.complete === true) {
            <div><CheckIcon className="h-6 w-6 "/></div>
        } else {
            <div><ClockIcon className="h-6 w-6"/></div>
        }
    })
   }

    return (
        <div className="w-full h-[90vh] sm:-[90vh] relative" id="patients">
            <img
                src='https://images.pexels.com/photos/8770730/pexels-photo-8770730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='Background Image'
                className='w-full h-[90vh] sm:[90vh] object-cover'></img>

            <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)]' />
            <div className='absolute w-full h-full top-0 flex flex-col justify-center items-start px-[14px] sm:px-[1em] md:px-[3em] lg:px-[5em] text-white'>
                <p className=' text-3xl font-roboto sm:text-5xl font-bold mb-[25px]'>
                    Welcome to Lab
                </p>
                <p className='text-md font-roboto sm:text-lg mb-[15px]'>
                    Get your patients' lab tests and results
                </p>
                <p className='text-sm text-center font-roboto'>

                </p>
            </div>

            <LabSection />

            <div id="Lab-list" className="h-screen mt-5 w-screen">
                <div>
                    <div className="mt-15 mb-5">
                        <h1 className="text-2xl font-roboto text-center">Lab Overview</h1>
                    </div>
                    {loading ? <div className='text-center'>Loading...</div> : error ? <div className='text-center'>{error}</div> :
                        <div className="flex flex-wrap justify-center mx-5 ">
                            {labTests.map((test) => (
                                <button key={test.idNo} onClick={()=>{
                                    router.push(`/lab/${test.idNo}`)
                                }} className="font-roboto text-lg border-2 tracking-wide border-gray-300 w-[450px] p-4 bg-white rounded-lg shadow-2xl text-center space-x-5 mx-5 mb-5 hover:scale-110 hover:bg-sky-400 hover:border-sky-600 transition ease-in-out duration-300">
                                    <div className="mb-5">{test.name} </div>
                                    <div className="mb-5">Test: {test.test}</div>
                                    {test.complete === true ? <div className="mb-5"><div className="justify-center flex mb-5">Status: <CheckIcon className="h-6 w-6 text-green-500 " /></div><div>Result: {test.result}</div></div> : <div className="flex justify-center mb-5"><ClockIcon className="h-6 w-6 text-blue-600"/></div>}
                                    
                                </button>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}