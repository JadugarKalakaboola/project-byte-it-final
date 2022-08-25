import react from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function ContainerBlock({ children }){
    return(
        <div className="w-screen bg-[#E4F0D8]">
            <div className="overflow-x-hidden">
                <Navbar />
                { children }
                <Footer />
            </div>
        </div>
    )
}