import React from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { PencilIcon } from '@heroicons/react/20/solid'

export default function LabDetails(){
    const [singleLab, setSingleLab] = useState([])
    const [editLab, setEditLab] = useState({...singleLab})
    const [edit, setEdit] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        axios.get(`http://localhost:8000/api/labs/${id}`)
            .then(response => setSingleLab(response.data))
            .catch(error => console.log('Error fetching data', error))
        
    }, [id]);
     console.log(singleLab)
    useEffect(() => {
        if(edit) {
            axios.get(`http://localhost:8000/api/labs/${id}`)
            .then(res => {
                setEditLab(res.data)
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
                setEditLab({...editLab, name: value})
                break;
            case 'idNo':
                setEditLab({...editLab, idNo: value})
                break;
            case 'labNo':
                setEditLab({...editLab, labNo: value})
                break;
            case 'test':
                setEditLab({...editLab, test: value})
                break;
            case 'result':
                setEditLab({...editLab, result: value})
                break;
            case 'complete':
                setEditLab({...editLab, complete: value})
                break;
            case 'notes':
                setEditLab({...editLab, notes: value})
                break;
            default:
                console.log('check names and values')
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`http://localhost:8000/api/labs/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editLab)
        })

        console.log(res.data)
    }

    if (!singleLab) return 'Loading...'

    return (
        <div className='h-screen m-3'>
            <div className='mb-5'><h1 className='font-roboto text-center text-3xl'>Lab Details: </h1></div>
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
                                    value={editLab.name}
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
                                    value={editLab.idNo}
                                    readOnly
                                    className="block w-full rounded-md border-0 py-1.5 bg-gray-300 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        {/*isIdErr ? <div className="border-2 border-red-700 w-full"> </div>: <div className="border-2 border-green-700 w-full"> </div>*/}

                        <div>
                            <div className="mt-2">
                                <input
                                    placeholder="Lab Number"
                                    onChange={handleInputChange}
                                    id="labNo"
                                    name="labNo"
                                    type="text"
                                    value={editLab.labNo}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                                <input
                                    placeholder="Test Name"
                                    onChange={handleInputChange}
                                    id="test"
                                    name="test"
                                    type="text"
                                    value={editLab.test}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                                <input
                                    placeholder="Result"
                                    onChange={handleInputChange}
                                    id="result"
                                    name="result"
                                    type="text"
                                    value={editLab.result}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                                <input
                                    placeholder="Complete"
                                    onChange={handleInputChange}
                                    id="complete"
                                    name="complete"
                                    type="checkbox"
                                    checked={editLab.complete}
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
                                    value={editLab.notes}
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
                        <div className='flex justify-center space-x-6'><h2 className='text-3xl text-center font-roboto underline'>{singleLab.name}</h2> <button onClick={() => { setEdit(!edit) }}><PencilIcon className='h-6 w-6 ' /></button></div>
                        <div>Gender: <p className='bg-white pl-4 border-3 border-blue-400 rounded-md'>{singleLab.idNo} </p></div>
                        <div><div>Dob:</div>  <p className='bg-white pl-4 border-blue-400 rounded-md'>{singleLab.labNo}</p></div>
                        <div>ID Number:  <p className='bg-white pl-4 border-3 border-blue-400 rounded-md'>{singleLab.test}</p></div>
                        <div>Blood Type: <p className='bg-white pl-4 border-3 border-blue-400 rounded-md'>{singleLab.result}</p></div>
                        <div>Notes: <p className='bg-white pl-4 border-3 border-blue-400 rounded-md'>{singleLab.notes}</p></div>
                        <div>Complete: <p className='bg-white pl-4 border-3 border-blue-400 rounded-md'>{singleLab.complete ? 'Yes' : 'No'}</p></div>
                    </div>}

            </div>
        </div>
    )
}