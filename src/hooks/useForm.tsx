import { useState } from 'react';

function useForm(initialState: any) {
    // O estado do formulário é inicializado com os valores passados no parâmetro `initialState`
    const [values, setValues] = useState(initialState);

    // Função que atualiza o valor de um campo específico
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    // Função para resetar os valores do formulário
    const resetForm = () => {
        setValues(initialState);
    };

    return {
        values,
        handleChange,
        resetForm,
    };
}

export default useForm;
