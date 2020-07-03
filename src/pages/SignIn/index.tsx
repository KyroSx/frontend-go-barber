import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import imageLogo from '../../assets/logo.svg';
import { Container, Background, Content } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={imageLogo} alt="" />
        <form>
          <h1>Faça seu Login</h1>

          <Input name="email" icon={FiMail} type="email" placeholder="Email" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <a href="/">Esqueci minha senha</a>
        </form>

        <a href="/">
          <FiLogIn size={20} />
          Criar Conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
