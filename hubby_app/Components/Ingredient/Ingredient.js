import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Ingredient({value, removeKey}) {
   
    const insets = useSafeAreaInsets();

    const [nb, setnb] = useState(value.quantite);
    
    const addNb = () => {
        if(nb > 1){ setnb(nb-1 )}
    } 

    return (
        <View style={styles.container} key={value.key}>
            <Text style={styles.ingredient}>{value.produit}</Text>
            <View style={styles.compteur}>
                <Text style={[styles.Elemcompteur, styles.cmpBtn]} onPress={addNb}>-</Text>
                <Text style={styles.Elemcompteur}>{nb}</Text>
                <Text style={[styles.Elemcompteur, styles.cmpBtn]} onPress={() => {setnb(nb+1)}}>+</Text>
            </View>
            <MaterialCommunityIcons onPress={() => {removeKey(value.key)}} name="delete" size={30} color={"#000"} style={{top:15}}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
    alignItems:'center',
      flexDirection:'column',
      backgroundColor:'red',
      paddingHorizontal:'3%',
      paddingVertical:'6%',
      borderRadius:25,
      borderWidth:1,
      borderColor:'transparent',
      marginHorizontal:3,
      marginVertical:3,
      width:'30%'
    },
    ingredient:{
        fontSize:16
    },

    compteur:{
        flexDirection:'row',
        top:10
    },
    Elemcompteur:{
        fontSize:19,
        paddingHorizontal:'10%'
    },
    cmpBtn:{
        backgroundColor:'white',
        borderRadius:20/2,
        borderWidth:1,
        borderColor:'transparent',
        overflow:'hidden'
    }

});