import Pagination from "@/presetation/components/Products/Pagination/Pagination.tsx";
import {SendButton} from "@/shared/components/Form/Button/Button.tsx";
import {CustomInput} from "@/shared/components/Form/Input/Input.tsx";
import useProducts from "@/presetation/components/Products/hooks/useProducts.ts";
import {useForm} from "react-hook-form";
import {Spinner} from "@/shared/components/Spinner/Spinner.tsx";
import {yupResolver} from "@hookform/resolvers/yup";
import {productSchema} from "@/presetation/components/Products/rules";
import {IFormInputs, IProduct} from "@/presetation/components/Products/Interface";
import { FaEdit, FaTrash} from 'react-icons/fa'


export default function Products() {
    const {products, loading, currentPage, totalPages, goToPage, send, addProduct, removeProduct, setEditProduct, editProduct} = useProducts();

    const {register, handleSubmit, reset, setValue} = useForm<IFormInputs>({
        resolver: yupResolver(productSchema)
    });

    async function handleDelete(id: string) {
        await removeProduct(id);
    }

    async function onSubmit(product: IFormInputs) {
        await addProduct(product);
        reset()
    }

    function handleEdit(product: IProduct) {
        setEditProduct(product)
        setValue('title', product.title);
    }

    const currentItems = products.slice((currentPage - 1) * 10, currentPage * 10);

    if (loading) {
        return (
            <div className='flex items-center justify-center'>
                <Spinner/>
            </div>
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex gap-4 '>
                <CustomInput register={register} name='title' placeholder='Informe um titulo'/>
                <SendButton type="submit" loading={send} title={editProduct ? 'Editando...': 'Enviando...'}/>
            </form>


            <table className="table-fixed w-full shadow bg-white mt-6">
                <thead>
                <tr>
                    <th className='bg-blue-100 border text-left px-8 py-4'>Id</th>
                    <th className='bg-blue-100 border text-left px-8 py-4'>Title</th>
                    <th className='bg-blue-100 border text-left px-8 py-4'>Ações</th>
                </tr>
                </thead>
                <tbody>
                {currentItems.length ? currentItems.sort((a, b) => Number(a.id) - Number(b.id)).map(item => (
                    <tr key={item.id}>
                        <td className="border px-8 py-4">{item.id}</td>
                        <td className="border px-8 py-4">{item.title}</td>
                        <td className="border px-8 py-4 flex gap-4">
                            <button onClick={() => {handleEdit(item)}}>
                                <FaEdit className='text-yellow-500'/>
                            </button>
                            <button onClick={() => handleDelete(item.id)}>
                                <FaTrash className='text-red-500'/>
                            </button>
                        </td>
                    </tr>
                )) : null}

                </tbody>
            </table>
            <Pagination goToPage={goToPage} currentPage={currentPage} totalPages={totalPages}/>

        </div>
    )
}
