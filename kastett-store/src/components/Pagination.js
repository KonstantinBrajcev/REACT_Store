import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null; // Если страниц 1 или меньше, скрываем пагинацию

    return (
        <div className="pagination text">
            <a href="#" onClick={(e) => { e.preventDefault(); onPageChange(Math.max(1, currentPage - 1)); }}>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99512 2L2.99512 7L7.99512 12L6.99512 14L-0.00488281 7L6.99512 0L7.99512 2Z" fill="black"/>
                </svg>
            </a>

            <span> {currentPage} </span>

            <a href="#" onClick={(e) => { e.preventDefault(); onPageChange(Math.min(totalPages, currentPage + 1)); }}>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-0.00500488 12L4.995 7L-0.00500488 2L0.994995 0L7.995 7L0.994995 14L-0.00500488 12Z" fill="black"/>
                </svg>
            </a>
        </div>
    );
};

export default Pagination;
