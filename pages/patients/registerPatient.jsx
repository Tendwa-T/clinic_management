/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";


export default function RegisterPatient() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [idNo, setIdNo] = useState("");
    const [dob, setDob] = useState("");
    const [allergies, setAllergies] = useState("");
    const [bloodType, setBloodType] = useState("");
    const [notes, setNotes] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [success, setSuccess] = useState(true);

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleGender = (e) => {
        setGender(e.target.value);
    }

    const handleIdNo = (e) => {
        setIdNo(e.target.value);
    }

    const handleDob = (e) => {
        setDob(e.target.value);
    }

    const handleAllergies = (e) => {
        setAllergies(e.target.value);
    }

    const handleBloodType = (e) => {
        setBloodType(e.target.value);
    }

    const handleNotes = (e) => {
        setNotes(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const response = await fetch("http://localhost:8000/api/patients/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                gender,
                idNo,
                dob,
                allergies,
                bloodType,
                notes,
            })
        });

        const data = await response.json();
        console.log(data);

        if(data ==='Patient already exists'){
            setSuccess(false);
            toast.error(data);
        }else if (typeof data === 'object' && data !== null){
            setSuccess(true);
            toast.success("Patient registered successfully");
            router.push("/patients");    

        }
        console.log(data);
    }

    return (
        <div className="bg-gray-300">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-300  ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-9">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold font-roboto leading-9 tracking-wide text-black">
                        Register Patient
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                        <div>
                            <div className="mt-2">
                                <input
                                    placeholder="Name"
                                    onChange={handleName}
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="mt-2">
                                <input
                                    placeholder="ID Number"
                                    onChange={handleIdNo}
                                    id="idNo"
                                    name="idNo"
                                    type="text"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        {/*isIdErr ? <div className="border-2 border-red-700 w-full"> </div>: <div className="border-2 border-green-700 w-full"> </div>*/}

                        <div>
                            <div className="mt-2">
                                <input
                                    placeholder="Gender"
                                    onChange={handleGender}
                                    id="gender"
                                    name="gender"
                                    type="text"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                                <input
                                    placeholder="Date of Birth"
                                    onChange={handleDob}
                                    id="dob"
                                    name="dob"
                                    type="date"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                                <input
                                    placeholder="Blood Type"
                                    onChange={handleBloodType}
                                    id="idNo"
                                    name="idNo"
                                    type="text"

                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                                <input
                                    placeholder="Allergies"
                                    onChange={handleAllergies}
                                    id="idNo"
                                    name="idNo"
                                    type="text"

                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                                <textarea
                                    placeholder="Notes"
                                    onChange={handleNotes}
                                    id="notes"
                                    name="notes"
                                    type="text"

                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="flex  space-x-6 ">
                            <button
                                onClick={() => {router.back()}}
                                type="reset"
                                className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ${isLoading ? 'hover:bg-slate-600 cursor-not-allowed' : `hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}`}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ${isLoading ? 'hover:bg-slate-600 cursor-not-allowed' : `hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}`}
                            >
                                Register
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}