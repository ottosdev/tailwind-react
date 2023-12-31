import {AiOutlineLoading3Quarters} from "react-icons/ai"

interface Props {
    loading: boolean
    type: "submit" | "reset" | "button" | undefined
}

export function SendButton(props: Props) {
    const {loading, type, ...rest} = props

    return (
        <button type={type} className={`rounded-md flex items-center justify-center p-2 text-white ${loading ? "bg-green-300" : "bg-green-500"}`}
                 {...rest} disabled={loading}>
            {
                loading ? (
                    <>
                        <AiOutlineLoading3Quarters className='animate-spin h-5 w-5 mr-3'/>
                        Enviando...
                    </>
                ) : (
                    <>
                        Enviar
                    </>
                )
            }
        </button>
    );
}
