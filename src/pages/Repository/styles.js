import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

export const Loading = styled(ActivityIndicator).attrs({
  size: 'large',
})`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;
