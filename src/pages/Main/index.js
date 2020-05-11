import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Keyboard, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import 'mobx-react-lite/batchingForReactNative';

import User from '../../components/User';
import EmptyListUsers from '../../components/EmptyListUsers';

import {
  Button,
  Container,
  Form,
  IconAdd,
  IconDeleteAll,
  Input,
  Users,
} from './styles';

const Main = inject('usersStore')(
  observer(({ navigation, usersStore }) => {
    const [state, setState] = useState({
      newUser: '',
      loading: false,
    });

    useEffect(() => {
      usersStore.getUsers();
    }, []);

    const handleAddUser = async () => {
      const { newUser } = state;

      setState({ ...state, loading: true });
      await usersStore.fetchUserAsync(newUser);
      setState({ ...state, newUser: '', loading: false });

      Keyboard.dismiss();
    };

    const { newUser, loading } = state;
    const { users } = usersStore;

    return (
      <Container>
        <Form>
          <Input
            value={newUser}
            onChangeText={(text) => setState({ ...state, newUser: text })}
            onSubmitEditing={handleAddUser}
          />

          <Button enabled loading={loading} onPress={handleAddUser}>
            {loading ? <ActivityIndicator color="#FFF" /> : <IconAdd />}
          </Button>
          <Button
            enabled={users.length > 0}
            onPress={() => usersStore.deleteAllUsers()}
          >
            <IconDeleteAll />
          </Button>
        </Form>

        <Users
          data={toJS(users)}
          refreshing={loading}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={async () => {
                await usersStore.getUsers();
              }}
            />
          }
          keyExtractor={(user) => String(user.login)}
          renderItem={({ item }) => (
            <User navigation={navigation} user={item} />
          )}
          ListEmptyComponent={<EmptyListUsers />}
        />
      </Container>
    );
  })
);

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Main;
