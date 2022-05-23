import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import Btn from '../Components/Btn'
import FadeInOut from 'react-native-fade-in-out';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Log({navigation}) {
    const insets = useSafeAreaInsets();
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
      
    }
    useEffect(() => {
        setVisible(!visible);
        
      },[]);

      const toHome = async() => {
        try {
            await AsyncStorage.setItem('firstOpen', '1')
            await AsyncStorage.setItem('isConnected', '0')
            await AsyncStorage.setItem('fridge', '1')
          } catch (e) {
            // saving error
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

      const storeData = async (value) => {
        
      }

    return (
        
        <View style={[styles.container, {paddingTop: insets.top,paddingBottom: insets.bottom,}]}>
            <Image source={require('../Illustrations/gif-menu.gif')} style={styles.gif} />
            <View style={{flex: 5, alignItems:'center',top:70}}>
                <Text style={styles.txt1}>Bienvenue sur HUBBY</Text>
                <Text style={styles.txt2}>Prêt à découvrir des milliers de recettes autour du monde</Text>
                <Btn color={'white'} text={"S'inscrire"}/>
                <Text style={styles.txt3}>J'ai déjà un compte ?</Text>
            </View>
            
            <Text style={styles.txt4} onPress={toHome}>Acceder directement à l'application</Text>
           
        </View>
        


    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        backgroundColor:'#FFC5BB',
    },
    gif:{
        flex: 3,
        width:'100%',
        height:'50%',
        top:70
    },
    txt1:{
        marginTop:'20%',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20
    },
    txt2:{
        marginTop:'5%',
        textAlign:'center',
        fontSize:15,
        paddingLeft:25,
        paddingRight:25
    },
    txt3:{
        fontSize:15,
        fontWeight:'bold',
        top:60
    }
    ,
    txt4:{
        fontSize:15,
        fontWeight:'bold',
    }
});