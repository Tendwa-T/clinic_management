/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "@/context/UserContext";
import { useRouter } from "next/router";


export default function Patients() {
    const { user } = useContext(UserContext);
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [specificPatient, setSpecificPatient] = useState([]);
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
            <div id="patient-list" className="h-screen mt-5 w-screen">
                <div>
                    <div className="mt-15 mb-5">
                        <h1 className="text-2xl font-roboto text-center">Patients List</h1>
                    </div>
                    {loading ? <div className='text-center'>Loading...</div> : error ? <div className='text-center'>{error}</div> :
                        <div className="flex flex-wrap space-y-3">
                            {patients.map((patient) => (
                                <button key={patient._id} onClick={getPatient} className="font-roboto text-lg border-2 tracking-wide border-gray-300 w-70 p-4 bg-white rounded-lg shadow-sm text-center space-x-5 ml-5">
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

function PatientList() {
    const { user } = useContext(UserContext);
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    useEffect(() => {
        fetchPatients();
    }, [router, user]);

    const fetchPatients = async () => {
        setLoading(true);
        try {
            const res = await fetch('https://clinic-backend-three.vercel.app/api/patients/all', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await res.json();
            setPatients(data);
            setLoading(false);
            console.log(data);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        console.log('unavailable')
    )
}
