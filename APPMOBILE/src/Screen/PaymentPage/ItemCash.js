import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView, StyleSheet, ScrollView, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

function ItemCash({ navigation, index, title, icon }) {
    const [heart, setHeart] = useState(false)
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    return (
        <View key={index} style={{ width: '100%', justifyContent: 'center', alignItems: 'center', height: responsiveHeight(10), borderRadius: 10, }}>


            <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', paddingHorizontal: 10, paddingVertical: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={icon}
                        style={{ width: 30, height: 30 }}
                    />

                    <Text style={{ fontSize: responsiveFontSize(2.5), fontWeight: 'bold', color: '#000', marginLeft: 10 }}>{title}</Text>

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

        </View >
    );
}

const styles = StyleSheet.create({

});
export default ItemCash