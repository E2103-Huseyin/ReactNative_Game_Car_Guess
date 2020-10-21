import { StyleSheet, Dimensions } from 'react-native';

/**
 * #303e45
 * #a7b6bd
 * #4a636e
 * #ff9b31
 */

const styles = StyleSheet.create({
    imageContainer: {
        // flex: 1,
        // width:100,
        // height:100,
        
        width:Dimensions.get('window').width*1,
        height:Dimensions.get('window').height*1,
        
    },
    container: {
        // backgroundColor: '#a7b6bd',
        flex:1,
        // flexWrap:'wrap',
        
    },


    
})

const MyBoxstyle = StyleSheet.create({
    banner: {
        // backgroundColor:'rgba(0,0,0,0.92)',
        width:Dimensions.get('window').width*0.25,
        height:Dimensions.get('window').height*0.177,
        borderColor:'rgba(255,255,255,0.4)',
        borderWidth:1,
        
        
    },
   
})

const card = StyleSheet.create({
    container: {
        backgroundColor: '#a7b6bd',
        flex:1,
        flexDirection:'row'
        
    },
    
})
export { styles, MyBoxstyle, card };