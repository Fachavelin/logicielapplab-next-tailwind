import { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';

import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es requerido'),
  email: Yup.string()
    .email('Invalid email')
    .required('El correo electrónico es requerido'),
  phone: Yup.string().required('El número de teléfono es requerido'),
  message: Yup.string().required('El mensaje es requerido'),
});

interface formValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialValues: formValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export const ContactForm: FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(form) => {
        console.log(form);
        Swal.fire({
          icon: 'success',
          title: 'Gracias por contactarnos',
          text: 'Un administrador se pondra en contacto contigo pronto',
          timer: 2500,
          showConfirmButton: false,
        });
      }}
    >
      {({ touched, errors }) => (
        <Form>
          <p className='text-center text-3xl font-semibold pt-6'>
            ¡Escríbenos!
          </p>
          <div className='grid'>
            <div className='flex items-center border-b border-teal-300 pt-5'>
              <Field
                className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                type='text'
                name='name'
                placeholder='Nombre'
              />
            </div>
            {touched.name && errors.name && (
              <p className='pl-4 text-sm font-medium text-red-600'>
                {errors.name}
              </p>
            )}
            <div className='flex items-center border-b border-teal-300 pt-5'>
              <Field
                className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                type='email'
                name='email'
                placeholder='Correo electrónico'
              />
            </div>
            {touched.email && errors.email && (
              <p className='pl-4 text-sm font-medium text-red-600'>
                {errors.email}
              </p>
            )}
            <div className='flex items-center border-b border-teal-300 pt-5'>
              <Field
                className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                type='text'
                name='phone'
                placeholder='Número de teléfono'
              />
            </div>
            {touched.phone && errors.phone && (
              <p className='pl-4 text-sm font-medium text-red-600'>
                {errors.phone}
              </p>
            )}
            <div className='flex items-center border-b border-teal-300 pt-5'>
              <Field
                className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                type='text'
                as='textarea'
                name='message'
                placeholder='Mensaje'
              />
            </div>
            {touched.message && errors.message && (
              <p className='pl-4 text-sm font-medium text-red-600'>
                {errors.message}
              </p>
            )}
            <button
              type='submit'
              className='py-2 px-2 bg-teal-400 hover:bg-teal-500 rounded text-white mt-4'
            >
              Enviar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
