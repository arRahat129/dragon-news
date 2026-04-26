import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({ categories, activeId }) => {

    return (
        <div>
            <h2 className="font-bold text-lg">
                All Categories
            </h2>
            <ul className="flex flex-col gap-3 mt-6">
                {
                    categories.news_category.map(category => {
                        return <li key={category.category_id} className={`${activeId === category.category_id && "bg-purple-500 text-white"} rounded-md font-bold text-center text-md`}>
                            <Link className='block p-2' href={`/category/${category.category_id}`}>
                                {category.category_name}
                            </Link>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default LeftSideBar;

{/**
* Link and a tags are inline block element, means the content it have it will take that much space. Because of this, if we click beside the text, the link will not work. only work if directly click on the text.
* To prevent this, we can use display block. Now the link takes the whole block.
*/}