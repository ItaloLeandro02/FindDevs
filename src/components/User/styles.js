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
  align-items: center;
  margin: 0 ${widthPercentageToDP('4%')}px ${heightPercentageToDP('4.4')}px;
`;

export const Avatar = styled.Image`
  width: ${widthPercentageToDP('13.3%')}px;
  height: ${heightPercentageToDP('9.5%')}px;
  border-radius: ${widthPercentageToDP('6.6%')}px;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: ${widthPercentageToDP('4%')}px;
  color: #333;
  font-weight: bold;
  margin-top: ${heightPercentageToDP('0.6%')}px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: ${widthPercentageToDP('3%')}px;
  line-height: ${heightPercentageToDP('2.7%')}px;
  color: #999;
  margin-top: ${heightPercentageToDP('0.8%')}px;
  text-align: center;
`;

export const ButtonContent = styled.View`
  flex-direction: row;
`;

export const Button = styled(RectButton)`
  margin: ${widthPercentageToDP('2.1%')}px;
  align-self: stretch;
  border: ${widthPercentageToDP('0.9%')}px;
  background: #7159c1;
  justify-content: center;
  align-items: center;
  height: ${heightPercentageToDP('5.4%')}px;
`;

export const ButtonText = styled.Text`
  font-size: ${widthPercentageToDP('3%')}px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  padding: ${widthPercentageToDP('3.1%')}px;
`;

export const IconDelete = styled(Icon).attrs({
  name: 'delete',
  size: widthPercentageToDP('4.1%'),
  color: '#FFF',
})``;
