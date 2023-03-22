import { FC, useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';

import * as Yup from 'yup';
import { api } from '@/api';
import { Workspaces } from '@mui/icons-material';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es requerido'),
  mail: Yup.string()
    .email('Debe ser un correo válido')
    .required('El correo electrónico es requerido'),
  phone: Yup.string().required('El número de teléfono es requerido'),
  message: Yup.string().required('El mensaje es requerido'),
});

interface formValues {
  name: string;
  mail: string;
  phone: string;
  message: string;
  clientName: string;
}

const initialValues: formValues = {
  name: '',
  mail: '',
  phone: '',
  message: '',
  clientName: 'Logiciel Applab',
};

export const ContactForm: FC = () => {
  const [loading, setLoading] = useState(false);

  const postEmailRequest = async (formValues: formValues) => {
    const { data } = await api.post(`standardMail`, formValues);

    console.log(data);
    if (data.success) {
      toast.success(data.succes, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } else {
      toast.error(data.error, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (form) => {
          console.log('click');
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
                  <label className='text-slate-400 uppercase text-sm font-medium pl-4 '>
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
                    <p className='text-base font-medium text-red-700 pl-4'>
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className='pt-1 pb-1'>
                  <label className='text-slate-400 uppercase text-sm font-medium pl-4 pt-1'>
                    Correo Electrónico
                  </label>
                  <div className='flex items-center border rounded-sm mx-4'>
                    <Field
                      className='appearance-none bg-slate-200 text-sm border-slate-400 w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none'
                      type='email'
                      name='mail'
                      placeholder='Correo electrónico'
                    />
                  </div>
                  {touched.mail && errors.mail && (
                    <p className='text-base font-medium text-red-700 pl-4'>
                      {errors.mail}
                    </p>
                  )}
                </div>
                <div className='pt-1 pb-1'>
                  <label className='text-slate-400 uppercase text-sm font-medium pl-4 pt-1'>
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
                    <p className='text-base font-medium text-red-700 pl-4'>
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div className='pt-1 pb-1'>
                  <label className='text-slate-400 uppercase text-sm font-medium pl-4 pt-1'>
                    Mensaje
                  </label>
                  <div className='flex items-center border rounded-sm mx-4'>
                    <Field
                      className='appearance-none bg-slate-200 text-sm border-slate-400 w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none'
                      type='text'
                      as='textarea'
                      name='message'
                      rows='4'
                      placeholder='Mensaje'
                    />
                  </div>
                  {touched.message && errors.message && (
                    <p className='text-base font-medium text-red-700 pl-4'>
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
      <ToastContainer />
    </>
  );
};
