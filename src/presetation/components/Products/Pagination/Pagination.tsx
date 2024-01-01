
interface Props {
    goToPage: (pageNumber: number) => void
    currentPage: number
    totalPages: number
}
function Pagination({goToPage, currentPage, totalPages}: Props) {

    return (
        <div className="flex justify-between gap-4 mt-4">
            <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
                Anterior
            </button>
            <span>Página {currentPage} de {totalPages}</span>
            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
                Próxima
            </button>
        </div>
    );
}

export default Pagination;