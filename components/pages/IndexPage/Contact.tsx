import { FC } from 'react';
import { Formik, Form, Field } from 'formik';

interface formValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const Contact: FC = () => {
  const initialValues: formValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  return (
    <div className='grid grid-cols-2'>
      <div className=''>
        <div className='p-8'>
          <Formik initialValues={initialValues} onSubmit={() => {}}>
            {() => (
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
                  <div className='flex items-center border-b border-teal-300 pt-5'>
                    <Field
                      className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                      type='email'
                      name='email'
                      placeholder='Correo electrónico'
                    />
                  </div>
                  <div className='flex items-center border-b border-teal-300 pt-5'>
                    <Field
                      className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                      type='text'
                      name='phone'
                      placeholder='Nombre'
                    />
                  </div>
                  <div className='flex items-center border-b border-teal-300 pt-5'>
                    <Field
                      className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                      type='text'
                      as='textarea'
                      name='message'
                      placeholder='Mensaje'
                    />
                  </div>
                  <button className='py-2 px-2 bg-teal-400 hover:bg-teal-500 rounded text-white mt-4'>
                    Enviar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <img
          src='https://res.cloudinary.com/logicielapplab/image/upload/v1676298548/LogicielApplab/Social_Communication_1_ka6uog.svg'
          alt=''
        />
      </div>
    </div>
  );
};
