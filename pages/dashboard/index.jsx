import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { useContext } from "react";
import UserContext from "@/context/UserContext";
import Hero from "@/components/hero/Hero";



export default function Dashboard() {
    const { user } = useContext(UserContext);

    return (
        <div>
            <div className="flex w-full justify-center bg-white ">
                <Hero />
            </div>
        </div>
    )
}
