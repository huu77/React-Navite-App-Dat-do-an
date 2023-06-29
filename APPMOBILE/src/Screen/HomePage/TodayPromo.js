import React, { useState } from "react"
import { View, Text, ScrollView, StyleSheet, Image,TouchableOpacity  } from 'react-native'

import Icon from 'react-native-vector-icons/Entypo';
import data from "./data";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

function TodayPromo({navigation}) {
    const [isLiked, setIsLiked] = useState(false);
    const handlePress = () => {
        setIsLiked(!isLiked);
       
      };
    return (
        <View style={{ width: '100%', marginTop: 30, alignItems: 'center' }}>
            <View style={{ width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#000' }}>Today's Suggest</Text>
                <Text style={{ color: 'red', fontSize: 15 }}>See all</Text>
            </View>
            <ScrollView
                contentContainerStyle={styles.scrollViewContent1}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {data.map((i, index) => (
                     <TouchableOpacity style={styles.Item} key={index} onPress={() => navigation.navigate('PromoPage')}>
                         
                        <Image source={i.image} style={{ width: '100%', height: '100%', position: 'absolute', bottom: 10 }} resizeMode="cover" />
                        
                        <TouchableOpacity 
                            style={{
                                position: 'absolute',
                                top: 30,
                                backgroundColor: '#fff',
                                width: 40,
                                height: 40,
                                right: 30,
                                borderRadius: 20,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderWidth: 2,
                                borderColor: '#fff',
                            }}

                            onPress={()=>handlePress()}>
                                {isLiked ? <Icon name="heart" size={30} color={ 'red' } />: <Icon name="heart-outlined" size={30} color={ 'red' } />}
                            
                        </TouchableOpacity >
                        <View style={{ padding: 10, width: '90%', height: '30%', backgroundColor: '#fff', position: 'absolute', bottom: 30, borderRadius: 20, overflow: 'hidden', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                            <View>
                                <Text style={{ fontSize: 25, color: '#000', fontWeight: 'bold' }}>{i.name}</Text>
                                <Text>{i.description}</Text>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold' }}>{i.discountedPrice} </Text>
                                    <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold',color:"#fff",backgroundColor:'#eda345',padding:5,paddingHorizontal:10 , borderRadius: 10,}}>5 left </Text>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>
                ))}

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollViewContent1: {
        paddingHorizontal: 10,
        marginTop: 10
    },
    Item: {
        width: responsiveWidth(90),
        height: responsiveHeight(50),
        backgroundColor: 'lightgray',
        alignItems: 'center',
        marginHorizontal: 5,
        borderRadius: 50,
        overflow: "hidden",
        position: 'relative'
    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
export default TodayPromo