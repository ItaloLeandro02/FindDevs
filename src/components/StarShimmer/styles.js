import styled from 'styled-components/native';
import { Dimensions, PixelRatio } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

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

export const Avatar = styled(ShimmerPlaceholder).attrs({
  autoRun: true,
})`
  width: ${widthPercentageToDP('8.8%')}px;
  height: ${heightPercentageToDP('6.3%')}px;
  border-radius: ${widthPercentageToDP('4.4%')}px;
`;

export const Info = styled.View`
  margin-left: ${widthPercentageToDP('2.1%')}px;
  flex: 1;
`;

export const Text = styled(ShimmerPlaceholder).attrs({
  autoRun: true,
})`
  padding-bottom: ${(props) =>
    props.first ? heightPercentageToDP('0.8%') : 0}px;
  padding-top: ${(props) =>
    !props.first ? heightPercentageToDP('0.8%') : 0}px;
`;
