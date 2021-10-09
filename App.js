import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './components/screens/Home';
import Jobs from './components/screens/Jobs';
import Profile from './components/screens/Profile';

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Jobs" component={Jobs} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
