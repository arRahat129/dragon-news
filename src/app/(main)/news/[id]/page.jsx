import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaArrowLeft, FaEye } from 'react-icons/fa';



export const generateMetadata = async({params}) => {
    //   console.log(params);
    const { id } = await params;
    
    const news = await getNewsDetailsById(id);

    return {
        title: `Dragon News | ${news.title}`,
        description: news.details,
    }
};

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log("params", id);
    const news = await getNewsDetailsById(id);
    // console.log("news", news);

    return (
        <div className="card bg-base-100 shadow-sm max-w-5xl mx-auto my-8">
            <div className="card-body">
                {/* Author info */}
                <div className='flex justify-between items-center bg-slate-200 p-4'>
                    <div className='flex gap-1 items-center'>
                        <Image src={news.author?.img} alt={news.author?.name} width={50} height={50} className='rounded-full' />
                        <div>
                            <h2 className='font-semibold'>{news.author?.name}</h2>
                            <p className='text-xs'>{news.author?.published_date}</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <CiShare2 className='text-xl' />
                        <CiBookmark className='text-xl' />
                    </div>
                </div>

                <h2 className="card-title py-2">{news.title}</h2>

                <figure>
                    <Image
                        src={news.image_url}
                        alt={news.title} width={300} height={300} className='w-full' />
                </figure>

                <p className='text-justify py-3 px-2'>{news.details}</p>

                <Link href={`/category/${news.category_id}`}>
                    <button className='btn flex items-center rounded-lg bg-purple-500 text-white'><FaArrowLeft /> See Other News on this Category</button>
                </Link>
            </div>

        </div>
    );
};

export default NewsDetailsPage;