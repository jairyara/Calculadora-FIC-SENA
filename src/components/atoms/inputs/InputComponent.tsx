import React from 'react';

type InputProps = {
    name: string,
    label: string,
    placeholder: string,
    type: string,
}

function InputComponent({name, label, placeholder, type} : InputProps) {
    return (
        <div
            className="flex flex-col mb-4"
        >
            <label className='mb-4 text-primary font-bold' htmlFor={name}>{label}</label>
            <input
                className='h-10 bg-transparent border-b-2 border-b-primary outline-0'
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
            />

        </div>
    );
}

InputComponent.defaultProps = {
    type: "number",
}

export default InputComponent;