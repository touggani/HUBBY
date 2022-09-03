import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity, Pressable} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Swiper from 'react-native-web-swiper';


export default function CookingInstructions({etape,route, navigation}) {
   
    console.log(route.params.etape)
    const swiperRef = useRef(null);


    return (
        <View style={styles.container}>
            <Swiper
                    ref={swiperRef}
                    minDistanceForAction={0.1}
                    controlsEnabled={false}
                    controlsProps={{
                      dotsTouchable: false,
                      prevTitle:"",
                      nextTitle:"Suivant",
                      nextPos: 'top-right',
                      prevPos: 'top',
                      
                      nextTitleStyle:{
                        bottom:100,
                        right:'340%',
                        alignContent:'center',
                        color:'black'

                      }
                    }}
                  >
                     
                      { route.params.etape ? route.params.etape.map((value, index) => (
                            <View style={{flex:1,alignItems:"center",justifyContent:"center", paddingHorizontal:'20%'}} key={"view"+index} onStartShouldSetResponder={() => swiperRef.current.goToNext()}>
                                <Text style={styles.etape}>Etape {value.id}</Text>
                                <Text style={styles.item} key={index}>{value.description}</Text>
                            </View>
                        )) : null }
                        <View style={{flex:1,alignItems:"center",justifyContent:"center", paddingHorizontal:'20%'}}>
                            <Text style={styles.etape}>Bonne dégustation</Text>
                            <Text style={styles.detail}>Vous avez fini la préparation de votre recette</Text>
                            <Pressable style={styles.btn} onPress={()=> {navigation.goBack()}}>
                                <Text style={styles.txt}>Revenir au menu</Text>
                            </Pressable>
                        </View>
                  </Swiper>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1
    },
    etape:{
        fontSize:25
    },
    item:{
        marginVertical:60
    },
    detail:{
        marginTop:30,
        textAlign:'center'
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
         top:40,
         bottom:40
    },
    txt:{
        color:'#D58C8C',
        fontSize:20,
        fontWeight:'bold'
    }

});