import React, {useState} from 'react';

type SelectComponentProps = {
    label: string;
    name: string;
    placeholder: string;
    options: string[];
    formik: any;
}

const SelectComponent =({label, name, placeholder, options, formik} : SelectComponentProps) => {
    const [selectedOption, setSelectedOption] = useState<string>('');

    return (
        <div
            className="flex flex-col w-full mb-4"
        >
            <label className='mb-4 text-primary font-bold' htmlFor={name}>{label}</label>
            <select
                value={formik.values[name] || selectedOption}
                onChange={formik.handleChange}
                className='h-10 bg-transparent border-b-2 border-b-primary outline-0'
                name={name} id={name}>
                <option value="" disabled>{placeholder}</option>
                {options.map((option) => (
                    <option  className={`checked:bg-secondary ${
                        option === selectedOption ? "bg-secondary text-white" : ""
                    }` } key={option} >
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

SelectComponent.defaultProps = {
    placeholder: "Seleccione una opción",
}

export default SelectComponent;