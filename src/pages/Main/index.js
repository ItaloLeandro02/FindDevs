import React, { useEffect, useState } from 'react';
import { Keyboard, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';

import api from '../../services/api';

const Main = ({ navigation }) => {
  const [state, setState] = useState({
    newUser: '',
    users: [],
    loading: false,
  });

  useEffect(() => {
    const getFavoritesStorage = async () => {
      const { users } = state;

      if (users.length > 0) {
        AsyncStorage.setItem('users', JSON.stringify(users));
      } else {
        const usersStorage = await AsyncStorage.getItem('users');

        if (usersStorage) {
          setState({ ...state, users: JSON.parse(usersStorage) });
        }
      }
    };

    getFavoritesStorage();
  }, [state.users]);

  const handleAddUser = async () => {
    try {
      const { newUser, users } = state;
      setState({ ...state, loading: true });

      const response = await api.get(`/users/${newUser}`);

      const data = {
        name: response.data.name,
        login: response.data.login,
        bio: response.data.bio,
        avatar: response.data.avatar_url,
      };

      setState({
        users: [...users, data],
        newUser: '',
        loading: false,
      });

      Keyboard.dismiss();
    } catch (error) {
      console.tron.log(error);
    }
  };

  const handleNavigate = (user) => {
    navigation.navigate('User', { user });
  };

  const { newUser, users, loading } = state;

  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar usuário"
          value={newUser}
          onChangeText={(text) => setState({ ...state, newUser: text })}
          returnKeyType="send"
          onSubmitEditing={handleAddUser}
        />

        <SubmitButton loading={loading} onPress={handleAddUser}>
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Icon name="add" size={20} color="#FFF" />
          )}
        </SubmitButton>
      </Form>

      <List
        data={users}
        keyExtractor={(user) => user.login}
        renderItem={({ item }) => (
          <User>
            <Avatar source={{ uri: item.avatar }} />
            <Name>{item.name}</Name>
            <Bio>{item.bio}</Bio>

            <ProfileButton onPress={() => handleNavigate(item)}>
              <ProfileButtonText>ver perfil</ProfileButtonText>
            </ProfileButton>
          </User>
        )}
      />
    </Container>
  );
};

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Main;
