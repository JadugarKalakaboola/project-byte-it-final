import data from "../src/data"
import Link from "next/link"

export default function DocData(){

    console.log(data)
    return(
        <div className="lg:grid grid-cols-3 mx-auto w-9/12 py-24">
            {data.map((doc) => {
                    return (
                        <div key={doc.key} style={{backgroundColor: `${doc.background}`}} className="py-5 px-7 font-Finlandica lg:my-0">
                                <div className="">
                                    <img src={doc.image} alt='' />
                                    <p className="text-xl font-semibold">{doc.name}</p>
                                    <p className="text-l font-bold">{doc.description}</p>
                                    <p className="pt-7">{doc.power}</p>
                                </div>
                        </div>
                    )
                })}
        </div>
    )
}