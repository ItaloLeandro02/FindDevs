import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
  flex: 1;
  align-items: center;
  margin-top: ${heightPercentageToDP('15%')}px;
`;

export const IconNoUsers = styled(Icon).attrs({
  name: 'users',
  size: widthPercentageToDP('20%'),
})``;

export const Text = styled.Text`
  font-size: ${widthPercentageToDP('5%')}px;
  text-align: center;
  font-style: italic;
  color: #666;
`;
