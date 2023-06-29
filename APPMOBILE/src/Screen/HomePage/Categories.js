import React, { useState } from "react"
import { View, Text, TextInput } from 'react-native'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Ionicons';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import DropDownPicker from "react-native-dropdown-picker";
function Categories() {


    return (
        <View style={{ width: '90%', display: 'flex', flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginTop: 20 }}>
            <View style={{ width: responsiveWidth(20), height: responsiveHeight(10),alignItems:'center'   }}>
                <View style={{width:'100%', height:'100%',justifyContent: 'center',alignItems:'center',backgroundColor:'#fff' }}>
                    <Icon name="heart-outlined" size={50} color="#e9575a" />
                </View>
                <Text style={{fontSize:15,fontWeight:700}}>Favorite</Text>
            </View>
            <View style={{ width: responsiveWidth(20), height: responsiveHeight(10),alignItems:'center'   }}>
                <View style={{width:'100%', height:'100%',justifyContent: 'center',alignItems:'center',backgroundColor:'#fff' }}>
                    <Icon name="price-tag" size={50} color="#e9575a" />
                </View>
                <Text style={{fontSize:15,fontWeight:700}}>Cheap</Text>
            </View>
          
            <View style={{ width: responsiveWidth(20), height: responsiveHeight(10),alignItems:'center'   }}>
                <View style={{width:'100%', height:'100%',justifyContent: 'center',alignItems:'center',backgroundColor:'#fff' }}>
                    <Icon1 name="md-trending-up-sharp" size={50} color="#e9575a" />
                </View>
                <Text style={{fontSize:15,fontWeight:700}}>Trend</Text>
            </View>
            <View style={{ width: responsiveWidth(20), height: responsiveHeight(10),alignItems:'center'   }}>
                <View style={{width:'100%', height:'100%',justifyContent: 'center',alignItems:'center',backgroundColor:'#fff' }}>
                    <Icon name="grid" size={50} color="#e9575a" />
                </View>
                <Text style={{fontSize:15,fontWeight:700}}>More</Text>
            </View>
        </View>
    )
}
export default Categories