import { StyleSheet } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
export const styles = StyleSheet.create({
    cssSafeAreaView: {
        flex: 1, backgroundColor: '#EF9CA6'
    },
    cssOfViewHeader: {
        justifyContent: 'center', alignItems: 'center', width: '100%'
    },
    cssImg: {
        width: responsiveWidth(90), height: responsiveHeight(40), marginTop: 70
    },
    cssViewBody: {
        justifyContent: 'center', alignItems: 'center', width: '100%', padding: 30, marginTop: '10%'
    },
    cssViewChild: {
        width: responsiveWidth(70), height: responsiveHeight(40), display: 'flex', flexDirection: 'column', alignItems: 'center'
    },
    cssTextWellcome: {
        fontSize: 40, fontWeight: 'bold', fontFamily: 'Poppins-Black', color: 'black', textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    },
    cssTouchableOpacity:{
        backgroundColor: '#e84c4f', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 20,marginTop:50
    },
    cssTextFooter:{
        fontSize:18,fontFamily:'Poppins-Italic',transform: [{ skewX: '10deg' }],fontWeight:'bold',color:'#e84c4f',marginTop:'20%'
    }
});