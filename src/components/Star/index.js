import React from 'react';
import PropTypes from 'prop-types';

import { Author, Container, Info, OwnerAvatar, Title } from './styles';

const Star = ({ star }) => {
  return (
    <Container>
      <OwnerAvatar source={{ uri: star.owner.avatar_url }} />
      <Info>
        <Title>{star.name}</Title>
        <Author>{star.owner.login}</Author>
      </Info>
    </Container>
  );
};

Star.propTypes = {
  star: PropTypes.shape({
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }),
    name: PropTypes.string,
  }).isRequired,
};

export default Star;
