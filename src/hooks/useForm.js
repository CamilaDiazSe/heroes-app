import { useState } from "react";


export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const handleInputChange = ({target}) =>{

        setValues({
            ...values,
            // [target.name]: target.value
            [target.name]: target.value
        });

        console.log(target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    const reset = () =>{
        setValues(initialState);
    }

    return [values, handleInputChange, handleSubmit,reset];
}
