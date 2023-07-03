import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

function Slide({ navigation }) {
  
    
      const renderPagination = (index, total, context) => {
        return (
          <View style={styles.paginationContainer}>
            {[...Array(total)].map((_, i) => (
              <TouchableOpacity
                key={i}
                style={[
                  styles.paginationButton,
                  i === index && styles.paginationButtonActive,
                ]}
                onPress={() => context.scrollTo(i)}
              />
            ))}
          </View>
        );
      };
    
    return (
        <View style={styles.container}>
        <Swiper
          style={styles.wrapper}
          renderPagination={renderPagination}
        >

          <Image style={styles.image} source={require('../../Images/imgDetail.png')} resizeMode='cover'/>
          <Image style={styles.image} source={require('../../Images/food1.jpg')} resizeMode='cover'/>
          <Image style={styles.image} source={require('../../Images/food1.jpg')} resizeMode='cover'/>
          {/* Thêm các hình ảnh khác vào đây */}
        </Swiper>
        <View style={styles.itemDetail}>
            <Text style={{fontSize:18,color:'#000'}}>Delics Fruit Salad</Text>
            <Text style={{fontSize:15}}>174 NTKT ,distric 5,HCM city </Text>
            <Text style={{color:'#000'}}>Open   <Text>8 am - 8 pm</Text> </Text>
            <View style={{flexDirection:'row' ,alignItems:'center' }}>
            <Icon1 name="location-pin" size={20} color="#eda345" style={{marginRight:5}}/>
            <Text style={{marginRight:10}}>1 km</Text>
            <Icon1 name="star" size={20} color="#eda345" style={{marginRight:5}}/>
            <Text style={{marginRight:15}}>5.0</Text>
            <Icon name="checkcircleo" size={20} color="#eda345" style={{marginRight:5}}/>
            <Text style={{marginRight:10}}>Verified</Text>
            </View>
        </View>
      </View>
         
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position:'relative',
        backgroundColor:'#eeebe9'
      },
      wrapper: {
        height:responsiveHeight(30)
      },
      image: {
      
        width:'100%',
        height:responsiveHeight(30)
      },
      paginationContainer: {
        position: 'absolute',
        top: 230,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
         
      },
      paginationButton: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#000',
        marginHorizontal: 5,
      },
      paginationButtonActive: {
        backgroundColor: '#fff',
        width:32
      },
      itemDetail:{
        width:'90%',
        height:responsiveHeight(20),
        backgroundColor:'#fff',
        position: 'absolute',
        top: 150,
        left: 20,
        right: 20,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius:10
      }

});
export default Slide