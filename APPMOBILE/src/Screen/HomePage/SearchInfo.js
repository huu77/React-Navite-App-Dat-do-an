import React, { useState } from "react"
import { View, Text, TextInput } from 'react-native'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import DropDownPicker from "react-native-dropdown-picker";
function SearchInfo() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'TP.HCM', value: 'TP.HCM' },
        { label: 'Hà Nội', value: 'Hà Nội' },
        { label: 'TP Quy Nhơn', value: 'TP Quy Nhơn' },
        { label: 'Huế', value: 'Huế' },
        { label: 'Vũng Tàu', value: 'Vũng Tàu' },
        { label: 'Đồng Nai', value: 'Đồng Nai' },
        { label: 'Buôn Ma Thuộc', value: 'Buôn Ma Thuộc' },
        { label: 'Đà Lạt', value: 'Đà Lạt' },
    ]);

    return (
        <View style={{  width: '90%', display: 'flex', flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
            <View style={{ width: '70%',flex:1, }}>

                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    autoScroll={true}
                    // onSelectItem={(item) => {
                    //     console.log(item);

                    // }}
                    placeholder="TP.HCM"
                    containerStyle={{ width: '70%', marginBottom: 10, borderWidth: 1, borderColor: '#F7E7E5' }}
                    style={{ backgroundColor: '#F7E7E5', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10, fontSize: 15, borderRadius: 50, borderWidth: 1, borderColor: '#F7E7E5' }}
                    dropDownStyle={{ backgroundColor: '#F7E7E5'}}
                />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ borderRadius: 50, borderWidth: 2, borderColor: 'red', padding: 5,backgroundColor:'#e84c4f' }}>
                    <Icon name="bell" size={30} color="white"   />
                </View>
                <View style={{ backgroundColor: '#eda345', width: 10, height: 10, borderRadius: 5, marginLeft: -10,marginTop:25 }}></View>
            </View>

            

        </View>
    )
}
export default SearchInfo