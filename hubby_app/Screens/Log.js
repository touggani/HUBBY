import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import Btn from '../Components/Btn'
import FadeInOut from 'react-native-fade-in-out';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CommonActions } from '@react-navigation/native';



export default function Log({navigation}) {
    const insets = useSafeAreaInsets();
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
      
    }
    useEffect(() => {
        setVisible(!visible);
        
      },[]);

      const toHome = () => {
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

    return (
        
        <View style={[styles.container, {paddingTop: insets.top,paddingBottom: insets.bottom,}]}>
            <Image source={require('../Illustrations/gif-menu.gif')} style={styles.gif} />
            <View style={{flex: 2, alignItems:'center'}}>
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
        backgroundColor:'#FFC5BB'
    },
    gif:{
        flex: 2,
        width:'90%',
        height:'30%'
    },
    txt1:{
        marginTop:'20%',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:25
    },
    txt2:{
        marginTop:'5%',
        textAlign:'center',
        fontSize:18,
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