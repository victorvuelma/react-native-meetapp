import styled from 'styled-components/native';

import { Platform } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0 30px;
`;

export const Form = styled.View`
  margin-top: 50px;
  align-self: stretch;
`;
export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;
export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;
export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;
export const SingLinkText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
`;
