import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import ItemFood from './ItemFood';
function Store1({ navigation }) {
    const [selectedItem, setSelectedItem] = useState('filter');

    const handleItemPress = (item) => {
        if (selectedItem !== item) {
            setSelectedItem(item);
        }
    };
    return (
        <SafeAreaView style={{ width: '100%', backgroundColor: '#f8f5f2', alignItems: 'center' }}>
            <View style={{ width: '90%', alignItems: 'center', backgroundColor: '#fff',marginBottom:20 }}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.SPContainer} onPress={()=>navigation.navigate('DetailStore')}>
                        <Text style={styles.TextTitleContainer}>Delics Food Salad</Text>
                        <Text style={{ fontSize: responsiveFontSize(2.1) }}>174 NTCK HCM City</Text>
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>

                            <Icon name="staro" size={30} color='#eda345' />
                            <Text style={{ color: 'black', marginLeft: 5 }}>5.0</Text>
                        </View>
                        <Text>1km</Text>
                    </View>
                </View>
                <View style={styles.line}>

                </View>
                
                <ItemFood/>
                <ItemFood/>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',

        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    TextTitle: {
        fontSize: responsiveFontSize(3),
        marginLeft: '20%',
        fontWeight: 'bold',
        color: '#000'
    },
    SPContainer: {

    },
    TextTitleContainer: {
        fontSize: responsiveFontSize(2.9),
        fontWeight: 'bold',
        color: "#000"
    },
    line: {
        width: '90%',
        height: 7,
        backgroundColor: '#efeff2',
        borderRadius: 10,
        marginTop: 20
    },  
});
export default Store1