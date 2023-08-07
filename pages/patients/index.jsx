/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "@/context/UserContext";
import { useRouter } from "next/router";
import PatientSection from "./patientSection";




export default function Patients() {
    const { user } = useContext(UserContext);
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();


    useEffect(() => {
        axios.get('http://localhost:8000/api/patients/all')
            .then(response => setPatients(response.data))
            .catch(error => console.log('Error fetching data', error))
    }, []);

    console.log(patients)


    return (
        <div>
            <div className="w-full h-[95vh] sm:-[90vh] relative" id="patients">
                <img
                    src='https://images.pexels.com/photos/7659683/pexels-photo-7659683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='Background Image'
                    className='w-full h-[95vh] sm:[90vh] object-cover'></img>

                <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)]' />
                <div className='absolute w-full h-full top-0 flex flex-col justify-center items-start px-[14px] sm:px-[1em] md:px-[3em] lg:px-[5em] text-white'>
                    <p className=' text-3xl font-roboto sm:text-5xl font-bold mb-[25px]'>
                        Welcome to Patients' Bay
                    </p>
                    <p className='text-md font-roboto sm:text-lg mb-[15px]'>
                        Check on your patients
                    </p>
                    <p className='text-sm text-center font-roboto'>

                    </p>
                </div>
            </div>

            <PatientSection />

            <div id="patient-list" className="h-screen mt-5 w-screen">
                <div>
                    <div className="mt-15 mb-5">
                        <h1 className="text-2xl font-roboto text-center">Patients Overview</h1>
                    </div>
                    {loading ? <div className='text-center'>Loading...</div> : error ? <div className='text-center'>{error}</div> :
                        <div className="flex flex-wrap justify-center mx-5 ">
                            {patients.map((patient) => (
                                <button key={patient.idNo} onClick={()=>{
                                    router.push(`/patients/${patient.idNo}`)
                                }} className="font-roboto text-lg border-2 tracking-wide border-gray-300 w-[250px] p-4 bg-white rounded-lg shadow-sm text-center space-x-5 mx-5 mb-5 hover:scale-110 hover:bg-sky-400 hover:border-sky-600 transition ease-in-out duration-300">
                                    <div className="mb-5">{patient.name}, {patient.gender}</div>
                                    <div>Allergies:{patient.allergies}</div>
                                </button>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

