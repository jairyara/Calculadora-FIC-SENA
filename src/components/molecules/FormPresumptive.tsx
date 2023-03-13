import React from 'react';
import {FormikValues, useFormik} from "formik";
import * as Yup from 'yup';
import InputComponent from "@atoms/inputs/InputComponent";
import ActionButton from "@atoms/buttons/ActionButton";
import SelectComponent from "@atoms/inputs/SelectComponent";
import optionsLiquidation from "@utils/optionsLiquidation";
import {IconReload} from "@tabler/icons-react";

const FormPresumptive = ({
                             data,
                             setReset
                         }: { data: (values: any) => void, setReset: (value: boolean) => void }) => {

    const formik = useFormik({
        initialValues: {
            contractType: '',
            budget: ''
        },

        validationSchema: Yup.object({
            contractType: Yup.string().required("Seleccione un tipo de contrato"),
            budget: Yup.number().min(100000, 'El valor del contrato debe ser mayor a $100.000').defined("Ingrese un valor").required("Ingrese un valor"),
        }),

        onSubmit: (values) => {
            data(values);
            setReset(true);
        },
    });

    const resetInfo = () => {
        formik.resetForm();
        setReset(false);
        formik.values.contractType = '';
        formik.values.budget = '';
    }

    return (
        <div
            className="mt-10 mb-5 mx-4 rounded-lg p-4 bg-white lg:w-3/6 lg:mx-auto "
        >
            <button onClick={() => resetInfo()} className={'flex items-center justify-end w-full'}>
                <IconReload size={16} color={'#6B6B6B'}/>
            </button>
            <form onSubmit={formik.handleSubmit} className={'w-full'}>
                <div>
                    <SelectComponent name={'contractType'} options={optionsLiquidation}
                                     label={'Selecciona el tipo de contrato'} formik={formik}/>
                    {
                        formik.errors.contractType && formik.touched.contractType && (
                            <p className={'text-error text-xs mb-2'}>{formik.errors.contractType}</p>
                        )
                    }
                    <InputComponent name={'budget'} label={'Ingrese valor del contrato'}
                                    placeholder={'Ingresa un valor'} formik={formik}/>
                    {
                        formik.errors.budget && formik.touched.budget && (
                            <p className={'text-error text-xs'}>{formik.errors.budget}</p>
                        )
                    }
                    <div className={'flex justify-center'}>
                        <ActionButton/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormPresumptive;