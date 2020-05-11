import { observable, action, decorate } from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';

import api from '../services/api';

export default class UsersStore {
  users = [];

  async fetchUserAsync(userLogin) {
    try {
      this.isRefresing = true;

      const response = await api.get(`/users/${userLogin}`);

      const data = {
        name: response.data.name,
        login: response.data.login,
        bio: response.data.bio,
        avatar: response.data.avatar_url,
      };

      const user = this.users.find((x) => x.login === data.login);

      if (!user) {
        this.users.push(data);
      }
    } catch (error) {
      Alert.alert(error.response.message);
    } finally {
      this.isRefresing = false;
      this.getUsers();
    }
  }

  async getUsers() {
    if (this.users.length > 0) {
      AsyncStorage.setItem('users', JSON.stringify(this.users));
    } else {
      const usersStorage = await AsyncStorage.getItem('users');

      if (usersStorage) {
        this.users = JSON.parse(usersStorage);
      }
    }
  }

  deleteAllUsers() {
    this.users = [];
    AsyncStorage.clear();
  }

  deleteUser(user) {
    this.users = this.users.filter((x) => x.login !== user.login);
    AsyncStorage.setItem('users', JSON.stringify(this.users));
  }
}

decorate(UsersStore, {
  users: observable,
  fetchUserAsync: action,
});
