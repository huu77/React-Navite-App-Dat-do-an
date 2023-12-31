import React, { useState } from 'react';
import { View, ScrollView, Text, FlatList, Image, TouchableOpacity,StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
 
const SuccesPage = ({ navigation }) => {


  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: responsiveHeight(50), alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <Image source={require('../../Images/Bg.png')} style={{ width: '90%', height: responsiveHeight(40) }} resizeMode='contain' />
        <Image source={require('../../Images/Illustration.png')} style={{ width: '80%', height: responsiveHeight(40), position: 'absolute' }} resizeMode='contain' />
      </View>
      <View style={{justifyContent:'center',alignItems:'center',width:'70%'}}>
        <Text style={{fontSize:responsiveFontSize(3),color:'#000',fontWeight:'bold'}}>Your Order is comfirmed</Text>
        <Text>we'll deliver your order immediately,</Text>
        <Text>make sure your order put on the doorstep</Text>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('SuccessPageV2')} style={{backgroundColor:'#e84c4f',width:'60%',height:responsiveHeight(10),justifyContent:'center',alignItems:'center',borderRadius:10,marginTop:20}}>
        <Text style={{color:'#fff', fontSize:responsiveFontSize(3),fontWeight:'bold'}}>Check order status</Text>
        </TouchableOpacity>
       
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
   width:'100%',justifyContent:'center',alignItems:'center'
  
  },
});
export default SuccesPage;
