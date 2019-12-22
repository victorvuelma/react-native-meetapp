import React from 'react';
import { Image } from 'react-native';

import { useNavigation } from 'react-navigation-hooks';

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

export default function SignUp() {
  const navigation = useNavigation();

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
          />

          <FormInput
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
          />

          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Sua senha secreta"
            returnKeyType="send"
          />
          <SubmitButton>Criar conta</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SingLinkText>Já tenho login</SingLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
