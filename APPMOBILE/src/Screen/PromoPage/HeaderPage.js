import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

function HeaderPage({ navigation }) {
  const [selectedItem, setSelectedItem] = useState('filter');

  const handleItemPress = (item) => {
    if (selectedItem !== item) {
      setSelectedItem(item);
    }
  };
  return (
    <SafeAreaView style={{ width: '100%', backgroundColor: '#f8f5f2', alignItems: 'center' }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeTabs')}>
          <Icon name="arrowleft" size={30} color="black" />
        </TouchableOpacity>

        <Text style={styles.TextTitle}>Today's Suggest</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent1}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity
          style={[
            styles.item,
            selectedItem === 'filter' && styles.selectedItem,
          ]}
          onPress={() => handleItemPress('filter')}
        >
          <Icon name="filter" size={30} color={selectedItem === 'filter' ? 'red' : 'black'} />
          <Text style={styles.itemText}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.item,
            selectedItem === 'select1' && styles.selectedItem,
          ]}
          onPress={() => handleItemPress('select1')}
        >
          <Icon name="select1" size={30} color={selectedItem === 'select1' ? 'red' : 'black'} />
          <Text style={styles.itemText}>Nearby</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.item,
            selectedItem === 'staro' && styles.selectedItem,
          ]}
          onPress={() => handleItemPress('staro')}
        >
          <Icon name="staro" size={30} color={selectedItem === 'staro' ? 'red' : 'black'} />
          <Text style={styles.itemText}>Above 4.5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.item,
            selectedItem === 'tagso' && styles.selectedItem,
          ]}
          onPress={() => handleItemPress('tagso')}
        >
          <Icon name="tagso" size={30} color={selectedItem === 'tagso' ? 'red' : 'black'} />
          <Text style={styles.itemText}>Cheap</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: responsiveHeight(10),

    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row'
  },
  TextTitle: {
    fontSize: responsiveFontSize(3),
    marginLeft: '20%',
    fontWeight: 'bold',
    color: '#000'
  },
  scrollViewContent1: {
    flexDirection: 'row',
  },
  item: {
    width: 110,
    height: 50,
    margin: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    padding: 5
  },
  itemText: {
    fontSize: 16,
    color: '#000', marginLeft: 5
  },
});
export default HeaderPage