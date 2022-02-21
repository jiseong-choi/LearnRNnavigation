import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Text>Home</Text>
  )
}

function SearchScreen() {
  return (
    <Text>Search</Text>
  )
}

function NotificationScreen() {
  return (
    <Text>Notification</Text>
  )
}

function MessageScreen() {
  return (
    <Text>Message</Text>
  )
}

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' >
        <Tab.Screen name='home' component={HomeScreen} />
        <Tab.Screen name='Search' component={SearchScreen} />
        <Tab.Screen name='Notification' component={NotificationScreen} />
        <Tab.Screen name='Message' component={MessageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App