import React from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
 import Header from './Header';
 import Block_Keep from './Block_Keep';
 import DeliveryAdress from './DeliveryAdress';
 import MyBucket from './MyBucket';
 import BtnPlaceOder from './BtnPlaceOder';
 import ItemFood from './ItemFood';
 import Payment from './Payment';
function CheckoutPage({ navigation }) {

  return (
    <View style={{flex:1, width: '100%',backgroundColor:'#f8f5f2'  }}>
        <Header navigation={navigation}/>
        
        <Block_Keep/>
        <DeliveryAdress/>
        <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        
       
        <MyBucket/>
         
        <ItemFood/>
        <ItemFood/>
        <ItemFood/>
        <ItemFood/>
        <ItemFood/>
        <ItemFood/>
        <Payment/>
      </ScrollView>
      <BtnPlaceOder navigation={navigation}/>
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
export default CheckoutPage