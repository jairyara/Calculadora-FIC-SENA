import {useState, useEffect} from "react";
import {SALARYBASIC , NUMBEROFWORKERS} from "@utils/CONSTANTS";

const useCalcLiquidation = (data ?: number) : { value: string } => {

    const [value, setValue] = useState<string>('');

    useEffect(() => {

        if (data) {
            let quantity =  Math.ceil(data / NUMBEROFWORKERS) * SALARYBASIC;
            setValue(quantity.toLocaleString('es-CO'));
        }
    }, [data]);

    return { value };

}

export default useCalcLiquidation;