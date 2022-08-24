import react from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function ContainerBlock({ children }){
    return(
        <div className="bg-[#FCC000] w-screen">
            <div className="">
                <Navbar />
                { children }
                <Footer />
            </div>
        </div>
    )
}