import React, {useState, useEffect} from "react";

const useYear = () : { year: number } => {

    const [year, setYear] = useState<number>(0);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return { year };
}

export default useYear;