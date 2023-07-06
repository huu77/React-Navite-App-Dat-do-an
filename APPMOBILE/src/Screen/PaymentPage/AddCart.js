import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import Header from './Header';
import BtnAddCart from './BtnAddCart';
function PaymentMethod({ navigation }) {
    const [heart, setHeart] = useState(false)
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    return (
        <View style={{ width: '100%', alignItems: 'center', height: '100%',position:'relative' }}>
            <Header Title={"Add Cart"} navigation={navigation} />

            <View style={{ width: '90%', }}>
                <Text>* Your card information will be kept safe</Text>
                <View style={{ width: '100%', backgroundColor: '#efeff2', alignItems: 'center', flexDirection: 'row', justifyContent: 'center', borderRadius: 5 }}>
                    <Icon1
                        name="cash"
                        size={30}
                        color='#cacaca'
                    />
                    <TextInput keyboardType="numeric" style={{ width: '90%', color: '#000' }} placeholder='Cash number' placeholderTextColor={'#cacaca'} />
                </View>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</Text>
            </View>
            <BtnAddCart  navigation={navigation}/>
        </View >
    );
}

const styles = StyleSheet.create({

});
export default PaymentMethod