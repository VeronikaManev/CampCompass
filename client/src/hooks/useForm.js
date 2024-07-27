import { useState } from "react";

export function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);

    function changeHandler(e) {
        setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
    }

    function clearFormData() {
        setValues(initialValues);
    }

    return {
        values,
        changeHandler,
        clearFormData,
    };
} 