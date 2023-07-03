import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

function Block_Keep({ navigation }) {
  const [heart, setHeart] = useState(false)
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <View style={{  width: '100%', justifyContent: 'center', alignItems: 'center', height: responsiveHeight(10), borderRadius: 10 ,marginBottom:40,marginTop:10}}>
      <View style={{ width: '90%', flexDirection: 'row',justifyContent:'space-between',alignItems:'center', backgroundColor: '#fff', paddingHorizontal: 10, paddingVertical: 10 }}>
        <View >
          <Text style={{ fontSize: responsiveFontSize(2.5), fontWeight: 'bold', color: '#000' }}>Keep social distancing</Text>
          <Text style={{ fontSize: responsiveFontSize(2) }}>Leaver your order on the doorstep</Text>
        </View>
        <View>
          
          <TouchableOpacity onPress={handleClick} style={{backgroundColor:'#efeff2',width:60,borderRadius:20 }}>
            <View style={{ flexDirection: isClicked ? 'row-reverse' : 'row' }}>
              <Icon
                name="radio-button-on-outline"
                size={30}
                color={isClicked ?'#e84c4f' :  '#fff'}
              />
               
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({

});
export default Block_Keep