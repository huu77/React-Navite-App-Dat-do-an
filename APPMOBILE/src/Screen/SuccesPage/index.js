import React,{useState} from 'react';
import { View, ScrollView, Text,FlatList } from 'react-native';

const SuccesPage = () => {
  const itemList = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 3' },
    { id: 5, name: 'Item 3' },
    { id: 6, name: 'Item 3' },
    { id: 7, name: 'Item 3' },
    // Danh sách các phần tử khác...
  ];
   
  return (
    <View>
        <View style={{width:'100%',height:500,backgroundColor:'red'}}/> 
        <ScrollView>
      <View style={{ flex: 1 }}>
        {/* Phần nằm ở dưới bottom */}
        <View style={{ height: 600, backgroundColor: 'red' }} />

        <View style={{ flex: 1, backgroundColor: '#000' }}>
          {/* Danh sách sản phẩm */}
          <FlatList
            data={itemList}
            renderItem={({ item }) => <Text>{item.name}</Text>}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ flexGrow: 1 }}
          />
        </View>
      </View>
    </ScrollView>
    </View>
  );
};

export default SuccesPage;
