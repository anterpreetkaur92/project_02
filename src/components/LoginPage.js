import React from 'react';
import '../App.css';
import { useHistory } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Header1 from './Header1';

const LoginPage = () => {
    let history = useHistory();
    return (
        <div className='bg-gray-50 h-screen w-screen'>
            <Header1 />
            <div className=' pt-40 m-4 font-sans flex flex-col justify-center items-center italic text-3xl tracking-wider font-semibold font-6xl'  >Welcome Back</div>
            <div className='pt-46 w-screen flex flex-col justify-center items-center'>
                <div className='w-auto border-2 bg-white p-4'>
                    <div className='flex'>

                        <Formik initialValues={{ email: '', password: '', checked: '' }}
                            validate={values => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = 'Required';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                } else if (!values.checked) {
                                    errors.checked = "Remember me Required"
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}>{({ isSubmitting }) => (
                                <Form>
                                    <div className="flex">
                                        
                                        <div className="m-1 bg-white">
                                        <label htmlFor="email">Email Address*</label><br />
                                            <Field className='pr-2 border-2 bg-gray-100 w-48 bg-opacity-80 ' type="email" name="email" />
                                            <ErrorMessage name="email" component="div" /></div>
                                        <div className='m-1 bg-white'>
                                            <label htmlFor="password">Password*</label><br />
                                            <Field className='pr-2 border-2 bg-gray-100 w-48 bg-opacity-80' type="password" name="password" />
                                            <ErrorMessage name="password" component="div" />
                                        </div>
                                    </div>
                                    <label><Field type="checkbox" name="checked" value="Remember me" />
                                        <ErrorMessage name='checked' component="div" />Remember me </label>
                                    <div className='flex ml-2'>
                                        <div>
                                            <button onClick={() => { history.push("/login") }} className='font-bold border-2 border-white bg-white w-48 p-2 px-6 hover:border-red-600 hover:bg-red-100'>Login</button>
                                        </div>
                                        <div>
                                            <button onClick={() => { history.push("/resetpassword") }} className='font-bold border-2 border-white bg-white p-2 px-6 w-48 hover:border-red-600 hover:bg-red-100'>Reset Password</button>
                                        </div>
                                    </div>

                                </Form>
                            )}</Formik>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
