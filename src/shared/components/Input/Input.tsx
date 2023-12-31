import {RegisterOptions, UseFormRegister} from "react-hook-form";
interface Props {
    name: string;
    register: UseFormRegister<any>;
    validationRules?: RegisterOptions;
    placeholder?: string;
    className?: string;
}
export function CustomInput(props: Props) {
    const {register, placeholder, name} = props
    return (
        <input {...register(name, {required: true})}
               className='p-1 rounded-md shadow placeholder:px-2 text-gray-500'
               placeholder={placeholder}/>
    )
}