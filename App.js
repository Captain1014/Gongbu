import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import LevelSelection from './screens/LevelSelection';
import Quiz from './screens/Quiz';
import Preview from './screens/Preview';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LevelSelection">
        <Stack.Screen name="LevelSelection" component={LevelSelection} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Preview" component={Preview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
