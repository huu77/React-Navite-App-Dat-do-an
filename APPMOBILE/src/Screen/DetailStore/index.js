import React from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
 import Header from './Header';
 import Navbar from './Navbar';
 import BtnCheckOut from './BtnCheckout';
function DetailStore({ navigation }) {

  return (
    <View style={{flex:1, width: '100%',height:'auto' ,position:'relative'}}>
       <Header navigation={navigation}/>
       <Navbar navigation={navigation}/>
       <BtnCheckOut navigation={navigation}/>
    </View>
  );
}
 
const styles = StyleSheet.create({
  scrollViewContent: {
    paddingVertical: 20,
    paddingHorizontal: 1,
    
  },
   
});
export default DetailStore