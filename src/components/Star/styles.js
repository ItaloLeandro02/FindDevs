import styled from 'styled-components/native';
import { Dimensions, PixelRatio } from 'react-native';

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
  background: #f5f5f5;
  border-radius: ${widthPercentageToDP('0.9%')}px;
  padding: ${heightPercentageToDP('1.5%')}px ${widthPercentageToDP('3.2%')}px;
  flex-direction: row;
  align-items: center;
`;

export const OwnerAvatar = styled.Image`
  width: ${widthPercentageToDP('8.8%')}px;
  height: ${heightPercentageToDP('6.3%')}px;
  border-radius: ${widthPercentageToDP('4.4%')}px;
  background: #eee;
`;

export const Info = styled.View`
  margin-left: ${widthPercentageToDP('2.1%')}px;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${widthPercentageToDP('3.2%')}px;
  font-weight: bold;
  color: #333;
`;

export const Author = styled.Text`
  font-size: ${widthPercentageToDP('2.8%')}px;
  color: #666;
  margin-top: ${heightPercentageToDP('0.3%')}px;
`;
