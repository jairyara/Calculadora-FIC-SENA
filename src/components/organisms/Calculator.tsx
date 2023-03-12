import React, {useState} from 'react';
import CalculatorHeader from "@molecules/CalculatorHeader";
import InputComponent from "@atoms/inputs/InputComponent";
import FormCalculator from "@molecules/FormCalculator";

function Calculator() {
    const [isToggle, setIsToggle] = useState<boolean>(true);

    return (
        <>
            <CalculatorHeader setState={setIsToggle}/>
            <FormCalculator type={isToggle} />
        </>
    );
}

export default Calculator;