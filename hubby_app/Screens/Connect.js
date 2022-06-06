import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Btn from '../Components/Btn'
import FadeInOut from 'react-native-fade-in-out';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native';


export default function Connect({navigation}) {
    const insets = useSafeAreaInsets();

    const [id, setId] = useState(null);
    const [pw, setPw] = useState(null);

    const [response, setResponse] = useState(null);
    const [token, setToken] = useState(null);

    const connect = async (jsonresponse) => {
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

        const toHome = async() => {
            try {
                await AsyncStorage.setItem('api_token', token)
              } catch (e) {
                console.log(e)
              }
              try {
                await AsyncStorage.setItem('isConnected', '1')
              } catch (e) {
                console.log(e)
              }
              try {
                await AsyncStorage.setItem('email', JSON.stringify(id))
              } catch (e) {
                console.log(e)
              }
            navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [
                    {
                      name: 'MainStack',
                      params: { user: 'jane' },
                    },
                  ],
                })
              );
          }
        
        const Connection  = async () => {
            //await fetch(api_link+'recettes/').then(response => {console.log(response)});
            const response = await fetch('https://gentle-oasis-78916.herokuapp.com/connexion/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"email":id, "password":pw})
            },
            );
            const jsonresponse = await response.json();
            if(jsonresponse.detail) setResponse(jsonresponse.detail)
            else{
                console.log(jsonresponse.jwt)
                setToken(JSON.stringify(jsonresponse.jwt))
                toHome()
                
            }
        }

        if(id != null && pw != null){
            if(id.match(regexEmail)){Connection()}
            else(setResponse("Le format email n'est pas valide !"))
        }
        else(setResponse("Email ou mot de passe vide !"))
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
                {response && <Text style={styles.error}>{response}</Text>}
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
    },
    error:{
        top:10,
        color:"red",
        fontWeight:"bold"
    }
    
});