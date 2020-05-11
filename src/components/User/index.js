import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import 'mobx-react-lite/batchingForReactNative';

import {
  Container,
  Avatar,
  Name,
  Bio,
  ButtonContent,
  Button,
  ButtonText,
  IconDelete,
} from './styles';

const User = inject('usersStore')(
  observer(({ navigation, user, usersStore }) => {
    return (
      <Container>
        <Avatar source={{ uri: user.avatar }} />
        {user.name ? <Name>{user.name}</Name> : <Name>{user.login}</Name>}
        <Bio>{user.bio}</Bio>

        <ButtonContent>
          <Button onPress={() => navigation.navigate('User', { user })}>
            <ButtonText>ver perfil</ButtonText>
          </Button>

          <Button onPress={() => usersStore.deleteUser(user)}>
            <IconDelete />
          </Button>
        </ButtonContent>
      </Container>
    );
  })
);

User.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,

  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
};

export default User;
