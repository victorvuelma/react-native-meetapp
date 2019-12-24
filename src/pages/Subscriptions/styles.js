import styled from 'styled-components/native';

export const MeetupList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  margin: 20px 20px 0;
`;

export const Info = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InfoText = styled.Text`
  color: #fff;
  font-size: 16;
  margin: 20px 0;
`;
