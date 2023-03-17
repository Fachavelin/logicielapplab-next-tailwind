import { FC, useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';

import * as Yup from 'yup';
import { api } from '@/api';
import { Workspaces } from '@mui/icons-material';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es requerido'),
  email: Yup.string()
    .email('Debe ser un correo válido')
    .required('El correo electrónico es requerido'),
  phone: Yup.string().required('El número de teléfono es requerido'),
  message: Yup.string().required('El mensaje es requerido'),
});

interface formValues {
  name: string;
  email: string;
  phone: string;
  message: string;
  clientName: string;
}

const initialValues: formValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
  clientName: 'Logiciel Applab',
};

export const ContactForm: FC = () => {
  const [loading, setLoading] = useState(false);

  const postEmailRequest = async (formValues: formValues) => {
    const { data } = await api.post(`standardMail`, formValues);

    if (data.success) {
      Swal.fire({
        icon: 'success',
        title: 'Gracias por contactarnos',
        text: `${data.success}`,
        timer: 2500,
        // showConfirmButton: false,
      });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (form) => {
        setLoading(true);

        await postEmailRequest(form);

        setLoading(false);
      }}
    >
      {({ touched, errors }) => (
        <Form>
          <div className='bg-slate-800 rounded-lg p-4'>
            <p className='text-center text-3xl  py-6 text-white'>
              ¡Escríbenos!
            </p>
            <div className='grid'>
              <div className='pt-1 pb-1'>
                <label className='text-slate-200 uppercase text-sm font-medium pl-4 '>
                  Nombres y apellidos
                </label>
                <div className='flex items-center border rounded-sm mx-4'>
                  <Field
                    className='appearance-none bg-slate-200 text-sm border-slate-400 w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none'
                    type='text'
                    name='name'
                    placeholder='Nombre'
                  />
                </div>
                {touched.name && errors.name && (
                  <p className='text-sm font-semibold text-red-700 pl-4'>
                    {errors.name}
                  </p>
                )}
              </div>
              <div className='pt-1 pb-1'>
                <label className='text-slate-200 uppercase text-sm font-medium pl-4 pt-1'>
                  Correo Electrónico
                </label>
                <div className='flex items-center border rounded-sm mx-4'>
                  <Field
                    className='appearance-none bg-slate-200 text-sm border-slate-400 w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none'
                    type='email'
                    name='email'
                    placeholder='Correo electrónico'
                  />
                </div>
                {touched.email && errors.email && (
                  <p className='text-sm font-semibold text-red-700 pl-4'>
                    {errors.email}
                  </p>
                )}
              </div>
              <div className='pt-1 pb-1'>
                <label className='text-slate-200 uppercase text-sm font-medium pl-4 pt-1'>
                  Número de teléfono
                </label>
                <div className='flex items-center border rounded-sm mx-4'>
                  <Field
                    className='appearance-none bg-slate-200 text-sm border-slate-400 w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none'
                    type='text'
                    name='phone'
                    placeholder='Número de teléfono'
                  />
                </div>
                {touched.phone && errors.phone && (
                  <p className='text-sm font-semibold text-red-700 pl-4'>
                    {errors.phone}
                  </p>
                )}
              </div>
              <div className='pt-1 pb-1'>
                <label className='text-slate-200 uppercase text-sm font-medium pl-4 pt-1'>
                  Mensaje
                </label>
                <div className='flex items-center border rounded-sm mx-4'>
                  <Field
                    className='appearance-none bg-slate-200 text-sm border-slate-400 w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none'
                    type='text'
                    as='textarea'
                    name='message'
                    placeholder='Mensaje'
                  />
                </div>
                {touched.message && errors.message && (
                  <p className='text-sm font-semibold text-red-700 pl-4'>
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type='submit'
                className='py-2 mx-4 px-2 bg-[#ed184f] hover:bg-[#da1145] transition delay-100 cursor-pointer rounded text-white mt-4'
                disabled={loading}
              >
                {!loading ? (
                  'Enviar'
                ) : (
                  <Workspaces
                    sx={{
                      animation: 'spin 1s linear infinite',
                      '@keyframes spin': {
                        from: {
                          transform: 'rotate(360deg)',
                        },
                        to: {
                          transform: 'rotate(0deg)',
                        },
                      },
                    }}
                  />
                )}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
