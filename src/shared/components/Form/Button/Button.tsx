import {AiOutlineLoading3Quarters} from "react-icons/ai"

interface Props {
    loading: boolean
    type: "submit" | "reset" | "button" | undefined
    title?: string;
    className?: string;
}

export function SendButton(props: Props) {
    const {loading, type,title, className, ...rest} = props

    return (
        <button type={type} className={`rounded-md flex items-center justify-center p-2 text-white ${loading ? "bg-green-300" : "bg-green-500"} ${className}`}
                 {...rest} disabled={loading}>
            {
                loading ? (
                    <>
                        <AiOutlineLoading3Quarters className='animate-spin h-5 w-5 mr-3'/>
                        {title}
                    </>
                ) : (
                    <>
                        {title}
                    </>
                )
            }
        </button>
    );
}
