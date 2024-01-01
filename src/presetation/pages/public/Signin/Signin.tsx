import {Navigate} from "react-router-dom";
import {CustomInput} from "@/shared/components/Form/Input/Input.tsx";
import {useForm} from "react-hook-form";
import {SendButton} from "@/shared/components/Form/Button/Button.tsx";
import * as Yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup";

import {useAuth} from "@/presetation/hooks/useAuthentication.tsx";

interface IForm {
    email: string;
    password: string;
}

const schema = Yup.object({
    email: Yup.string().required("E-mail obrigatorio"),
    password: Yup.string().required("Senha obrigatoria").min(6, 'No minimo 6 caracteres'),
})

function Signin() {
    const {isAuthenticated, signin} = useAuth()
    const {register, handleSubmit, formState: {errors}} = useForm<IForm>({
        resolver: yupResolver(schema)
    })

    function onSubmit(data: IForm) {
        signin(data.email, data.password)
    }

    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace/>;
    }

    return <div className='h-[100vh] flex flex-col justify-center items-center gap-5'>
        <div className='w-[30rem] shadow-2xl p-4 rounded-md'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
                <CustomInput name='email' placeholder='E-mail' register={register} erros={errors.email}/>
                <CustomInput name='password' placeholder='Password' register={register} erros={errors.password}/>
                <SendButton loading={false} type='submit' title='Entrar'
                            className='hover:bg-green-400 transition duration-150'/>
            </form>
        </div>
    </div>;
}

export default Signin;