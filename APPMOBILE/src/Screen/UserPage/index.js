import React from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView, StyleSheet, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

function UserPage({ navigation }) {

  return (
    <SafeAreaView style={{ width: '100%', backgroundColor: '#f8f5f2', alignItems: 'center' }}>
      <View style={{ width: '100%' }}>
        <Image style={{ width: '100%', height: responsiveHeight(12) }} source={require('../../Images/imageUser.png')} resizeMode='stretch' />
        <View style={styles.container}>
          <View style={styles.containerParrent}>
            <View style={styles.circle}>
              <Image source={require('../../Images/user.png')} style={styles.image} />
            </View>
          </View>
          <Text style={styles.TextName}>HENRY NGUYEN</Text>
        </View>

      </View>
      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center'  }}>
        {/* address */}
        <View style={{ width: '80%',justifyContent:'flex-start', }}>
          <Text style={{ fontSize: responsiveFontSize(3), fontWeight: 'bold'}}> Address</Text>
          <TextInput placeholder='address...'
            style={{ width: '100%', height: responsiveHeight(7), borderRadius: 10, backgroundColor: '#fff', fontSize: 18, paddingHorizontal: 5, paddingVertical: 5 }}
            placeholderTextColor={{ color: '#000' }}
          />
        </View>
        {/* email */}
        <View style={{ width: '80%',justifyContent:'flex-start',  marginTop:10 }}>
          <Text style={{ fontSize: responsiveFontSize(3), fontWeight: 'bold'}}> Email</Text>
          <TextInput placeholder='email...'
            style={{ width: '100%', height: responsiveHeight(7), borderRadius: 10, backgroundColor: '#fff', fontSize: 18, paddingHorizontal: 5, paddingVertical: 5 }}
            placeholderTextColor={{ color: '#000' }}
            keyboardType='email-address'
          />
        </View>
        {/* phone number */}
        <View style={{ width: '80%',justifyContent:'flex-start',   marginTop:10}}>
          <Text style={{ fontSize: responsiveFontSize(3), fontWeight: 'bold'}}> Phone Number</Text>
          <TextInput placeholder='03xxxxxx99'
            style={{ width: '100%', height: responsiveHeight(7), borderRadius: 10, backgroundColor: '#fff', fontSize: 18, paddingHorizontal: 5, paddingVertical: 5 }}
            placeholderTextColor={{ color: '#000' }}
          />
        </View>
      </View>
      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' ,marginTop:'5%' }}>
        <Text style={{fontSize:responsiveFontSize(3),fontWeight:'bold',color:'#e84c4f'}}>Create shop Acount</Text>
        <TouchableOpacity style={styles.cssTouchableOpacity} onPress={()=>navigation.navigate('Login_RegisterPage')}>
            <Text style={{ fontSize: 30, color: 'white' }}>Logout </Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  containerParrent: {
    width: responsiveWidth(36),
    alignItems: 'center',
    height: responsiveHeight(18),
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'red',
    position: 'absolute',
    top: -70,
    backgroundColor: '#fff'
  },
  container: {
    width: '100%',
    height: responsiveHeight(20),

    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  circle: {
    width: responsiveWidth(28),
    height: responsiveHeight(14),
    borderRadius: 100,
    overflow: 'hidden',

  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',

  },
  TextName: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20
  },cssTouchableOpacity:{
    backgroundColor: '#e84c4f', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 20,marginTop:50,width:'70%',alignItems:'center'
  }
});
export default UserPage