import React from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
 import PaymentMethod from './PaymentMethod';
function PaymentPage({ navigation }) {

  return (
    <View style={{flex:1, width: '100%',backgroundColor:'#f8f5f2'  }}>
     <PaymentMethod navigation={navigation}/>
    
    </View>
  );
}
 
const styles = StyleSheet.create({
  scrollViewContent: {
    paddingVertical: 1,
    paddingHorizontal: 1,
    marginTop:20,
    width:'100%',
    alignItems:'center'
  },
   
});
export default PaymentPage