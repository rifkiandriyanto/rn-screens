import React, {Component} from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './home';
import Profile from '../screens/profile';
import Chat from '../screens/chat';
import Search from '../screens/search';
import Report from './report';

import homeicon from '../assets/icon/home.png';
// import tagicon from '../assets/icon/tag.png';
import historyicon from '../assets/icon/history.png';
import usericon from '../assets/icon/user.png';
import add from '../assets/icon/add.png';
import comment from '../assets/icon/comment.png';


const BottomTab = createBottomTabNavigator();

export default class Tab extends Component {
  render() {
    return (
      <BottomTab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: '#fff',
          },
          activeTintColor: '#1D75D1',
        }}>
        <BottomTab.Screen
          options={{
            title: 'Home',
            tabBarIcon: ({color, size}) => (
              <Image source={homeicon} style={{width: 15, height: 15, tintColor: '#000'}} />
            ),
          }}
          component={Home}
          name="home"
        />
        <BottomTab.Screen
          options={{
            title: 'Chat',
            tabBarIcon: ({color, size}) => (
              <Image source={comment} style={{width: 15, height: 15, tintColor: '#000'}} />
            ),
          }}
          component={Chat}
          name="chat"
        />
        <BottomTab.Screen
          options={{
            title: 'Report',
            tabBarIcon: ({color, size}) => (
              <Image source={add} style={{width: 15, height: 15, tintColor: '#000'}} />
            ),
          }}
          component={Report}
          name="report"
        />
        <BottomTab.Screen
          options={{
            title: 'Search',
            tabBarIcon: ({color, size}) => (
              <Image source={historyicon} style={{width: 15, height: 15, tintColor: '#000'}} />
            ),
          }}
          component={Search}
          name="search"
        />
        <BottomTab.Screen
          options={{
            title: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Image source={usericon} style={{width: 15, height: 15, tintColor: '#000'}} />
            ),
          }}
          component={Profile}
          name="profile"
        />
      </BottomTab.Navigator>
    );
  }
}
