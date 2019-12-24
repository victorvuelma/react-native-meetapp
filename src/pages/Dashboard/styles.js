import styled from 'styled-components/native';

export const MeetupList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  margin: 0 20px;
`;

export const DateSelector = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
`;

export const DateChange = styled.TouchableOpacity``;

export const DateText = styled.Text`
  color: #fff;
  font-weight: bold;
  margin: 0 15px;
  font-size: 20;
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
