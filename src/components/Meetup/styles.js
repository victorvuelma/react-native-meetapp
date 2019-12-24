import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  border-radius: 4px;
  height: 350px;
  margin-bottom: 20px;
`;

export const Image = styled.Image`
  height: 150px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Info = styled.View`
  flex: 1;
  background: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  opacity: ${props => (props.disabled ? 0.8 : 1)};
`;

export const Title = styled.Text`
  color: #333;
  margin: 20px 20px 0;
  font-weight: bold;
  font-size: 18;
`;

export const DetailsList = styled.View`
  flex: 1;
  flex-direction: column;
  margin: 10px 20px 0;
`;

export const DetailsItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 5px 0 0;
`;

export const DetailsText = styled.Text`
  color: #999;
  font-size: 13;
  margin-left: 5px;
`;

export const ActionButton = styled(Button)`
  height: 40px;
  margin: 0 20px 20px;
  font-size: 16px;
`;
