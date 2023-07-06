import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

function BtnAddCart({ navigation }) {

    return (
        <View style={styles.bodyContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('SuccessPageV2')}  style={styles.button}>
                <Text style={styles.btnText}>Continue</Text>
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
        position:'absolute',
        bottom:20

    },
    button:{
        width:'90%',
        backgroundColor: '#e84c4f',
        height:responsiveHeight(8),
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'

    },
    btnText:{
        fontSize:responsiveFontSize(3),
        color:'#fff',
        fontFamily:'Poppins-Black'
    }
});
export default BtnAddCart