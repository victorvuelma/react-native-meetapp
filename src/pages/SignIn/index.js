import React from 'react';
import { Image } from 'react-native';

import Background from '~/components/Background';

import logo from '~/assets/logo.png';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SingLinkText,
} from './styles';

export default function SignIn() {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="none"
          />

          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Sua senha secreta"
            returnKeyType="send"
          />
          <SubmitButton>Entrar</SubmitButton>
        </Form>

        <SignLink>
          <SingLinkText>Criar conta gratuita</SingLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
