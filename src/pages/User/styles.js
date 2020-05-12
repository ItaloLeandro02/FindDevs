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
  flex: 1;
  padding: ${widthPercentageToDP('6.3%')}px;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: ${heightPercentageToDP('3%')}px;
  border-bottom-width: ${heightPercentageToDP('0.2%')}px;
  border-color: #eee;
`;

export const Avatar = styled.Image`
  width: ${widthPercentageToDP('20.9%')}px;
  height: ${heightPercentageToDP('14.9%')}px;
  border-radius: ${widthPercentageToDP('10.5%')}px;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: ${widthPercentageToDP('4.2%')}px;
  color: #333;
  font-weight: bold;
  margin-top: ${heightPercentageToDP('1.5%')}px;
  text-align: center;
`;

export const Bio = styled.Text`
  font-size: ${widthPercentageToDP('3%')}px;
  line-height: ${heightPercentageToDP('2.7%')}px;
  color: #999;
  margin-top: ${heightPercentageToDP('0.8%')}px;
  text-align: center;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  initialNumToRender: 5,
})`
  margin-top: ${heightPercentageToDP('3%')}px;
`;

export const TextHeader = styled.Text`
  font-size: ${widthPercentageToDP('5%')}px;
  font-weight: bold;
  padding-bottom: ${heightPercentageToDP('2%')}px;
  color: #333;
`;
