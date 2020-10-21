import React, {useState} from 'react';
import { SafeAreaView, View,Text, ImageBackground, TouchableOpacity, FlatList } from 'react-native';

import {styles} from './MyPrj_Style';
import MyBox from './components/MyBox';
import  MyHeader  from './components/MyHeader';

const MyPrj = () =>{

    const [para, setPara] = useState(1000)

    const [kutu, setKutu]=useState([
        {id:"0", text:'10$', tik:true, cost:10 },
        {id:"1", text:'10$', tik:true, cost:10},
        {id:"2", text:'10$', tik:true, cost:10},
        {id:"3", text:'10$', tik:true, cost:10},
        {id:"4", text:'10$', tik:true, cost:10},
        {id:"5", text:'10$', tik:true, cost:10},
        {id:"6", text:'20$', tik:true, cost:20},
        {id:"7", text:'20$', tik:true, cost:20},
        {id:"8", text:'200$', tik:true, cost:200 },
        {id:"9", text:'500$', tik:true, cost:500 },
        {id:"10", text:'200$', tik:true, cost:200},
        {id:"11", text:'300$', tik:true, cost:300},
        {id:"12", text:'100$', tik:true, cost:100},
        {id:"13", text:'500$', tik:true, cost:500},
        {id:"14", text:'300$', tik:true, cost:300},
        {id:"15", text:'300$', tik:true, cost:300},
        // {id:"16", text:'50$', tik:true , cost:10},
        // {id:"17", text:'50$', tik:true , cost:10},
        // {id:"18", text:'50$', tik:true , cost:10},
        // {id:"19", text:'50$', tik:true , cost:10}
        

    ]);
   
    const onDone =(id) => {
        // setKutu(() => kutu.filter(todo =>todo.id !=id))

        const boxIndex = kutu.findIndex(todo =>todo.id == id);
        const newbox = [...kutu]

        const x = newbox[boxIndex].tik ? (newbox[boxIndex].cost):0;
        
        setPara(para-x)

        
        newbox[boxIndex].tik=false;
        setKutu(newbox)
        


        // setKutu((prevTodos) => {
        //     return prevTodos.filter(todo =>todo.id !=id);
        // });

    }
   
   
   
    
        
            
              
       
    

    

    return(
        <SafeAreaView>
            <MyHeader kutu={kutu} para={para} />
            <View>

                <ImageBackground
                    source={{ uri: "https://images.pexels.com/photos/2526127/pexels-photo-2526127.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
                    style={styles.imageContainer}
                >
                    <View  style={styles.container}>
                        <FlatList
                            data={kutu}
                            renderItem={({item}) => (
                                <MyBox item={item} onDone={onDone}/>)}
                            numColumns={4}
                        >

                        </FlatList>
                        
                        



                    </View>

                    





                </ImageBackground>





                
            </View>
        </SafeAreaView>
    )

}


export default MyPrj;