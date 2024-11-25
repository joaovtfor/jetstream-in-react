import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import ApplicationLogo from '@/Components/ApplicationLogo';

import logo from '../../../assets/logos/Logo-lisa.png'

import SecondApplicationLogo from '@/Components/SecondApplicationLogo';

const LoginContainer = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;

    const LoginBackground = styled.div`
    `;

const Login = ({ status, canResetPassword }: { status?: string; canResetPassword: boolean; }) => {

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: React.FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <div className='w-full overflow-hidden flex flex-col sm:justify-center items-center pt-6 sm:pt-0'>
            <Head title="Entrar" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <div className='w-full max-h-screen overflow-hidden'>
                <img className='h-full flex items-center m-auto absolute top-0 bottom-0 right-0 left-0 opacity-40 object-cover' src={logo} alt="Logo" />
            </div>

            <LoginBackground className='w-full sm:max-w-sm px-6 py-4 overflow-hidden absolute inset-0 bg-background opacity-50 border-r-[1px] border-r-theme-blue-2' />

            <LoginContainer className='w-full sm:max-w-sm px-6 py-4 overflow-hidden absolute inset-0'>

                <div className='flex h-auto w-full'>
                    <ApplicationLogo />
                    <SecondApplicationLogo />
                </div>

                <form onSubmit={submit} className='flex flex-col items-stretch'>
                    <div>
                        <InputLabel htmlFor="email" value="E-Mail" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className='mt-4'>
                        <InputLabel htmlFor="password" value="Senha" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="block mt-4">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData('remember', e.target.checked)
                                }
                            />
                            <span className="ms-2 text-sm text-theme-blue-2 dark:text-gray-400">
                                Lembre de mim
                            </span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="underline text-sm text-theme-blue-2 dark:text-theme-blue-2 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                            >
                                Esqueceu sua senha?
                            </Link>
                        )}

                        <PrimaryButton className="ms-4" disabled={processing}>
                            Entrar
                        </PrimaryButton>
                    </div>
                </form>
            </LoginContainer>
        </div>
    );
};

export default Login;