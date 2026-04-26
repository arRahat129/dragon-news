"use client"

import Link from 'next/link';
import React from 'react';
import userAvatar from "@/assets/user.png"
import Image from 'next/image';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    // console.log("Session User", session);
    const user = session?.user;
    console.log("User", user);



    return (
        <div className='flex justify-between container mx-auto gap-4 mt-6'>
            <div></div>
            <ul className='flex justify-between items-center gap-3 text-gray-700'>
                <NavLink href={'/'}><li>Home</li></NavLink>
                <NavLink href={'/aboutus'}><li>About</li></NavLink>
                <NavLink href={'/carrier'}><li>Carrier</li></NavLink>
            </ul>

            {
                isPending ? <div className='skeleton w-50 h-10'></div>
                    : user ? (
                        <div className='flex items-center gap-2'>
                            <h2>Hello, {user.name}</h2>
                            <Image src={user.image || userAvatar} width={50} height={50} alt='User Avatar' />
                            <Link href={'/'}>
                                <button className='btn bg-red-200 text-red-700 rounded-lg' onClick={async() => await authClient.signOut()}>Log out</button>
                            </Link>
                        </div>
                    ) : (

                        <Link href={'/login'}>
                            <button className='btn bg-purple-200 text-purple-700 rounded-lg'>Login</button>
                        </Link>
                    )
            }

        </div>
    );
};

export default Navbar;