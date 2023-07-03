import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import ItemFood from '../PromoPage/ItemFood'
function Navbar({ navigation }) {

    const [selectedItem, setSelectedItem] = useState('MenuItems');

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={[styles.itemContainer, selectedItem === 'MenuItems' && styles.selectedItem]}
                    onPress={() => handleItemClick('MenuItems')}
                >
                    <Text
                        style={[styles.itemText, selectedItem === 'MenuItems' && styles.selectedItemText]}
                    >
                        MenuItems
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.itemContainer, selectedItem === 'Reviews' && styles.selectedItem]}
                    onPress={() => handleItemClick('Reviews')}
                >
                    <Text
                        style={[styles.itemText, selectedItem === 'Reviews' && styles.selectedItemText]}
                    >
                        Reviews
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.itemContainer, selectedItem === 'Info' && styles.selectedItem]}
                    onPress={() => handleItemClick('Info')}
                >
                    <Text
                        style={[styles.itemText, selectedItem === 'Info' && styles.selectedItemText]}
                    >
                        Info
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={false}
            >

                {selectedItem && (
                    <View style={{ marginTop: 20 }}>
                        {selectedItem === 'MenuItems' && 
                        <View style={{width:'100%',justifyContent:'center', alignItems:'center'}}>
                            {/* render data here */}
                            <ItemFood/>
                            <ItemFood/>
                        </View>}
                        {/* thiết kế sau */}
                        {selectedItem === 'Reviews' && <Text>Hiển thị nội dung của Reviews</Text>}
                        {selectedItem === 'Info' && <Text>Hiển thị nội dung của Info</Text>}
                    </View>
                )}

            </ScrollView>

        </View>

    );


}

const styles = StyleSheet.create({
    itemContainer: {
        margin: 10,
        borderBottomColor: '#fff',
        borderBottomWidth: 4,
        borderRadius: 2

    },
    selectedItem: {
        borderBottomColor: 'red',
    },
    itemText: {
        fontSize: responsiveFontSize(3.4),
        fontWeight: 'bold',
        color: '#000'
    },
    selectedItemText: {

    },
    scrollViewContent: {
        paddingVertical: 20,
        paddingHorizontal: 1,
        
      },
});
export default Navbar