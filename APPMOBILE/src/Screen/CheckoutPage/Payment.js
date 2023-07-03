import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

function Payment({ navigation }) {
    const [heart, setHeart] = useState(false)


    return (
        <View style={{ width: '90%', justifyContent: 'center', height: responsiveHeight(10), borderRadius: 10 ,marginBottom:40}}>

            <Text style={{ fontSize: responsiveFontSize(3), fontWeight: 'bold', color: '#000' }}>My Bucket</Text>
            <View style={{ flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{color:'#000',fontSize:responsiveFontSize(2.5)}}>Item Total</Text>
                <Text>18.000 vnd</Text>

            </View>
            <View style={{ flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{color:'#000',fontSize:responsiveFontSize(2.5)}}>Delevery free</Text>
                <Text>0  vnd</Text>

            </View>
        </View >
    );
}

const styles = StyleSheet.create({

});
export default Payment