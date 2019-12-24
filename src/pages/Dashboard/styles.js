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
