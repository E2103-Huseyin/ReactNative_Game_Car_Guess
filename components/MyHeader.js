import React,{useState} from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const header = ({kutu,para}) =>  {
    const [text, setText] = useState("");
     

   

    if (para<=0){
        alert('kasada para bitti. Borçlanmak mı istiyorsun?')
        
    } 
        
        // const answer = (val) => (val == 'tesla') ? alert('kazandin'):alert('kaybettin')
    const sonuc = () => {(text.toUpperCase() == 'TESLA') ? alert(`${para}$ kazandiniz `):alert(`${para}$ kaybettiniz.`)}


    
    
    
    return (
        <View>

        
        <ImageBackground
            source={require('../images/image23.jpg')}
            style={styles.headers}>
                
            <Text style={styles.title}>Bul Markayi Al Parayi</Text> 
            <Text style={styles.title2}>KASA: {para}$</Text> 
            
        </ImageBackground>


        <View style={styles.container1}>
            <TextInput
                style={styles.container2}
                placeholder='Resimdeki arabanın markası nedir?'
                onChangeText={value => setText(value)}
            />

            <TouchableOpacity
                style={styles.container3}
                onPress={sonuc}
            >
                <Text style={styles.container4}>Guess</Text>
            </TouchableOpacity>
        </View>


        </View>

        

        
        
        
    );
}

const styles =StyleSheet.create({
    headers:{
        // flex:1,
        flexDirection:'row',
        
        
        
        // width:300,
        // height:200,
        
    },
   

    title:{
        // textAlign:'center',
        flex:2,
        // color:'#2196f3',
        color:'#fff',
        fontSize:40,
        fontWeight: 'bold',
        paddingLeft:20,
        backgroundColor:'rgba(0,0,0,0.5)',
        textAlignVertical:'center',
        borderBottomRightRadius:400,
       
        
       

    },
    title2:{
        flex:1,
        textAlign:'right',
        justifyContent:'center',
        color:'rgba(255,0,0,1)',
        fontSize:35,
        fontWeight: 'bold',
        padding:20,
        backgroundColor:'rgba(0,0,0,0.6)',
        borderBottomLeftRadius:400,

    },
    container1:{
        // flex:1,
        flexDirection:"row",
        
        

    },
    container2:{
        flex:5,
        backgroundColor:'#90a4ae',
        fontSize:20,
        paddingLeft:10,
        color:'black',
        fontWeight:'bold',
        fontFamily:'arial'
        
        

    },
    container3:{
        flex:1,
        backgroundColor:'#90a4ae',
        
        
        

    },
    container4:{
        flex:1,
        textAlignVertical:'center',
        textAlign:'center',
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        borderColor:'black',
        borderWidth:2,
        borderRadius:10,
        backgroundColor:'#2196f3'
        
        

    },
    

});

// export { Header };
export default header
