import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  WellcomePage,
  Login_RegisterPage,
  HomePage,
  UserPage,
  UserOrder,
  MyShop,
  PromoPage,
  DetailStore,
  CheckoutPage,
  PaymentPage,AddCash,SuccesPage
} from '../Screen/index'
import Icon from 'react-native-vector-icons/Entypo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='HomePage' screenOptions={{
      tabBarActiveTintColor: 'red',
      tabBarStyle: [{ display: 'flex' }, null],
    }}>

      <Tab.Screen name="HomePage" component={HomePage} options={{
        headerShown: false, tabBarShowLabel: false, tabBarIcon: ({ color, size }) => (
          <Icon name="home" size={size} color={color} />
        ),
      }} />
      <Tab.Screen name="MyShop" component={MyShop} options={{
        headerShown: false, tabBarShowLabel: false, tabBarIcon: ({ color, size }) => (
          <Icon name="shopping-bag" size={size} color={color} />
        ),
      }} />
      <Tab.Screen name="UserOrder" component={UserOrder} options={{
        headerShown: false, tabBarShowLabel: false, tabBarIcon: ({ color, size }) => (
          <Icon name="magnifying-glass" size={size} color={color} />
        ),
      }} />
      <Tab.Screen name="UserPage" component={UserPage} options={{
        headerShown: false, tabBarShowLabel: false, tabBarIcon: ({ color, size }) => (
          <Icon name="user" size={size} color={color} />
        ),
      }} />

    </Tab.Navigator>
  );
}
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WellcomePage">
        <Stack.Screen name="WellcomePage" component={WellcomePage} options={{ headerShown: false }} />
        <Stack.Screen name="Login_RegisterPage" component={Login_RegisterPage} options={{ headerShown: false }} />
        <Stack.Screen name="HomeTabs" component={MyTabs} options={{ headerShown: false ,}} />
        <Stack.Screen name="PromoPage" component={PromoPage} options={{ headerShown: false ,}} />
        <Stack.Screen name="DetailStore" component={DetailStore} options={{ headerShown: false, }} />
        <Stack.Screen name="CheckoutPage" component={CheckoutPage}  options={{ headerShown: false, }}  />
        <Stack.Screen name="PaymentPage" component={PaymentPage}  options={{ headerShown: false, }}  />
        <Stack.Screen name="AddCash" component={AddCash}  options={{ headerShown: false, }}  />
        {/* <Stack.Screen name="SuccesPage" component={SuccesPage}  options={{ headerShown: false, }}  /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;