import React, { useEffect as UseEffect, useState as UseState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';


export default function Navbar() {
    const router = useRouter();
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = UseState(false);
    const [token, setToken] = UseState("")

    UseEffect(() => {
        setMounted(true);
    }, []);

    UseEffect(() => {
        setToken(sessionStorage.getItem('Token'))
    }, [])

    return (
        <div className="max-w-6xl mx-auto px-4 md:py-20">
            <div className="flex md:flex-row justify-between items-center">
                <div className="flex flex-col">
                    <Link href="/">
                        <a>
                            <img src='./logo.png' className='w-32 mx-auto'/> 
                        </a>
                    </Link>
                </div>

                <div className="space-x-8 hidden md:block">
                    <Link href="/explore">
                        <a 
                            className={`text-base  ${router.asPath === "/explore"? "text-gray-800 font-bold font-Finlandica": "text-gray-200 font-normal font-Finlandica"
                            }`}
                        >   
                            Explore{" "}
                            {router.asPath === "/explore" && (
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-arrow-down inline-block h-3 w-3"
                                viewBox="0 0 16 16"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                />
                                </svg>
                            )}
                        </a>
                    </Link>
                    <Link href="/new">
                        <a 
                            className={`text-base  ${router.asPath === "/new"? "text-gray-800 font-bold font-Finlandica": "text-gray-200  font-normalfont-Finlandica "
                            }`}
                        >   
                            What's New
                            {router.asPath === "/new" && (
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-arrow-down inline-block h-3 w-3"
                                viewBox="0 0 16 16"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                />
                                </svg>
                            )}
                        </a>
                    </Link>
                    {token ? (<Link href="/login">
                        <a 
                            className={`text-base  ${router.asPath === "/login"? "text-gray-800 font-bold": "text-gray-200 font-normal "
                            }`}
                        >   
                            Account
                            {router.asPath === "/login" && (
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-arrow-down inline-block h-3 w-3"
                                viewBox="0 0 16 16"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                />
                                </svg>
                            )}
                        </a>
                    </Link>) : (<Link href="/login">
                        <a 
                            className={`text-base  ${router.asPath === "/login"? "text-gray-800 font-bold": "text-gray-200 font-normal "
                            }`}
                        >   
                            Login
                            {router.asPath === "/login" && (
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-arrow-down inline-block h-3 w-3"
                                viewBox="0 0 16 16"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                />
                                </svg>
                            )}
                        </a>
                    </Link>)}
                    <Link href="/Creators">
                        <a 
                            className={`text-base  ${router.asPath === "/Creators"? "text-gray-800 font-bold": "text-gray-200 font-normal "
                            }`}
                        >   
                            Creators
                            {router.asPath === "/Creators" && (
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-arrow-down inline-block h-3 w-3"
                                viewBox="0 0 16 16"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                />
                                </svg>
                            )}
                        </a>
                    </Link>
                </div>
            </div>
            <div className="space-x-8 block md:hidden mt-4">
                <Link href="/explore">
                    <a className="text-base font-normal text-gray-200 dark:text-gray-300">
                        explore
                    </a>
                </Link>
                <Link href="/Creators">
                    <a className="text-base font-normal text-gray-200 dark:text-gray-300">
                        Creators
                    </a>
                </Link>
                <Link href="/login">
                    <a className="text-base font-normal text-gray-200 dark:text-gray-300">
                        Login
                    </a>
                </Link>
                <Link href="/signup">
                    <a className="text-base font-normal text-gray-200 dark:text-gray-300">
                        signup
                    </a>
                </Link>
            </div>
        </div>
    )
}