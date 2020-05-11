import React from 'react';

import { Container, IconNoUsers, Text } from './styles';

const EmptyListUsers = () => {
  return (
    <Container>
      <IconNoUsers />
      <Text>Use o campo de busca para encontrar novos programadores</Text>
    </Container>
  );
};

export default EmptyListUsers;
