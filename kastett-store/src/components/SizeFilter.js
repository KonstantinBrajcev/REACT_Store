import React from 'react';

const SizeFilter = ({ sizes, onFilterChange }) => {
    return (
        <div>
            {sizes.map(size => (
                <button key={size} onClick={() => onFilterChange(size)}>
                    {size}
                </button>
            ))}
        </div>
    );
};

export default SizeFilter;
