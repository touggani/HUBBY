import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import CountryFlag from "react-native-country-flag";


export default function CountryBtn({navigation, element, padding}) {

    return (
        <TouchableOpacity activeOpacity={0.8} style={[styles.container, {marginTop:padding}]}>
            <View style={styles.circle}>
                    <CountryFlag isoCode={element.countryCode} size={60} style={styles.flag} />
            </View>
            <View style={{width: '100%'}}>
                <Text style={styles.text}>{element.name}</Text>
            </View>
    
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flexDirection:"row",
        display:'flex',
        paddingHorizontal: 10,
        paddingVertical: '6%',
        borderRadius:40,
        width:'100%',
        alignItems: 'center'
    },
    text:{
        fontSize:16,
        textAlign: 'center',
        marginLeft: 20
    },
    circle:{
        position: 'absolute',
        width:'18%',
        height:'280%',
        left: 20,
        borderRadius:50,
        backgroundColor:'#FFC5BB',
        alignItems:'center',
        justifyContent:'center'
    },
    flag:{
        width: 38,
        height: 38,
        borderRadius:50
        
    },

});