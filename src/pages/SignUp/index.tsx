import React, { useCallback } from 'react';

import * as Yup from 'yup';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import imageLogo from '../../assets/logo.svg';
import { Container, Background, Content } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: any) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O Nome é obrigátorio'),
        email: Yup.string()
          .required('O email é obrigátorio')
          .email('Digite um email valido'),
        password: Yup.string().min(6, 'No minímo 6 digitos'),
      });

      await schema.validate(data, { abortEarly: false });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <img src={imageLogo} alt="" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>

          <Input name="User" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="email" placeholder="Email" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>
        </Form>

        <a href="/">
          <FiArrowLeft size={20} />
          Voltar pra logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
