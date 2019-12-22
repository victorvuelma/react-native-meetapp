import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  height: 50px;

  align-items: center;
  flex-direction: row;
`;
export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255,0.5)',
})`
  flex: 1;
  margin-left: 5px;
  font-size: 18px;
  color: #fff;
`;
