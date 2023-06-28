import React from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { styles } from './styles'
import Icon from 'react-native-vector-icons/AntDesign';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

function WellcomePage({ navigation }) {

  return (
    <SafeAreaView style={styles.cssSafeAreaView}>
      <View style={styles.cssOfViewHeader}>
        <Image style={styles.cssImg} source={require('../../Images/imgWellcome.png')} />

      </View>
      <View style={styles.cssViewBody}>
        <View style={styles.cssViewChild}>
          <Text
            style={styles.cssTextWellcome}>WELLCOME</Text>
          <TouchableOpacity style={styles.cssTouchableOpacity} onPress={()=>navigation.navigate('Login_RegisterPage')}>
            <Text style={{ fontSize: 30, color: 'white' }}>Get Started </Text>
          </TouchableOpacity>
          <Text style={styles.cssTextFooter}>I alrealy have an acount </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default WellcomePage