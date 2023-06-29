import React from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView, StyleSheet, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import HeaderPage from './HeaderPage'
function PromoPage({ navigation }) {

  return (
    <SafeAreaView style={{ width: '100%', backgroundColor: '#f8f5f2', alignItems: 'center' }}>
       <HeaderPage/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
   
});
export default PromoPage