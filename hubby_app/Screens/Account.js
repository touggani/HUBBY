import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RBSheet from "react-native-raw-bottom-sheet";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';

import pp from "../Illustrations/pp.jpg"

export default function Account({navigation}) {
   
    const insets = useSafeAreaInsets();
    const refRBSheet = useRef();
    const [connect, setConnect] = useState(null);


    useEffect(() => {
        const isConnected = async() => {
            try {
                setConnect(await AsyncStorage.getItem('isConnected'))
              } catch (e) {
                console.log(e)
              }
        }
        isConnected()
    },[]);
    

    const toLog = async() => {
        navigation.navigate('Log')
      }
    
    const deconnexion = async() => {
        try {
            await AsyncStorage.setItem('isConnected', '0')
            setConnect(await AsyncStorage.getItem('isConnected'))
          } catch (e) {
            console.log(e)
          }
    }

    
    if(connect == '1'){
        return (
            <View style={[styles.container, {paddingTop: insets.top}]}>
                <View style={styles.userNameblock}><Text style={styles.userName}>NOM_UTILISATEUR</Text></View>
                <View style={styles.userPicblock}><Image style={styles.userProfil} source={pp} /></View>
                <View style={styles.block}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
                        <Text>Editer mon profil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={[styles.btn, {top:30}]} onPress={deconnexion}>
                        <Text>Se deconnecter</Text>
                    </TouchableOpacity>
                </View>
                    
            </View>
        );
    }
    else{
        return (
            <View style={[styles.container, {paddingTop: insets.top}]}>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize:20}}>Vous n'etes pas connecté !</Text>
                    <TouchableOpacity activeOpacity={0.8} style={styles.btnToConnection} onPress={() => toLog()}>
                            <Text style={{fontSize:17,color:"black" }} >Se connecter</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingHorizontal:20,
      top:'5%',
      flexDirection:'column'
    },
    userName:{
        fontSize: hp('2.5%'),
        fontWeight:'bold'
    },
    userProfil:{
        borderRadius:100,
        width:100,
        height:100,
        top:'30%'
        
        
    },
    block:{
        top:'10%',
        alignItems:'center'
    },
    btn:{
        borderColor:'#C0C0C0',
        borderWidth:1,
        paddingVertical:'2%',
        paddingHorizontal:'20%',
        borderRadius:5
    },
    btnToConnection:{
        top:30,
        backgroundColor:"#FFC5BB",
        paddingVertical:"5%",
        paddingHorizontal:"20%",
        borderRadius:30


    }

});