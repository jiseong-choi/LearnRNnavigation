import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        <Tab.Screen
          name='home' component={HomeScreen}
          options={{
            title: '홈',
            tabBarIcon: ({ color, size}) => (
              <Icon name='home' color={color} size={size} />
            ),
          }}
          />
        <Tab.Screen name='Search' component={SearchScreen} />
        <Tab.Screen name='Notification' component={NotificationScreen} />
        <Tab.Screen name='Message' component={MessageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App