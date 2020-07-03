import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import imageLogo from '../../assets/logo.svg';

import { Container, Background, Content } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={imageLogo} alt="" />
        <form>
          <h1>Faça seu Login</h1>

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />

          <button type="submit">Entrar</button>

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
