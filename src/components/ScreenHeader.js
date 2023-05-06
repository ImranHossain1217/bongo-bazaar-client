import React from 'react';

const ScreenHeader = ({children}) => {
    return (
        <div className='border-b border-gray-700 mb-4 mt-4 pb-4'>
            {children}
        </div>
    );
};

export default ScreenHeader;