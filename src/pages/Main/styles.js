import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Dimensions, PixelRatio } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const widthPercentageToDP = (widthPercent) => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(widthPercent)) / 100
  );
};

const heightPercentageToDP = (heightPercent) => {
  const screenHeight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel(
    (screenHeight * parseFloat(heightPercent)) / 100
  );
};

export const Container = styled.View`
  flex: 1;
  padding: ${widthPercentageToDP('6.2%')}px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: ${heightPercentageToDP('4.4%')}px;
  border-bottom-width: ${widthPercentageToDP('0.3%')}px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
  autoCorrect: false,
  autoCapitalize: 'none',
  placeholder: 'Adicionar usuário',
  returnKeyType: 'send',
})`
  flex: 1;
  height: ${heightPercentageToDP('6%')}px;
  background: #eee;
  border-radius: ${widthPercentageToDP('0.9%')}px;
  padding: 0 ${widthPercentageToDP('3.1%')}px;
  border: ${widthPercentageToDP('0.3%')}px solid #eee;
`;

export const Button = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: ${widthPercentageToDP('0.9%')}px;
  margin-left: ${widthPercentageToDP('2.1%')}px;
  padding: 0 ${widthPercentageToDP('2.6%')}px;
  opacity: ${({ loading, enabled }) => (loading || !enabled ? 0.7 : 1)};
`;

export const IconAdd = styled(Icon).attrs({
  name: 'add',
  size: widthPercentageToDP('4.1%'),
  color: '#FFF',
})``;

export const IconDeleteAll = styled(Icon).attrs({
  name: 'delete-forever',
  size: widthPercentageToDP('4.1%'),
  color: '#FFF',
})``;

export const Users = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  initialNumToRender: 5,
})`
  margin-top: ${heightPercentageToDP('4.4%')}px;
`;
