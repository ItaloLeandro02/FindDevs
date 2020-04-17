import React, { useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
  Loading,
  NoFavorites,
  IconAlert,
} from './styles';
import api from '../../services/api';

const User = ({ navigation, route }) => {
  const [state, setState] = useState({
    starts: [],
    loading: false,
  });
  const { user } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: user.name,
    });
  }, [navigation, route.name]);

  useEffect(() => {
    const getDataUser = async () => {
      setState({ ...state, loading: true });

      const response = await api.get(`/users/${user.login}/starred`);

      setState({ ...state, starts: response.data, loading: false });
    };

    getDataUser();
  }, [navigation, route.name]);

  const { starts, loading } = state;

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: user.avatar }} />
        <Name>{user.name}</Name>
        <Bio>{user.bio}</Bio>
      </Header>

      {loading && <Loading size={50} />}

      {!loading &&
        (starts.length > 0 ? (
          <Stars
            data={starts}
            keyExtractor={(star) => String(star.id)}
            renderItem={({ item }) => (
              <Starred>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
          />
        ) : (
          <>
            <NoFavorites>Sem favoritos</NoFavorites>
            <IconAlert />
          </>
        ))}
    </Container>
  );
};

User.propTypes = {
  navigation: PropTypes.shape().isRequired,
  route: PropTypes.shape().isRequired,
};

export default User;
