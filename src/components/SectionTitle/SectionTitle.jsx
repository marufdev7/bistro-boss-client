import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='flex flex-col items-center justify-center mb-12 pt-10'>
            <p className='text-yellow-400 text-lg mb-4 italic'>---{heading}---</p>
            <h3 className='text-4xl font-medium uppercase border-y-4 p-6'>{subHeading}</h3>
            <hr />
        </div>
    );
};

export default SectionTitle;