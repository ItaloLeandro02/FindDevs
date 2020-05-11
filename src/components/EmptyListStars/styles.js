import styled from 'styled-components/native';
import { Dimensions, PixelRatio } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const widthPercentageToDP = (widthPercent) => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(widthPercent)) / 100
  );
};

// const heightPercentageToDP = (heightPercent) => {
//   const screenHeight = Dimensions.get('window').height;
//   return PixelRatio.roundToNearestPixel(
//     (screenHeight * parseFloat(heightPercent)) / 100
//   );
// };

export const Container = styled.View`
  background: #f5f5f5;
  border-radius: ${widthPercentageToDP('0.9%')}px;
  align-items: center;
  flex: 1;
`;

export const IconNoStars = styled(Icon).attrs({
  name: 'star-off',
  size: widthPercentageToDP('20%'),
})``;

export const Text = styled.Text`
  font-size: ${widthPercentageToDP('5%')}px;
  text-align: center;
  font-style: italic;
  color: #666;
`;
