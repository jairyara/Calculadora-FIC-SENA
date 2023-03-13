import React, {useState} from 'react';
import CalculatorHeader from "@molecules/CalculatorHeader";
import FormCalculator from "@molecules/FormCalculator";
import CalculatorFooter from "@molecules/CalculatorFooter";
import FormPresumptive from "@molecules/FormPresumptive";

function Calculator() {
    const [isToggle, setIsToggle] = useState<boolean>(true);
    const [data, setData] = useState<any>({});
    const [isReset, setIsReset] = useState<boolean>(false);

    return (
        <div
            className={
            "w-full min-height-custom pt-10"
            }
        >
            <CalculatorHeader setState={setIsToggle}/>
            {
                isToggle ? (
                    <FormCalculator  data={setData} setReset={setIsReset} />
                ) : (
                    <FormPresumptive data={setData} setReset={setIsReset} />
                )
            }

            <CalculatorFooter data={data} />
        </div>
    );
}

export default Calculator;