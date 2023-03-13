import React, {useState} from 'react';
import {SALARYBASIC , ALLCOSTPERCENTAGE , WORKERPERCENTAGE} from "@utils/CONSTANTS";
import useCalcLiquidation from "@hooks/useCalcLiquidation";
import useCalcPresumptive from "@hooks/useCalcPresumptive";
import useYear from "@hooks/useYear";

interface CalculatorFooterProps {
    qWorkers: string;
    contractType: string;
    budget: string;
}

const CalculatorFooter = ({data}: { data: CalculatorFooterProps }) : JSX.Element => {

    const {qWorkers, contractType, budget} = data;

    let valueContract = contractType === 'Contrato de mano de obra' ? 0 : 1;

    const {value} = useCalcLiquidation(Number(qWorkers));
    const {pValue} = useCalcPresumptive(valueContract, Number(budget));
    const {year} = useYear();

    const salaryFormatted = SALARYBASIC.toLocaleString('es-CO');

    let budgetFormatted = Number(budget).toLocaleString('es-CO');
    let qWorkersFormatted = Number(qWorkers).toLocaleString('es-CO');

    return (
        <>
            {
                 qWorkers !== undefined && (
                     <div
                         hidden={qWorkers === ''}
                         className={`mt-10 mb-5 mx-4 rounded-lg p-4 bg-white  lg:w-3/6 lg:mx-auto `}
                     >
                         <h2 className={'text-xl font-bold text-center mb-2'}>Resumen del calculo</h2>
                         <h3>Liquidación por número de trabajadores</h3>
                         <h3>{`Salario mínimo ${year}: $${salaryFormatted}`}</h3>
                         <h3>{`Cantidad de trabajadores: ${qWorkersFormatted}`}</h3>
                         <h3 className={'mt-3 text-2xl font-bold text-center text-primary'}>{`Total a pagar: $${value}`}</h3>
                     </div>
                )
            }

            {
                (contractType !== undefined && budget !== undefined) && (
                    <div
                        hidden={contractType === '' || budget === ''}
                        className={`mt-10 mb-5 mx-4 rounded-lg p-4 bg-white lg:w-3/6 lg:mx-auto `}
                    >
                        <h2 className={'text-xl font-bold text-center mb-2'}>Resumen del calculo</h2>
                        <h3>{`Liquidación por ${contractType}`}</h3>
                        <h3>{`Valor del contrato: $${budgetFormatted}`}</h3>
                        <h3>{`Porcentaje a pagar: ${valueContract === 0 ? WORKERPERCENTAGE * 100 : ALLCOSTPERCENTAGE * 100}%`}</h3>
                        <h3 className={'mt-3 text-2xl font-bold text-center text-primary'}>{`Total a pagar: $${pValue}`}</h3>
                    </div>
                )
            }
        </>

    );
}

export default CalculatorFooter;