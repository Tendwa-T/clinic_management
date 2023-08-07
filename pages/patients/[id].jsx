import React from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { PencilIcon } from '@heroicons/react/20/solid'

const PatientDetails = () => {
    const [singlepatient, setSinglePatient] = useState([])
    const [editPatient, setEditPatient] = useState({...singlepatient})
    const [edit, setEdit] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const { id } = router.query


    useEffect(() => {
        axios.get(`http://localhost:8000/api/patients/${id}`)
            .then(res => {
                setSinglePatient(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    useEffect(() => {
        if(edit) {
            axios.get(`http://localhost:8000/api/patients/${id}`)
            .then(res => {
                setEditPatient(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        }
        
    }, [id, edit])


    const handleInputChange = (e) => {
        const {name, value} = e.target

        switch (name) {
            case 'name':
                setEditPatient({...editPatient, name: value})
                break;
            case 'idNo':
                setEditPatient({...editPatient, idNo: value})
                break;
            case 'gender':
                setEditPatient({...editPatient, gender: value})
                break;
            case 'dob':
                setEditPatient({...editPatient, dob: value})
                break;
            case 'allergies':
                setEditPatient({...editPatient, allergies: value})
                break;
            case 'bloodType':
                setEditPatient({...editPatient, bloodType: value})
                break;
            case 'notes':
                setEditPatient({...editPatient, notes: value})
                break;
            default:
                console.log('check names and values')
                break;
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`http://localhost:8000/api/patients/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editPatient)
        })

        console.log(res.data)
    }

    if (!singlepatient) return 'Loading...'

    return (
        <div className='h-screen m-3'>
            <div className='mb-5'><h1 className='font-roboto text-center text-3xl'>Patient Details: </h1></div>
            <div className='flex flex-wrap'>
                {edit ?
                <div className='flex justify-center w-screen'>
                    <form className="space-y-6 w-[500px]" action="#" method="POST" onSubmit={handleSubmit}>
                        <div>
                            <div className="mt-2">
                                <input
                                    placeholder="Name"
                                    onChange={handleInputChange}
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={editPatient.name}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="mt-2">
                                <input
                                    placeholder="ID Number"
                                    onChange={handleInputChange}
                                    id="idNo"
                                    name="idNo"
                                    type="text"
                                    value={editPatient.idNo}
                                    readOnly
                                    className="block w-full rounded-md border-0 py-1.5 bg-gray-300 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        {/*isIdErr ? <div className="border-2 border-red-700 w-full"> </div>: <div className="border-2 border-green-700 w-full"> </div>*/}

                        <div>
                            <div className="mt-2">
                                <input
                                    placeholder="Gender"
                                    onChange={handleInputChange}
                                    id="gender"
                                    name="gender"
                                    type="text"
                                    value={editPatient.gender}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                                <input
                                    placeholder="Date of Birth"
                                    onChange={handleInputChange}
                                    id="dob"
                                    name="dob"
                                    type="date"
                                    value={editPatient.dob}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                                <input
                                    placeholder="Blood Type"
                                    onChange={handleInputChange}
                                    id="idNo"
                                    name="idNo"
                                    type="text"
                                    value={editPatient.bloodType}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                                <input
                                    placeholder="Allergies"
                                    onChange={handleInputChange}
                                    id="idNo"
                                    name="idNo"
                                    type="text"
                                    value={editPatient.allergies}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                                <textarea
                                    placeholder="Notes"
                                    onChange={handleInputChange}
                                    id="notes"
                                    name="notes"
                                    type="text"
                                    value={editPatient.notes}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="flex  space-x-6 ">
                            <button
                                onClick={() => { setEdit(false)}}
                                type="reset"
                                className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ${isLoading ? 'hover:bg-slate-600 cursor-not-allowed' : `hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}`}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ${isLoading ? 'hover:bg-slate-600 cursor-not-allowed' : `hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}`}
                            >
                                Update
                            </button>

                        </div>
                    </form>
                    </div>


                    :

                    <div className='font-roboto text-lg border-2 tracking-wide border-gray-300 w-screen h-[400px] py-4 px-2 bg-gray-300 rounded-lg shadow-sm space-x-5 ml-5'>
                        <div className='flex justify-center space-x-6'><h2 className='text-3xl text-center font-roboto underline'>{singlepatient.name}</h2> <button onClick={() => { setEdit(!edit) }}><PencilIcon className='h-6 w-6 ' /></button></div>
                        <div>Gender: <p className='bg-white pl-4 border-3 border-blue-400 rounded-md'>{singlepatient.gender} </p></div>
                        <div><div>Dob:</div>  <p className='bg-white pl-4 border-blue-400 rounded-md'>{singlepatient.dob}</p></div>
                        <div>ID Number:  <p className='bg-white pl-4 border-3 border-blue-400 rounded-md'>{singlepatient.idNo}</p></div>
                        <div>Blood Type: <p className='bg-white pl-4 border-3 border-blue-400 rounded-md'>{singlepatient.bloodType}</p></div>
                        <div>Allergies:  <p className='bg-white pl-4 border-3 border-blue-400 rounded-md'>{singlepatient.allergies}</p></div>
                        <div>Notes: <p className='bg-white pl-4 border-3 border-blue-400 rounded-md'>{singlepatient.notes}</p></div>
                    </div>}

            </div>
        </div>
    )
}

export default PatientDetails