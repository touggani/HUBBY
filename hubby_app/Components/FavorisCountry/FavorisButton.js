import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CountryFlag from "react-native-country-flag";

export default function FavorisButton({navigation,isActive}) {

    return (
        <View style={{paddingLeft: 10, paddingRight: 10}}>
            <View style={[styles.container, isActive ? styles.bgPink : null ]}>
                <View style={styles.circle}>
                    <CountryFlag isoCode="br" size={60} style={styles.flag} />
                </View>
                <Text style={styles.nom}>Bresil</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:85,
        height:160,
        alignItems:'center',
        borderRadius:50,
        borderColor:'black',
        paddingTop:10,
        paddingBottom:30,
        top:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        backgroundColor:'white',
        
        
    },
    circle:{
        width:70,
        height:70,
        borderRadius:50,
        backgroundColor:'#FFC5BB',
        alignItems:'center',
        justifyContent:'center'
    },
    flag:{
        width: 50,
        height: 50,
        borderRadius:50,
        
    },
    nom:{
        fontSize:17,
        paddingTop:20
    },
    bgPink:{
        backgroundColor:"#FFC5BB",
        
    }
});