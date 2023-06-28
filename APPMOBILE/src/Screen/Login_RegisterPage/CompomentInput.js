import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView, TextInput, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

function CompomentInput({ stateChang , navigation}) {
    return (

        <View style={{
            justifyContent: 'center', width: '100%', alignItems: 'center'
        }}>
            {/* email */}
            <View style={{
                justifyContent: 'center', width: '80%', height: responsiveHeight(10)
            }}>

                <TextInput
                    style={{
                        padding: 10, borderRadius: 10, borderColor: 'rgba(0, 0, 0, 0.1)',
                        borderWidth: 2, fontFamily: 'Poppins-Black', color: '#808080', paddingHorizontal: 20, marginTop: 20
                    }}
                    placeholderTextColor="#808080"
                    placeholder="Email"
                />
            </View>
            {/* password */}
            <View style={{
                justifyContent: 'center', width: '80%', height: responsiveHeight(10)
            }}>
                <TextInput
                    style={{
                        padding: 10, borderRadius: 10, borderColor: 'rgba(0, 0, 0, 0.1)',
                        borderWidth: 2, fontFamily: 'Poppins-Black', color: '#808080', paddingHorizontal: 20, marginTop: 20
                    }}
                    placeholderTextColor="#808080"
                    placeholder="Password"
                    secureTextEntry={true}
                />
            </View>
            {/* comfirm password */}
            {stateChang === 'SIGN_UP' ?
                <View style={{
                    justifyContent: 'center', width: '80%', height: responsiveHeight(20)
                }}>
                    <TextInput
                        style={{
                            padding: 10, borderRadius: 10, borderColor: 'rgba(0, 0, 0, 0.1)',
                            borderWidth: 2, fontFamily: 'Poppins-Black', color: '#808080', paddingHorizontal: 20, marginTop: 20
                        }}
                        placeholderTextColor="#808080"
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={{ backgroundColor: '#e84c4f', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 20, marginTop: 20, justifyContent: 'center', alignItems: 'center' }}  >
                        <Text style={{ fontSize: 30, color: 'white' }}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
                : <View style={{
                    justifyContent: 'center', width: '80%', height: responsiveHeight(20)
                }}>
                    <TouchableOpacity style={{ backgroundColor: '#e84c4f', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 20,   justifyContent: 'center', alignItems: 'center' }} 
                onPress={() => navigation.navigate('HomePage')}
                    >
                        <Text style={{ fontSize: 30, color: 'white' }}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>}

        </View>

    )

}

export default CompomentInput