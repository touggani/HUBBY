import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RBSheet from "react-native-raw-bottom-sheet";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import pp from "../Illustrations/pp.jpg"

export default function Random({navigation}) {
   
    const insets = useSafeAreaInsets();
    const refRBSheet = useRef();
    

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <View style={styles.userNameblock}><Text style={styles.userName}>NOM_UTILISATEUR</Text></View>
            <View style={styles.userPicblock}><Image style={styles.userProfil} source={pp} /></View>
            <View style={styles.block}><TouchableOpacity activeOpacity={0.8} style={styles.btn}>
                    <Text>Editer mon profil</Text>
                </TouchableOpacity></View>
        </View>
    );
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
    }

});