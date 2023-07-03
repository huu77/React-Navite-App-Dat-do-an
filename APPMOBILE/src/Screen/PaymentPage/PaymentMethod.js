import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import Header from './Header';
import Cash from './Cash';
import ItemCash from './ItemCash';
const data=[{title:'credit cash',icon:require('../../Images/creditCash.png')},
{title:'E-banking',icon:require('../../Images/bank.png')},
{title:'Momo',icon:require('../../Images/momo.png')}]
function PaymentMethod({ navigation }) {
    const [heart, setHeart] = useState(false)
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    return (
        <View style={{ width: '100%', alignItems: 'center', height: responsiveHeight(10), borderRadius: 10, marginBottom: 40, marginTop: 10 }}>
            <Header Title={"Payment Method"} navigation={navigation}/>
            <Cash />
            <View style={styles.bodyContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('AddCash')} style={styles.button}>
                    <Text style={styles.btnText}>Select</Text>

                </TouchableOpacity>
            </View>
            {data.map((i,index)=><ItemCash key={index} title={i.title} icon={i.icon}/>)}
            
            
            
        </View >
    );
}

const styles = StyleSheet.create({
    bodyContainer: {
        width: '100%',
        height: responsiveHeight(10),
         
        alignItems:'center',
        justifyContent:'center',
      

    },
    button:{
        width:'60%',
        backgroundColor: '#e84c4f',
        height:responsiveHeight(8),
        borderRadius:10,
         
        justifyContent:'center',paddingHorizontal:10,
        alignItems:'center'

    },
    btnText:{
        fontSize:responsiveFontSize(3),
        color:'#fff',
        fontFamily:'Poppins-Black'
    }
});
export default PaymentMethod