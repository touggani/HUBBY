import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import CountryFlag from "react-native-country-flag";


export default function CountryBtn({navigation, element}) {

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.container}>
            <View style={styles.circle}>
                    <CountryFlag isoCode={element.countryCode} size={60} style={styles.flag} />
            </View>
            <Text style={styles.text}>{element.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flexDirection:"row",
        display:'flex',
        alignItems:'stretch',
        paddingLeft: 20,
        paddingRight:20,
        paddingBottom:7,
        paddingTop:7,
        borderRadius:40
        
    },
    text:{
        display:'flex',
        fontSize:20,
        textAlign:'center',
        alignContent:'center',
        justifyContent:'center',
        paddingLeft:35,
        paddingRight:35,
        top:15
        
    },
    circle:{
        
        width:60,
        height:60,
        borderRadius:50,
        backgroundColor:'#FFC5BB',
        alignItems:'center',
        justifyContent:'center'
    },
    flag:{
        width: 40,
        height: 40,
        borderRadius:50
        
    },

});