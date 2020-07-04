import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import imageLogo from '../../assets/logo.svg';
import { Container, Background, Content } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />

      <Content>
        <img src={imageLogo} alt="" />
        <form>
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
        </form>

        <a href="/">
          <FiArrowLeft size={20} />
          Voltar pra logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
