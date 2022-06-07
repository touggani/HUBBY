import React, {} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CommonActions } from '@react-navigation/native';



export default function DishPreview({navigation, recette}) {

    const temps = recette.duree*100+" min"

    function toRecetteDetails(){
        navigation.push('DetailMenu', {recette : recette});
      }

    return (
            <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={toRecetteDetails}>
                <ImageBackground 
                    style={styles.image}
                    source={require("../../Illustrations/burger.png")}>
                    
                <View style={styles.time}>
                    <Text style={styles.timeText}>{temps}</Text>
                </View>
                </ImageBackground>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Text style={{flex:2, left:"300%", fontSize:17}}>{recette.nom}</Text>
                </View>
            </TouchableOpacity>
            
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop:30,
        overflow:'hidden',
        zIndex:1,
        alignItems:'center',
    },
    image:{
        width:370,
        height:200,
        zIndex:1,
        borderRadius:67,
        overflow:'hidden',
        
    },
    time:{
        backgroundColor:'white',
        zIndex:2,
        position:'absolute',
        width:110,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        bottom:7,
        left:10,
        borderBottomLeftRadius:30,
        borderTopRightRadius:30
    },
    timeText:{

    }
});