import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from "next/navigation";


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [isButtonActive, setIsButtonActive] = useState(false)
  const router = useRouter();
  const handleNav = () => {
    setIsButtonActive(!isButtonActive)
    router.push('/Login')
  }

  return (
    <main
      className={`flex min-h-screen bg-transparent flex-col items-center justify-between p-24 `}
    >
      <div className="h-screen w-screen bg-transparent absolute">
        <div className="m-2 bg-transparent">
          <div id="navbar-container" className="flex w-screen justify-center">
            <div id="nav-title" className="px-1">
              <h1 className="text-white font-bold text-3xl "> Lukenya Clinic ...</h1>
            </div>
          </div>
          <div className="flex items-center flex-col mt-[200px]">
            <h1 className="text-white font-bold text-5xl font-roboto">Welcome Daktari</h1>
            <div className="mt-5">
              <button
                className="rounded-3xl shadow-xl bg-gradient-to-br from-blue-900 to-cyan-400 transition ease-in-out duration-300 hover:scale-125 text-black px-5 h-[60px] w-[250px]"
                onClick={handleNav}
              >
                <Link href="/Login"></Link>
                {isButtonActive ? "Login" : "Logout"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
