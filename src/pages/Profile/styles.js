import styled from 'styled-components/native';

import { Platform } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  margin: 20px 20px 0;
`;

export const Form = styled.View`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const SignOutButton = styled(Button)`
  margin-top: 15px;
  background: #d44059;
  height: 42px;
`;

export const Separator = styled.View`
  margin: 20px 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
`;
