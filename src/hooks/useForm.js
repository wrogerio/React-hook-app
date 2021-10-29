import React, { useState } from "react";

export const UseForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const handleInputCHange = (target) => {
        setValues({
            ...values,
            [target.name]: target.value,
        });
    };

    return [values, handleInputCHange];
};
