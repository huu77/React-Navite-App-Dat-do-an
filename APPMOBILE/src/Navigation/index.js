import  React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WellcomePage,Login_RegisterPage,HomePage} from '../Screen/index'
import { Text ,View} from 'react-native';
const Stack = createNativeStackNavigator();
function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WellcomePage">
        <Stack.Screen name="WellcomePage" component={WellcomePage} options={{ headerShown: false }}/>
        <Stack.Screen name="Login_RegisterPage" component={Login_RegisterPage} options={{ headerShown: false }}/>
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default  Navigation;