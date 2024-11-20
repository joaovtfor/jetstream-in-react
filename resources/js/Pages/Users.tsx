import AppLayout from '@/Layouts/AppLayout'
import styled from 'styled-components';

import ArrowIcon from '../../assets/svg/arrow_right.svg'
import InputLabel from '@/Components/InputLabel';
import { useForm } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import Checkbox from '@/Components/Checkbox';
import PrimaryButton from '@/Components/PrimaryButton';
import { useEffect } from 'react';

const Users = () => {

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

  const Section = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
    background-color: #FFFFFF;
    border-radius: 20px;
  `;

  return (
    <AppLayout
      title="Users"
      header={
        <div className='flex items-center gap-2'>
          <h2 className="text-2xl font-semibold leading-tight text-theme-blue-2 dark:text-theme-blue-2">
            {'Cadastros > '}
          </h2>
          <h4 className="text-md font-semibold leading-tight text-theme-blue-2 dark:text-theme-blue-2">
            {'Usuário'}
          </h4>
        </div>
      }
    >
      <div className='w-full h-full flex flex-col item-center justify-center'>
        <Section>
          <form onSubmit={submit}>
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

            <div className="flex items-center justify-center mt-4">
              <PrimaryButton className="m-auto" disabled={processing}>
                Entrar
              </PrimaryButton>
            </div>
          </form>
        </Section>
        <Section>a</Section>
      </div>
    </AppLayout>
  )
}

export default Users