import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import imageLogo from '../../assets/logo.svg';
import { Container, Background, Content } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SignUp: React.FC = () => {
  function handleSubmit(data: any) {
    console.log(data);
  }

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
