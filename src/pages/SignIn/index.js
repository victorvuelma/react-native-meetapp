import React from 'react';

import Background from '~/components/Background';
import Input from '~/components/Input';
import Button from '~/components/Button';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <Background>
      <Input
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Digite seu e-mail"
        returnKeyType="none"
      />
      <Button>Hey!</Button>
    </Background>
  );
}
