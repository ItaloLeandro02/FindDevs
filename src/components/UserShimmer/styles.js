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
  align-items: center;
  margin: 0 ${widthPercentageToDP('4%')}px ${heightPercentageToDP('4.4')}px;
`;

export const Avatar = styled(ShimmerPlaceholder).attrs({
  autoRun: true,
})`
  width: ${widthPercentageToDP('13.3%')}px;
  height: ${heightPercentageToDP('9.5%')}px;
  border-radius: ${widthPercentageToDP('6.6%')}px;
`;

export const Text = styled(ShimmerPlaceholder).attrs({
  autoRun: true,
  height: heightPercentageToDP('2.3%'),
})`
  margin-top: ${heightPercentageToDP('1%')}px;
`;

export const ButtonContent = styled.View`
  flex-direction: row;
`;

export const ButtonVerPerfil = styled(ShimmerPlaceholder).attrs({
  autoRun: true,
})`
  margin-top: ${heightPercentageToDP('1.5%')}px;
  width: ${widthPercentageToDP('25.1%')}px;
  height: ${heightPercentageToDP('5.2%')}px;
`;

export const ButtonDelete = styled(ShimmerPlaceholder).attrs({
  autoRun: true,
})`
  margin-top: ${heightPercentageToDP('1.5%')}px;
  margin-left: ${widthPercentageToDP('2.1%')}px;
  width: ${widthPercentageToDP('6.3%')}px;
  height: ${heightPercentageToDP('5.2%')}px;
`;
