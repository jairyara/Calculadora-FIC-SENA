import React from 'react';
import ToggleButton from "@atoms/buttons/ToggleButton";

function CalculatorHeader({setState} : {setState: (value: boolean) => void}) : JSX.Element  {
    return (
        <div
            className={
                "mt-10 mb-5 mx-4 rounded-lg p-4 bg-white lg:w-3/6 lg:mx-auto flex flex-col items-center justify-center"
            }
        >
            <h2 className={
                "text-2xl font-bold text-black mb-8 text-center"
            }> Selecciona la modalidad de liquidación </h2>
            <ToggleButton setState={setState} />
        </div>
    );
}

export default CalculatorHeader;