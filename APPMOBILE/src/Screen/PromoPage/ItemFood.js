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

function ItemFood({ navigation }) {
    const [selectedItem, setSelectedItem] = useState('filter');

    const handleItemPress = (item) => {
        if (selectedItem !== item) {
            setSelectedItem(item);
        }
    };
    const [count, setCount] = useState(0)
    const minusHandle = () => {
        if (count < 1) {
            setCount(0)
        } else {

            setCount(count - 1)
        }
    }
    const [heart, setHeart] = useState(false)
    return (

        <View style={styles.bodyContainer}>
            {/* thông tin món ăn */}
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%' }}>
                {/* img */}
                <View style={{ overflow: 'hidden', borderRadius: 10, position: 'relative' }}>
                    <Image style={{ width: responsiveWidth(30), height: responsiveHeight(15) }} source={require('../../Images/food1.jpg')} />

                </View>
                <View style={styles.itemAbsolute}>
                    <Text style={{ color: "#fff", fontSize: 15 }}>5 left</Text>
                </View>

                {/* info */}
                <View style={{ flexDirection: 'row', alignItems: 'stretch', justifyContent: 'space-around' }}>
                    <View style={{ justifyContent: 'space-between', alignItems: 'flex-start', }}>
                        <Text style={{ fontSize: responsiveFontSize(2.2), color: "#000", fontWeight: 'bold' }}>Fruit salad mix</Text>
                        <Text style={{ fontSize: 15 }}>18.500  <Text style={{ textDecorationLine: 'line-through' }}>22.500</Text></Text>
                        <Text style={{ fontWeight: 700 }}> <Icon2 name="percent" size={20} color="#eda345" />Free delivery</Text>
                    </View>

                </View>
                <TouchableOpacity style={styles.iconContainer} onPress={() => setHeart(!heart)}>
                    {!heart ? <Icon1 name="heart-outlined" size={30} color="#eda345" /> : <Icon1 name="heart" size={30} color="red" />}
                </TouchableOpacity>
            </View>

            {/* bộ đếm */}
            {count === 0 ?
                <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'flex-end', height: responsiveHeight(5) }}>
                    <TouchableOpacity style={styles.addButton} onPress={() => setCount(count + 1)}>
                        <Text style={styles.plusIcon}>+</Text>
                        <Text style={styles.addText}>ADD</Text>
                    </TouchableOpacity>
                </View> :
                <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'flex-end', height:responsiveHeight(5) }}>


            <TouchableOpacity style={styles.border} onPress={minusHandle}>
                <Icon name="minus" size={30} color="black" />
            </TouchableOpacity>
            <View style={styles.border1}>
                <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
                    {count}
                </Text>
            </View>
            <TouchableOpacity style={styles.border} onPress={() => setCount(count + 1)}>
                <Icon name="plus" size={30} color="black" />
            </TouchableOpacity>
        </View>
            }
        </View >

    );
}
const styles = StyleSheet.create({
    bodyContainer: {
        marginTop: 20,
        flexDirection: 'column',
        width: '90%',
        paddingBottom: 20
    }, itemAbsolute: {
        position: 'absolute',
        backgroundColor: '#eda345',
        width: responsiveWidth(20),
        height: responsiveHeight(5),
        bottom: -10, left: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 2, borderColor: '#fff'
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20, // half of the width and height to create a circular shape
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,

    },
    border: {
        borderWidth: 1,
        borderColor: '#fff',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e84c4f',
        borderRadius: 10,
        overflow: 'hidden'
    },
    border1: {
        borderWidth: 1,
        borderColor: '#fff',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e1e1e1',

    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e84c4f',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 5,
    },
    plusIcon: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginRight: 8,
    },
    addText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
});
export default ItemFood