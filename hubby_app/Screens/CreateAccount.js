import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView} from 'react-native';
import Btn from '../Components/Btn'
import FadeInOut from 'react-native-fade-in-out';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CreateAccount({navigation}) {
    const insets = useSafeAreaInsets();



    function connect(){
        
    }

    const Component1 = () => {
        return (
            <View style={{alignItems:'center', flex:1}}>
                
                <View style={{alignItems:'center', flex:2,justifyContent:'center'}}>
                    <Image source={require('../Illustrations/chef.png')} style={styles.gif} />
                    <Text style={styles.txt1}>Te revoilà !</Text>
                </View>
                <View style={{width:'100%', alignItems:'center', flex:1,top:'5%',justifyContent:'center'}}>
                    <Text>BLABLABLA</Text>
                </View>
                <View style={{width:'100%', alignItems:'center', flex:3,top:'5%', top:40}}>
                    <Pressable style={styles.btn} onPress={connect}>
                            <Text style={styles.txt2}>Se connecter</Text>
                    </Pressable>
            </View>
            <Text style={styles.txt3}>Je n'ai pas de compte</Text>
           </View>
        )
    }

    return (
        <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
            <Image source={require('../Illustrations/logosidetoside.png')} style={styles.logo} />
            <Component1/>
        </View>
        
        


    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        backgroundColor:'#FFC5BB',
        paddingHorizontal:'10%',
    },
    logo:{
        width:'60%',
        justifyContent:'center',
    },
    btn:{
        alignItems:'center',
        justifyContent:'center',
        width:280,
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
         top:30
    },
    txt1:{
        top:30,
        fontSize:20,
        fontWeight:'bold'
    },
    txt2:{
        color:'#D58C8C',
        fontSize:20,
        fontWeight:'bold'
    },
    txt3:{
        fontSize:15,
        fontWeight:'bold'
    }
    

    
    
});