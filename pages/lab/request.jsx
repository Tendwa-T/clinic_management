/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { v4 as uuidv4, validate } from "uuid";


export default function Request() {
    const router = useRouter();
    const [test, setTest] = useState("");
    const [name, setName] = useState("");
    const [idNo, setIdNo] = useState("");
    const [labNo, setLabNo] = useState("");
    const [result, setResult] = useState("");
    const [complete, setComplete] = useState(false);
    const [success, setSuccess] = useState(true);
    const [notes, setNotes] = useState("");
    const [uniqueId, setUniqueId] = useState("");

    const generateUniqueId = async (e) => {
        if (idNo.length == 8 && uniqueId == "") {
            const uniqueId = `${idNo}-${uuidv4()}`;
            setUniqueId(uniqueId);
            setLabNo(uniqueId);
        }
        else{
            toast.error("ID number must be 8 digits or There is already a unique ID")
        }


        console.log(uniqueId);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target


        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'testName':
                setTest(value)
                break;
            case 'idNo':
                setIdNo(value)
                break;
            case 'result':
                setResult(value)
                break;
            case 'complete':
                setComplete(value)
                break;
            case 'results':
                setResult(value)
                break;
            case 'notes':
                setNotes(value)
                break;
            default:
                console.log('check names and values')
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch("http://localhost:8000/api/labs/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                test,
                name,
                idNo,
                labNo,
                result,
                complete,
                notes,
            }),
        });

        const data = await response.json();

        if(data ==='Lab already exists'){
            setSuccess(false);
            toast.error("Lab request already exists");
        }else if (typeof data === 'object' && data !== null){
            setSuccess(true);
            toast.success("Lab request successful");
            /* router.push("/patients"); */    

        }
        console.log(data);
    }

    const handleCancel = async (e) => {
        e.preventDefault()
        toast.error("Cancel button clicked")
    }


    return (
        <div className="flex justify-center mt-10 w-auto h-auto ">
            <form className="w-full max-w-3xl p-6 pb-10 border-slate-400 rounded-2xl shadow-2xl" onSubmit={handleSubmit}>
                <div className="my-3 mb-8">
                    <h1 className='font-roboto text-center text-3xl underline'>Lab Test Request</h1>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Full Name
                        </label>
                        <input onChange={handleInputChange} className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" name="name" type="text" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            ID No
                        </label>
                        <input onChange={handleInputChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="idNo" name="idNo" type="text" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Lab Number
                        </label>
                        <input readOnly onFocus={generateUniqueId} value={labNo} className="appearance-none block w-full uppercase bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="labNo" name="labNo" type="text" />
                        <p className="text-gray-600 text-xs italic">Auto-generated Field: Click to generate full code</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full  px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Test Name
                        </label>
                        <input onChange={handleInputChange} className="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="testName" name="testName" type="text" />
                    </div>
                    {/*                     <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                            drop down
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Complete?
                        </label>
                        <input className="appearance-none block w-full bg-gray-300 text-gray-700 border h-[40px] border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="isComplete" name="isComplete" type="checkbox" />
                    </div> */}
                    <div className="w-full mt-2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            results
                        </label>
                        <input onChange={handleInputChange} className="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="results" name="results" type="text" />
                    </div>
                    <div className="w-full mt-2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Notes
                        </label>
                        <input onChange={handleInputChange} className="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="notes" name="notes" type="text" />
                    </div>
                </div>
                <div className="flex justify-evenly mt-6">
                    <button className="border-2 bg-blue-800 w-40 h-14 rounded-lg font-roboto text-xl hover:scale-110 hover:bg-opacity-50 transition ease-linear duration-300" onClick={handleCancel}>
                        cancel
                    </button>

                    <button className="border-2 bg-blue-800 w-40 h-14 rounded-lg font-roboto text-xl hover:scale-110 hover:bg-green-500 transition ease-linear duration-300" onClick={() => { toast.success("Submit button clicked") }} type="submit">
                        submit
                    </button>
                </div>

            </form>
        </div>
    );
}