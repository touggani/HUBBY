import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Pressable, Image, TouchableOpacity, Button} from 'react-native';
import Btn from '../Components/Btn'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Swiper from 'react-native-web-swiper';
import DiscoverComponent from './DiscoverComponent';


export default function Discover({navigation}) {
    const insets = useSafeAreaInsets();
    

    return (
        
        <View style={{flex:1}}>
              <View style={{flex:1}}>
                  <Swiper
                    minDistanceForAction={0.1}
                    controlsProps={{
                      dotsTouchable: true,
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
                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#FFC5BB"}}>
                          <DiscoverComponent page={1} navigation={navigation}/>
                      </View>
                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#FFC5BB"}}>
                        <DiscoverComponent page={2} navigation={navigation}/>
                      </View>
                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#FFC5BB"}}>
                        <DiscoverComponent page={3} navigation={navigation}/>
                      </View>
                  </Swiper>
              </View>
              
          </View>
        


    );
}


const styles = StyleSheet.create({
    
    
});