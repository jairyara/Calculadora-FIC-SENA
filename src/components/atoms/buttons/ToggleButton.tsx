import React, {useState} from 'react';

const ToggleButton = ({setState} : {setState: (value: boolean) => void}): JSX.Element => {

    const [isToggle, setIsToggle] = useState<boolean>(true);

    const handle = (value : boolean) => {
        setIsToggle(value);
        setState(value);
    }

    return (
        <div
            className={
                "w-60 h-16 bg-primary rounded-full flex items-center justify-between"
            }
        >
            <button
                onClick={() => handle(true)}
                className={
                `w-28 rounded-bl-full rounded-tl-full ml-1 h-14 cursor-pointer ${isToggle ? 'bg-primary' : 'bg-white'}`
                }
            >
                <span className={`text-sm ${isToggle ? 'text-white' : 'text-black'}`}> Por número de trabajadores </span>
            </button>

            <button
                onClick={() => handle(false)}
                className={
                `w-28 h-14 rounded-br-full rounded-tr-full mr-1 cursor-pointer ${!isToggle ? 'bg-primary' : 'bg-white'}`
                }
            >
                <span className={`text-sm ${!isToggle ? 'text-white' : 'text-black'}`}> Presuntiva </span>
            </button>
        </div>
    );
}

export default ToggleButton;