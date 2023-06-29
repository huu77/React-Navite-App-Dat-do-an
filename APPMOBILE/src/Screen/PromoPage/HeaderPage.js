import React from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView, StyleSheet, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

function HeaderPage({ navigation }) {

  return (
    <SafeAreaView style={{ width: '100%', backgroundColor: '#f8f5f2', alignItems: 'center' }}>
       <View>
        <Text>HeaderPage</Text>
       </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
   
});
export default HeaderPage