import React from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup';
import InputComponent from "@atoms/inputs/InputComponent";
import ActionButton from "@atoms/buttons/ActionButton";
import {IconReload} from "@tabler/icons-react";

const FormCalculator = ({
                            data,
                            setReset
                        }: {  data: (values: any) => void, setReset: (value: boolean) => void }) => {

    const formik = useFormik({
        initialValues: {
            qWorkers: '',
        },

        validationSchema: Yup.object({
            qWorkers: Yup.number().min(1, 'El número de trabajadores debe ser mayor a 0').required("Ingrese un valor"),
        }),

        onSubmit: (values) => {
            data(values);
            setReset(true);
        },
    });

    const resetInfo = () => {
        formik.resetForm();
        setReset(false);
        formik.values.qWorkers = '';
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
                    <InputComponent name={'qWorkers'} label={'Ingrese el número de trabajadores'}
                                    placeholder={'Ingresa cantidad de trabajadores'} formik={formik}/>
                    {
                        formik.errors.qWorkers && formik.touched.qWorkers && (
                            <p className={'text-error text-xs'}>{formik.errors.qWorkers}</p>
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

export default FormCalculator;