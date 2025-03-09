import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import ProductList from './ProductList';

const Catalog = ({ addToCart }) => {
    const [filters, setFilters] = useState({
        sizes: [],
        priceRange: null, });

    useEffect(() => {
        const sortToggle = document.getElementById('sortToggle');
        const sortCenter = document.getElementById('sortCenter');

        const toggleSortCenter = () => {
            if (sortCenter.style.display === "none" || sortCenter.style.display === "") {
                sortCenter.style.display = "flex";
            } else { sortCenter.style.display = "none"; }
        };

        if (sortToggle && sortCenter) {
            sortToggle.addEventListener('click', toggleSortCenter); }

        // Удаление обработчика при размонтировании компонента
        return () => {
            if (sortToggle) {
                sortToggle.removeEventListener('click', toggleSortCenter); }
        };
    }, []); // Пустой массив зависимостей, чтобы выполнить эффект только один раз

    const updateFilters = (newFilters) => {
        setFilters(prevFilters => ({...prevFilters,
                                    ...newFilters, }));
    };

    return (<div className="catalog products">
                <Filter updateFilters={updateFilters} />
                <ProductList filters={filters} showPagination={true} itemsPerRow={3} maxRows={3} addToCart={addToCart} />
            </div>);
};

export default Catalog;