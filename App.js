import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Tab from './src/screens/tab';
import Profile from './src/screens/profile';
import LoginForm from './src/screens/loginform';
import Login from './src/screens/login';
import Home from './src/screens/home';
import Chat from './src/screens/chat';
import Search from './src/screens/search';
import Report from './src/screens/report';
import Write from './src/screens/write';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            component={Login}
            name="login"
            options={{headerShown: false}}
          />
          <Stack.Screen
            component={LoginForm}
            name="login-form"
            options={{headerShown: false}}
          />
          <Stack.Screen
            component={Tab}
            name="mainmenu"
            options={{headerShown: false}}
          />
          <Stack.Screen
            component={Home}
            name="home"
            options={{headerShown: false}}
          />
          <Stack.Screen
            component={Profile}
            name="profile"
            options={{headerShown: false}}
          />
          <Stack.Screen
            component={Chat}
            name="chat"
            options={{headerShown: false}}
          />
          <Stack.Screen
            component={Report}
            name="report"
            options={{
              title: 'Photo Report',
              headerTintColor: '#fff',
              headerStyle: {backgroundColor: '#1D75D1'},
            }}
          />
          <Stack.Screen
            component={Write}
            name="write"
            options={{
              title: 'Photo Report',
              headerTintColor: '#fff',
              headerStyle: {backgroundColor: '#1D75D1'},
            }}
          />
          <Stack.Screen
            component={Search}
            name="search"
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
