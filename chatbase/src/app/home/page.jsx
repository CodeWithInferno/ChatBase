"use client";
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import Sidebar from '../component/sidebar'

const Home = () => {
    const { status } = useSession();

    if(status === 'unauthenticated') {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-950">
                <Link href="/signin" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                    Click here to sign in
                </Link>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center h-screen bg-slate-900">
            <Sidebar />
        </div>
    );
}

export default Home;