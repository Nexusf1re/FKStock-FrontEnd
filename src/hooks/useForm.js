import { useState } from 'react';

const useForm = (initialValues = {}) => {
    const [values, setValues] = useState(initialValues);

    // Grommet's Form calls onChange with the updated values, not a DOM event
    const handleChange = (nextValue) => {
        setValues(nextValue);
    };

    const handleSubmit = (callback) => (event) => {
        event.preventDefault();
        callback(values);
    };

    return {
        values,
        handleChange,
        handleSubmit,
    };
};

export default useForm;