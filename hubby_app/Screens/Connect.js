import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView} from 'react-native';
import Btn from '../Components/Btn'
import FadeInOut from 'react-native-fade-in-out';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Connect({navigation}) {
    const insets = useSafeAreaInsets();

    const [id, setId] = useState();
    const [pw, setPw] = useState();


    function connect(){
        
    }

    return (
        <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
            <Image source={require('../Illustrations/logosidetoside.png')} style={styles.logo} />
            <View style={{alignItems:'center', flex:2,justifyContent:'center'}}>
                <Image source={require('../Illustrations/chef.png')} style={styles.gif} />
                <Text style={styles.txt1}>Te revoilà !</Text>
            </View>
            <View style={{width:'100%', alignItems:'center', flex:3,top:'5%'}}>
                <TextInput
                    style={styles.input}
                    onChangeText={setId}
                    value={id}
                    placeholder="Adresse mail ou Identifiant"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPw}
                    value={pw}
                    placeholder="Mot de passe"
                    secureTextEntry={true}
                />
                <Pressable style={styles.btn} onPress={connect}>
                    <Text style={styles.txt2}>Se connecter</Text>
                </Pressable>
            </View>
            <View>
            <Text style={styles.txt3}>Je n'ai pas de compte</Text></View>
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
        flex:1,
        width:'80%',
        justifyContent:'center',
        resizeMode:'contain'
    },

    input:{
        width:'100%',
        marginTop:20,
        paddingHorizontal:20,
        paddingVertical:15,
        backgroundColor:'#E8B7B7',
        borderRadius:30,
        fontSize:15
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