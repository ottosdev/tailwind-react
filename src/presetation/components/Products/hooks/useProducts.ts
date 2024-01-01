import {useState, useEffect, useCallback} from 'react';
import {customDel, customGet, customPost, customPut} from "@/infra/service/api.ts";
import {IProduct} from "@/presetation/components/Products/Interface";


const useProducts = (itemsPerPage = 10) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [send, setSend] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const [editProduct, setEditProduct] = useState<IProduct | null>(null);

    const fetchProducts = useCallback(async () => {
        setLoading(true);
        try {
            const res = await customGet('products');
            setProducts(res.data.products);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, []);

    const addProduct = async (data: any) => {
        setSend(true);
        try {
            if (!editProduct) {
                const res = await customPost('products', {title: data.title});
                setProducts(res.data.products);
            } else {
                const res = await customPut(`products/${editProduct.id}`, {title: data.title});
                setProducts(res.data.products);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setSend(false);
        }
    };

    async function removeProduct(id: string) {
        try {
            const res = await customDel(`products/${id}`);
            setProducts(res.data.products);
        } catch (err) {
            console.log(err)
        }
    }

    function goToPage(pageNumber: number) {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return {
        products,
        loading,
        removeProduct,
        addProduct,
        currentPage,
        setCurrentPage,
        totalPages,
        goToPage,
        send,
        setEditProduct,
        editProduct
    };
};

export default useProducts;
