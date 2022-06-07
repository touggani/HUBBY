import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView} from 'react-native';
import Btn from '../Components/Btn'
import FadeInOut from 'react-native-fade-in-out';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CreateAccount({navigation}) {
    const insets = useSafeAreaInsets();

    const [nom, setNom] = useState(null);
    const [prenom, setPrenom] = useState(null);
    const [email, setEmail] = useState(null);
    const [id, setId] = useState(null);
    const [pw, setPw] = useState(null);


    const [error, setError] = useState(null);

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
        if(response.status == 200){
            navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [
                    {
                      name: 'Connect',
                      params: { screen: 'Log' },
                    },
                  ],
                })
              );
        }
        else{
            setError("Echec de création de compte")
        }
        const jsonresponse = await response.json();
        
            
        }


    const Component1 = () => {
        return (
            <View style={{alignItems:'center', flex:1, width:"100%"}}>
                
                <View style={{alignItems:'center', flex:2,justifyContent:'center'}}>
                    <Image source={require('../Illustrations/chef.png')} style={styles.gif} />
                    <Text style={styles.txt1}>Bienvenue !</Text>
                </View>
                <View style={{width:'100%', alignItems:'center', flex:3,top:'5%'}}>
                <TextInput
                    style={styles.input}
                    onChangeText={setNom}
                    value={nom}
                    placeholder="nom"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPrenom}
                    value={prenom}
                    placeholder="Prenom"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Adresse mail"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setId}
                    value={id}
                    placeholder="Nom d'utilisateur"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPw}
                    value={pw}
                    placeholder="Mot de passe"
                    secureTextEntry={true}
                />
            </View>
                {error && <Text style={{top:"21%", fontWeight:"bold"}}>{error}</Text>}
                <View style={{width:'100%', alignItems:'center', flex:3,top:'5%', top:40}}>
                    <Pressable style={styles.btn} onPress={Connection}>
                            <Text style={styles.txt2}>S'inscrire</Text>
                    </Pressable>
            </View>
            <Text style={styles.txt3}>J'ai un compte !</Text>
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
         top:"50%",
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
    input:{
        width:'100%',
        marginTop:20,
        paddingHorizontal:20,
        paddingVertical:15,
        backgroundColor:'#E8B7B7',
        borderRadius:30,
        fontSize:15
    },
    

    
    
});