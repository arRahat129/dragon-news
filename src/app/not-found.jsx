import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col'>
            <h2 className='font-bold text-5xl text-purple-500'>This Page is Not Found!!</h2>
            <Link href={'/'}>
                <button className='btn bg-purple-100 text-purple-900 rounded-lg py-3 flex items-center justify-center my-5'>Back To Home</button>
            </Link>
        </div>
    );
};

export default NotFound;