import React from 'react';

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

export default Star;
