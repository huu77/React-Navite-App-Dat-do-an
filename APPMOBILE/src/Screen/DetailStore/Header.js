import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import Slide from './Slide';
function Header({ navigation }) {
    const [heart, setHeart] = useState(false)
    return (
        <View style={{ flex: 1, width: '100%' }}>
             <Slide/>
            <TouchableOpacity style={{ flex: 1, position: 'absolute', left: 10, top: 10 }} onPress={() => navigation.navigate('PromoPage')}>
                <Icon name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, position: 'absolute', right: 10, top: 10, borderRadius: 50, backgroundColor: "#fff", padding: 5 }} onPress={() => setHeart(!heart)}>
                {!heart ? <Icon1 name="heart-outlined" size={30} color="#eda345" /> : <Icon1 name="heart" size={30} color="red" />}
            </TouchableOpacity>
            {/* <View style={{ width: '90%', height: responsiveHeight(40), backgroundColor: 'red', position: 'absolute', bottom: -100 }}>

            </View> */}
        </View >
    );
}

const styles = StyleSheet.create({
    scrollViewContent: {
        paddingVertical: 20,
        paddingHorizontal: 1,

    },

});
export default Header