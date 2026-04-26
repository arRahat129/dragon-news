'use client'

import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {

    const handlGoogleSignin = async() => {
        const data = await authClient.signIn.social({
            provider: "google",
        });

        console.log(data, "google sign in");
        
    };

    const handlGithubSignin = async() => {
        const data = await authClient.signIn.social({
            provider: "github",
        });

        console.log(data, "github sign in");
        
    };

    return (
        <div className=''>
            <h2 className="font-bold text-lg mb-4">Login With</h2>
            <div className='flex flex-col gap-2 space-y-1'>
                <button className='btn border-blue-500 text-blue-500 rounded-lg'
                    onClick={handlGoogleSignin}>
                    <FaGoogle /> Login with Google
                </button>
                <button className='btn border-black rounded-lg'
                    onClick={handlGithubSignin}>
                    <FaGithub /> Login with Github
                </button>
            </div>
        </div>
    );
};

export default RightSideBar;