import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions , TouchableOpacity} from 'react-native';

import {MyBoxstyle} from '../MyPrj_Style'
const MyBox= ({item, onDone}) => {

        

    return (
        <TouchableOpacity
            style={
                [ {backgroundColor: item.tik ? 'rgba(0,0,0,0.93)' : null} ,
                MyBoxstyle.banner]
            }
            // onPress={() => props.onDone()}
            onPress={() =>onDone(item.id)}
            // onPress={Puan}
        
        >
            <Text style={{
                color: item.tik ? 'rgba(255,255,255,0.93)' : 'rgba(255,255,255,0.1)' ,
                fontSize:20,
                flex:1,
                textAlign:'center',
                textAlignVertical:'center'
            }}>{item.text}</Text>
        </TouchableOpacity>
    )
}

export default MyBox;