import React from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { styles } from './styles'
import Icon from 'react-native-vector-icons/AntDesign';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import SearchInfo from './SearchInfo';
import Categories from './Categories';
import TodayPromo from './TodayPromo';
function HomePage({ navigation }) {

  return (
    <SafeAreaView style={{ flex:1 , justifyContent:'center',alignItems:'center',backgroundColor:'#f8f5f2'}}>
      <SearchInfo/>
      <View style={{width:'70%',justifyContent:'center',alignItems:'center',marginTop:20}}>
        <Text style={{color:'#e84c4f' ,fontSize:30 ,fontWeight:'bold',fontFamily:'Poppins-Medium'}}>WISDOM DELIVERY</Text>
      </View>
      <Categories/>
      <TodayPromo navigation={navigation}/>
    </SafeAreaView>
  );
}
export default HomePage