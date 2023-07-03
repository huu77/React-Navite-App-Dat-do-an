import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
 
function Header({ navigation }) {
    const [heart, setHeart] = useState(false)
    return (
        <View style={{  width: '100%',justifyContent:'center',alignItems:'center',height:responsiveHeight(10) ,backgroundColor:"#fff"}}>
             <Text style={{fontSize:responsiveFontSize(4),color:'#000',fontFamily:'Poppins-Black'}}>Checkout</Text>
            <TouchableOpacity style={{ flex: 1, position: 'absolute', left: 10, top: 20 }} onPress={() => navigation.goBack()}>
                <Icon name="arrowleft" size={30} color="red" />
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, position: 'absolute', right: 10, top: 20, borderRadius: 50, backgroundColor: "#fff", padding: 5 }} onPress={() => setHeart(!heart)}>
                {!heart ? <Icon1 name="heart-outlined" size={30} color="#eda345" /> : <Icon1 name="heart" size={30} color="red" />}
            </TouchableOpacity>
           
        </View >
    );
}

const styles = StyleSheet.create({
   
});
export default Header