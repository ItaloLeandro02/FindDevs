import React, { useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Star from '../../components/Star';
import StarShimmer from '../../components/StarShimmer';
import EmptyListStars from '../../components/EmptyListStars';
import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  TextHeader,
} from './styles';
import api from '../../services/api';

const User = ({ navigation, route }) => {
  const [state, setState] = useState({
    stars: [],
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

      setState({ ...state, stars: response.data, loading: false });
    };

    getDataUser();
  }, [navigation, route.name]);

  const { stars, loading } = state;

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: user.avatar }} />
        {user.name ? <Name>{user.name}</Name> : <Name>{user.login}</Name>}
        <Bio>{user.bio}</Bio>
      </Header>

      {loading ? (
        <>
          <StarShimmer />
          <StarShimmer />
          <StarShimmer />
        </>
      ) : (
        <Stars
          data={stars}
          keyExtractor={(star) => String(star.id)}
          ListHeaderComponent={<TextHeader>Favoritos</TextHeader>}
          renderItem={({ item }) => <Star star={item} />}
          ListEmptyComponent={<EmptyListStars />}
        />
      )}
    </Container>
  );
};

User.propTypes = {
  navigation: PropTypes.shape().isRequired,
  route: PropTypes.shape().isRequired,
};

export default User;
