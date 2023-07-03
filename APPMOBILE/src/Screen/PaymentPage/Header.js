import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
 
function Header({ navigation,Title }) {
   
    return (
        <View style={{   width: '100%',justifyContent:'center',alignItems:'center',height:responsiveHeight(10) ,backgroundColor:"#fff",marginBottom:40}}>
             <Text style={{fontSize:responsiveFontSize(3),color:'#000',fontFamily:'Poppins-Black'}}>{Title}</Text>
            <TouchableOpacity style={{ flex: 1, position: 'absolute', left: 10, top: 20 }} onPress={() => navigation.goBack()}>
                <Icon name="arrowleft" size={30} color="red" />
            </TouchableOpacity>
             
           
        </View >
    );
}

const styles = StyleSheet.create({
   
});
export default Header