import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView, StyleSheet, ScrollView, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

function Cash({ navigation }) {
    const [heart, setHeart] = useState(false)
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    return (
        <View style={{  width: '100%', justifyContent: 'center', alignItems: 'center', height: responsiveHeight(10), borderRadius: 10, marginBottom: 40 }}>
            <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', paddingHorizontal: 10, paddingVertical: 10 }}>
                <View style={{flexDirection:'row'}}>
                    <Icon
                        name="cash"
                        size={30}
                        color=  '#e84c4f'
                    />

                    <Text style={{ fontSize: responsiveFontSize(2.5), fontWeight: 'bold', color: '#000',marginLeft:10 }}>Cash </Text>

                </View>
                <View>

                    <TouchableOpacity onPress={handleClick} style={{ width: 60, borderRadius: 20 }}>
                        <View style={{ flexDirection: 'row-reverse' }}>
                            <Icon
                                name="radio-button-on-outline"
                                size={30}
                                color={isClicked ? '#e84c4f' : '#000'}
                            />

                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ width: '90%', backgroundColor: '#fff', alignItems: 'center', paddingBottom: 20 }}>
               <Text style={{color:'#000',fontSize:responsiveFontSize(2)}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</Text>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({

});
export default Cash