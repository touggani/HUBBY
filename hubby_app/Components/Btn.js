import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';



export default function Btn({text, action}) {
    const width = 10
    

    return (
        <Pressable style={styles.btn} onPress={action}>
            <Text style={styles.txt}>{text}</Text>
        </Pressable>
    );
}


const styles = StyleSheet.create({
   btn:{
       alignItems:'center',
       justifyContent:'center',
       width:320,
       height:50,
       backgroundColor:'#F8F0E1',
       borderRadius:30,
       shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        top:40,
        bottom:40
   },
   txt:{
       color:'#D58C8C',
       fontSize:20,
       fontWeight:'bold'
   }
});