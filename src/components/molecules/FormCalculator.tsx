import React from 'react';
import InputComponent from "@atoms/inputs/InputComponent";
import ActionButton from "@atoms/buttons/ActionButton";
import SelectComponent from "@atoms/inputs/SelectComponent";
import optionsLiquidation from "@utils/optionsLiquidation";

function FormCalculator({type}: { type: boolean }) {

    const handleCalculate = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Calculando...')
    }

    return (
        <div
            className="mt-10 mb-5 mx-4 rounded-lg p-4 bg-white lg:w-3/6 lg:mx-auto "
        >
            <form onSubmit={handleCalculate} className={'w-full'}>
                {
                    type ? (
                        <div>
                            <InputComponent name={'q-workers'} label={'Ingrese el número de trabajadores'}
                                            placeholder={'Ingresa cantidad de trabajadores'}/>
                            <div className={'flex justify-center'}>
                                <ActionButton />
                            </div>
                        </div>
                    ) : (
                        <div>
                            <SelectComponent name={'contract-type'} options={optionsLiquidation} label={'Selecciona el tipo de contrato'}/>
                            <InputComponent name={'budget'} label={'Ingrese valor del contrato'} placeholder={'Ingresa un valor'} />
                            <div className={'flex justify-center'}>
                                <ActionButton />
                            </div>
                        </div>
                    )
                }
            </form>
        </div>
    );
}

export default FormCalculator;