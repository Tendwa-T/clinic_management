/* eslint-disable @next/next/no-img-element */
import { useState, useContext, useEffect } from "react";
import UserContext from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


export default function Login() {
  const [idNo, setIdNo] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isIdErr, setIsIdErr] = useState(false);
  const [isPassErr, setIsPassErr] = useState(false);
  const { setUser } = useContext(UserContext);
  const [userToken, setUserToken] = useState(null);

  const router = useRouter();

  const handleIdNo = (e) => {
    setIdNo(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://clinic-backend-three.vercel.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idNo, password }),
    });

    const data = await response.json();


    if (data.userToken) {
      setUserToken(data.userToken);
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("token", data.userToken);
      router.push("/dashboard");
    }

    if (data == 'Id Number does not exist') {
      setIsIdErr(true);
      toast.error("Id Number does not exist");
    } else {
      setIsIdErr(false);
    }
    if (data == 'Incorrect password'){
      setIsPassErr(true);
      toast.error("Incorrect password");
    } else{
      setIsPassErr(false);
    }


  };




  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-screen bg-blue-950 bg-opacity-80 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="idNo" className="block text-sm font-medium leading-6 text-white">
              ID Number
            </label>
            <div className="mt-2">
              <input
                onChange={handleIdNo}
                id="idNo"
                name="idNo"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
            {isIdErr ? <div className="border-2 border-red-700 w-full"> </div>: <div className="border-2 border-green-700 w-full"> </div>}

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                onChange={handlePassword}
                id="password"
                name="password"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {isPassErr ? <div className="border-2 border-red-700 w-full"> </div>: <div className="border-2 border-green-700 w-full"> </div>}

          <div>
            <button
              type="submit"
              className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ${isLoading ? 'hover:bg-slate-600 cursor-not-allowed' : `hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}`}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )

};
