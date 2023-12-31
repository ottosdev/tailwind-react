import * as yup from "yup";

export const productSchema = yup.object({
    title: yup.string().required('titulo Obrigatorio'),
})