import { useState, useEffect, useCallback } from 'react';
import { customGet, customPost } from "@/infra/service/api.ts";
import {IProduct} from "@/presetation/components/Products/Interface";


const useProducts = (itemsPerPage = 10) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [send, setSend] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const fetchProducts = useCallback(async () => {
        setLoading(true);
        try {
            const res = await customGet('');
            setProducts(res.data.products);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, []);

    const addProduct = async (data: any ) => {
        setSend(true);
        try {
            const res = await customPost('', { title: data.title });
            setProducts(res.data.products);
        } catch (error) {
            console.error(error);
        } finally {
            setSend(false);
        }
    };

    function goToPage(pageNumber: number) {
        setCurrentPage(pageNumber);
    }
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return {
        products,
        loading,
        addProduct,
        currentPage,
        setCurrentPage,
        totalPages,
        goToPage,
        send
    };
};

export default useProducts;
