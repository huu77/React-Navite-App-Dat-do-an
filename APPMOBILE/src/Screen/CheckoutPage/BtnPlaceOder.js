import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

function BtnPlaceOder({ navigation }) {

    return (
        <View style={styles.bodyContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('PaymentPage')}  style={styles.button}>
                <Text style={styles.btnText}>Place Order</Text>
                <Text style={styles.btnText}>18.000 vnd</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    bodyContainer: {
        width: '100%',
        height: responsiveHeight(10),
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:'center',
      

    },
    button:{
        width:'90%',
        backgroundColor: '#e84c4f',
        height:responsiveHeight(8),
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',paddingHorizontal:10,
        alignItems:'center'

    },
    btnText:{
        fontSize:responsiveFontSize(3),
        color:'#fff',
        fontFamily:'Poppins-Black'
    }
});
export default BtnPlaceOder