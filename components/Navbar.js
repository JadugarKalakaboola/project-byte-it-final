import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';


export default function Navbar() {
    const router = useRouter();
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 md:py-5">
            <div className="flex md:flex-row justify-between items-center">
                <div className="flex flex-col">
                    <Link href="/">
                        <a className=''>
                            <img src='./logo.png' className='w-28'/> 
                        </a>
                    </Link>
                </div>

                <div className="space-x-8 hidden md:block">
                    <Link href="/explore">
                        <a 
                            className={`text-base  ${router.asPath === "/explore"? "text-gray-800 font-bold font-Finlandica": "text-gray-900 font-normal font-Finlandica"
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
                            className={`text-base  ${router.asPath === "/new"? "text-gray-800 font-bold font-Finlandica": "text-gray-900  font-normalfont-Finlandica "
                            }`}
                        >   
                            What&apos;s New
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
                    <Link href="/votes">
                        <a 
                            className={`text-base  ${router.asPath === "/votes"? "text-gray-800 font-bold": "text-gray-900 font-normal "
                            }`}
                        >   
                            Votes
                            {router.asPath === "/votes" && (
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
            <div className="space-x-8 block md:hidden mt-4 text-center">
                <Link href="/explore">
                    <a className="text-base font-normal text-gray-900">
                        Explore
                    </a>
                </Link>
                <Link href="/new">
                    <a className="text-base font-normal text-gray-900">
                        What's New
                    </a>
                </Link>
                <Link href="/Votes">
                    <a className="text-base font-normal text-gray-900">
                        Votes
                    </a>
                </Link>
            </div>
        </div>
    )
}