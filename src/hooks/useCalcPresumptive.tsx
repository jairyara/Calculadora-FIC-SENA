import {useState, useEffect} from "react";
import {ALLCOSTPERCENTAGE, WORKERPERCENTAGE} from "@utils/CONSTANTS";

const useCalcPresumptive = (data : number, budget : number) : { pValue : string } => {

    const [pValue, setValue] = useState<string>('');

    useEffect(() => {
        let liquidation = 0;

        if (data === 0) {
            liquidation = budget * WORKERPERCENTAGE;
            setValue(liquidation.toLocaleString('es-CO'));
        } else {
            liquidation = budget * ALLCOSTPERCENTAGE;
            setValue(liquidation.toLocaleString('es-CO'));
        }
    }, [budget, data]);

    return { pValue };

}

export default useCalcPresumptive;