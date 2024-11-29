import AppLayout from '@/Layouts/AppLayout'
import styled from 'styled-components';

import InputLabel from '@/Components/InputLabel';
import { useForm, usePage } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import Checkbox from '@/Components/Checkbox';
import PrimaryButton from '@/Components/PrimaryButton';
import { FormEventHandler } from 'react';
import SectionTitle from '@/Components/SectionTitle';

const Section = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #FFFFFF;
  border-radius: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  terms: boolean;
}

const Users = () => {
  const page: any = usePage();

  const { data, setData, post, processing, errors, reset } =
    useForm<RegisterFormData>({
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      terms: true,
    });

  const submit: React.FormEventHandler = (e) => {
    e.preventDefault();
    post(route('register'), {
      onFinish: () => reset('password', 'password_confirmation'),
    });
  };

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
        <form onSubmit={submit} className='w-full h-full px-10 py-2 pb-4 flex flex-col gap-y-14'>
          <Section>
            <div className='w-full ml-7 mt-3'>
              <SectionTitle className='text-xl' title="Informações do usuário" />
            </div>

            <div className='w-full h-auto flex flex-wrap items-center justify-around pb-5 px-5'>
              <div className='mt-4'>
                <InputLabel htmlFor="name" value="Nome" />
                <TextInput
                  id="name"
                  value={data.name}
                  onChange={(e) => setData('name', e.target.value)}
                  type="text"
                  className="block w-full mt-1"
                  required
                  autoFocus
                  autoComplete="name"
                />
                <InputError className="mt-2" message={errors.name} />
              </div>

              <div className="mt-4">
                <InputLabel htmlFor="email" value="Email" />
                <TextInput
                  id="email"
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                  type="email"
                  className="block w-full mt-1"
                  required
                  autoComplete="username"
                />
                <InputError className="mt-2" message={errors.email} />
              </div>

              <div className="mt-4">
                <InputLabel htmlFor="password" value="Senha" />
                <TextInput
                  id="password"
                  value={data.password}
                  onChange={(e) =>
                    setData('password', e.target.value)
                  }
                  type="password"
                  className="block w-full mt-1"
                  required
                  autoComplete="new-password"
                />
                <InputError
                  className="mt-2"
                  message={errors.password}
                />
              </div>

              <div className="mt-4">
                <InputLabel
                  htmlFor="password_confirmation"
                  value="Confirme a senha"
                />
                <TextInput
                  id="password_confirmation"
                  value={data.password_confirmation}
                  onChange={(e) =>
                    setData('password_confirmation', e.target.value)
                  }
                  type="password"
                  className="block w-full mt-1"
                  required
                  autoComplete="new-password"
                />
                <InputError
                  className="mt-2"
                  message={errors.password_confirmation}
                />
              </div>

              {/* {page.props.jetstream.hasTermsAndPrivacyPolicyFeature && (
                <div className="mt-4">
                  <InputLabel htmlFor="terms">
                    <div className="flex items-center">
                      <Checkbox
                        id="terms"
                        checked={data.terms}
                        onChange={(e) =>
                          setData('terms', e.target.checked)
                        }
                        name="terms"
                        required
                      />
                      <div className="ms-2">
                        I agree to the
                        <a
                          target="_blank"
                          href={route('terms.show')}
                          className="text-sm text-gray-600 underline rounded-md dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                          Terms of Service
                        </a>
                        and
                        <a
                          target="_blank"
                          href={route('policy.show')}
                          className="text-sm text-gray-600 underline rounded-md dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                          Privacy Policy
                        </a>
                      </div>
                    </div>
                    <InputError
                      className="mt-2"
                      message={errors.terms}
                    />
                  </InputLabel>
                </div>
              )} */}

            </div>
          </Section>

          <Section>
              <div className='w-full ml-7 mt-3'>
                <SectionTitle className='text-xl' title="Permissões de usuário" />

                <div className='h-auto flex items-center justify-around flex-wrap flex-1/3 pb-5 px-5'>
                  <div className="block mt-4">
                    <label className="flex items-center">
                      <Checkbox
                        name="remember"
                        // checked={data.remember}
                        onChange={(e) =>
                          console.log("Teste")
                          // setData('remember', e.target.checked)
                        }
                      />
                      <span className="ms-2 text-sm text-theme-blue-2 dark:text-gray-400">
                        Coordenação Geral
                      </span>
                    </label>
                  </div>
                  <div className="block mt-4">
                    <label className="flex items-center">
                      <Checkbox
                        name="remember"
                        // checked={data.remember}
                        onChange={(e) =>
                          console.log("Teste")
                          // setData('remember', e.target.checked)
                        }
                      />
                      <span className="ms-2 text-sm text-theme-blue-2 dark:text-gray-400">
                        Coordenação Geral
                      </span>
                    </label>
                  </div>
                  <div className="block mt-4">
                    <label className="flex items-center">
                      <Checkbox
                        name="remember"
                        // checked={data.remember}
                        onChange={(e) =>
                          console.log("Teste")
                          // setData('remember', e.target.checked)
                        }
                      />
                      <span className="ms-2 text-sm text-theme-blue-2 dark:text-gray-400">
                        Coordenação Geral
                      </span>
                    </label>
                  </div>
                  <div className="block mt-4">
                    <label className="flex items-center">
                      <Checkbox
                        name="remember"
                        // checked={data.remember}
                        onChange={(e) =>
                          console.log("Teste")
                          // setData('remember', e.target.checked)
                        }
                      />
                      <span className="ms-2 text-sm text-theme-blue-2 dark:text-gray-400">
                        Coordenação Geral
                      </span>
                    </label>
                  </div>
                  <div className="block mt-4">
                    <label className="flex items-center">
                      <Checkbox
                        name="remember"
                        // checked={data.remember}
                        onChange={(e) =>
                          console.log("Teste")
                          // setData('remember', e.target.checked)
                        }
                      />
                      <span className="ms-2 text-sm text-theme-blue-2 dark:text-gray-400">
                        Coordenação Geral
                      </span>
                    </label>
                  </div>
                  <div className="block mt-4">
                    <label className="flex items-center">
                      <Checkbox
                        name="remember"
                        // checked={data.remember}
                        onChange={(e) =>
                          console.log("Teste")
                          // setData('remember', e.target.checked)
                        }
                      />
                      <span className="ms-2 text-sm text-theme-blue-2 dark:text-gray-400">
                        Coordenação Geral
                      </span>
                    </label>
                  </div>
                </div>

              </div>

            </Section>
          <div className="flex items-center justify-end">
            <PrimaryButton
              className={`ms-4 ${processing ? 'opacity-25' : ''}`}
              disabled={processing}
            >
              Salvar
            </PrimaryButton>
          </div>
        </form>
      </div>
    </AppLayout >
  )
}

export default Users