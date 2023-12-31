import React from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import HeaderPage from './HeaderPage'
import Store1 from './Store1';
import BtnCheckOut from './btnCheckOut';
function PromoPage({ navigation }) {

  return (
    <View style={{flex:1, width: '100%',height:'auto' ,position:'relative'}}>
      <HeaderPage navigation={navigation}/>
      
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <Store1 navigation={navigation}/>
        <Store1 navigation={navigation}/>
        
         
        
      </ScrollView>
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
export default PromoPage