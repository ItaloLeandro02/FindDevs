import React from 'react';

import { Container, IconNoStars, Text } from './styles';

const EmptyListStars = () => {
  return (
    <Container>
      <IconNoStars />
      <Text>Este usuário não tem projetos favoritados</Text>
    </Container>
  );
};

export default EmptyListStars;
