import LeftSideBar from '@/components/homepage/news/LeftSideBar';
import NewsCard from '@/components/homepage/news/NewsCard';
import RightSideBar from '@/components/homepage/news/RightSideBar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';

const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;
    console.log(id, "paramsID");

    const categories = await getCategories();
    // console.log(categories);

    const news = await getNewsByCategoryId(id);
    // console.log(news, "news");

    return (
        <div className="grid grid-cols-12 gap-4 container mx-auto my-15">
            <div className="col-span-3">
                <LeftSideBar categories={categories} activeId={id} />
            </div>

            <div className="text-xl col-span-6">
                <h2 className='font-bold text-lg'>News by Category</h2>
                <div className="space-y-4 mt-6">
                    {
                        news.length === 0
                            ? (
                                <h2 className='text-center text-4xl font-bold my-7'>No News Available</h2>
                            )
                            : (
                                news.map(n => {
                                    return <NewsCard key={n._id} news={n} />
                                })
                            )
                    }
                </div>
            </div>

            <div className="col-span-3">
                <RightSideBar />
            </div>
        </div>
    );
};

export default NewsCategoryPage;