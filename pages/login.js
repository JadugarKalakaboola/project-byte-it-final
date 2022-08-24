import ContainerBlock from "../components/ContainerBlock"
import { app } from "../firebaseConfig";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from "next/router";
import React, { useEffect as UseEffect, useState as UseState } from 'react'

function login() {
    const [token, setToken] = UseState("")
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const router = useRouter()

    const signUpWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((response) => {
            sessionStorage.setItem('Token', response.user.accessToken)
            sessionStorage.setItem('Name', response.user.displayName)
            sessionStorage.setItem('PFP', response.user.photoURL)
            router.reload()
        })
    }

    UseEffect(() => {
        setToken(sessionStorage.getItem('Token'))
    }, [])

    const manageSignOut = () => {
            sessionStorage.clear()
            router.reload()
    }

    return(
        <ContainerBlock>
        <div className="">
            <style jsx>{`
                .login-container {
                    margin-left: 29rem;
                }
            `}</style>
            {token ? (
                <div className="user-container items-center w-6/12 mb-20 mx-auto flex justify-center pt-[2rem] pb-[3.85rem]">
                    <div>
                        <img className="rounded-lg"  src={sessionStorage.getItem("PFP")} style={{width:"200px"}}/>
                    </div>  
                    <div className="px-10">
                        <p>Hello, {sessionStorage.getItem("Name")}</p>
                        <p className="pt-2">Welcome to Lyfe.</p>
                        <button className="text-center text-gray-200 bg-black px-10 py-2 rounded-lg my-10 dark:bg-gray-400" onClick={manageSignOut}>Logout</button>
                    </div>
                </div>
            ) : (<div className="text-center justify-evenly w-6/12 mx-auto mb-24 lg:flex pb-[9.6rem]">
            <button className="my-5 text-gray-100 bg-gradient-to-r from-emerald-500 to-indigo-500 py-3 px-7 text-3xl font-Finlandica hover:ease-in-out duration-200 cursor-pointer hover:bg-gradient-to-l rounded-md" onClick={signUpWithGoogle}>Sign Up with Google</button>
            </div>)}
            <div className="absolute bottom-0 w-full">
            </div>
        </div>
        </ContainerBlock>
    )
}

export default login