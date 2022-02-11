import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import { TouchableOpacity, View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name='Home' 
          component={HomeScreen}  
          options={{
            title: '홈',
            headerStyle: {
              backgroundColor: '#29b6f6',
              headerTintColor: '#ffffff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            },
          }}
        />
        <Stack.Screen 
          name='Detail' 
          component={DetailScreen} 
          options={{
            headerBackVisible: false,
            headerLeft: ({onPress}) => (
              <TouchableOpacity onPress={onPress}>
                <Text>Left</Text>
              </TouchableOpacity>
            ),
            headerTitle: ({children}) => (
              <View>
                <Text>{children}</Text>
              </View>
            ),
            headerRight: () => (
              <View>
                <Text>Right</Text>
              </View>
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;