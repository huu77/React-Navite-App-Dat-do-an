import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

function MyBucket({ navigation }) {
  const [heart, setHeart] = useState(false)
   
 
  return (
    <View style={{  width: '100%', justifyContent: 'center', alignItems: 'center', height: responsiveHeight(10), borderRadius: 10 }}>
      <View style={{ width: '90%',flexDirection:'row', justifyContent:'space-between',alignItems:'center', backgroundColor: '#fff', paddingHorizontal: 10, paddingVertical: 10 }}>
         
          <Text style={{ fontSize: responsiveFontSize(3), fontWeight: 'bold', color: '#000' }}>My Bucket</Text>
          
          <TouchableOpacity   style={{  flexDirection:'row',alignItems:'center' }}>
           
              <Icon
                name="plus"
                size={20}
                color='#e84c4f'
              />
               
            <Text style={{color:'red' ,marginLeft:10}}>Add items</Text>
          </TouchableOpacity>
        
         
      </View>

      
    </View >
  );
}

const styles = StyleSheet.create({

});
export default MyBucket