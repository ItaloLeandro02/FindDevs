import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

const screenOptions = {
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: '#7159c1',
  },
  headerTintColor: '#FFF',
};

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen
          name="User"
          component={User}
          options={User.screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
