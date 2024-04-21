'use client';
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const Login = () => {
    const { data: session, status } = useSession();

    if(status === "loading") {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-lg font-semibold">Loading...</div>
            </div>
        );
    }

    if(status === "authenticated") {
        return (
            <div className="flex items-center justify-center h-screen">
                <button 
                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                    onClick={() => signOut("google")}
                >
                    Logout
                </button>
            </div>
        );
    }

    if(status === "unauthenticated") {
        return (
            <div className="flex items-center justify-center h-screen">
                            <button 
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                onClick={() => signIn("google")}
            >
                Login with Google
            </button>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <button 
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                onClick={() => signIn("google")}
            >
                Login with Google
            </button>
        </div>
    );
}

export default Login