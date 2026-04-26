import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        _id: "1", 
        title: "Breaking News: Major Event Unfolds in the New York City",
    },
    {
        _id: "2", 
        title: "Breaking News: New Policy Announced by the Goverment",
    },
    {
        _id: "3", 
        title: "Breaking News: Sports Team Wins Championship -- The Football Breaks...",
    },
];

const BreakingNews = () => {
    return (
        <div className='flex justify-center items-center gap-4 bg-gray-200 py-4 px-2 container mx-auto'>
            <button className='btn bg-red-500 rounded-lg text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>
                {
                    news.map(n => {
                        return <span className='mr-5' key={n._id}>{n.title}</span>
                    })
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;