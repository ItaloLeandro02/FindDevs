import React, { useLayoutEffect } from 'react';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

import { Loading } from './styles';

const Repository = ({ navigation, route }) => {
  const {
    star: { html_url: htmlUrl, name },
  } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, route.name]);

  return (
    <WebView
      startInLoadingState
      source={{ uri: htmlUrl }}
      renderLoading={() => <Loading />}
    />
  );
};

Repository.propTypes = {
  navigation: PropTypes.shape({
    setOptions: PropTypes.func,
  }).isRequired,

  route: PropTypes.shape({
    params: PropTypes.shape({
      star: PropTypes.shape({
        html_url: PropTypes.string,
        name: PropTypes.string,
      }),
    }),
    name: PropTypes.string,
  }).isRequired,
};

export default Repository;
