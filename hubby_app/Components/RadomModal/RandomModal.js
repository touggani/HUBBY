import React, {useEffect, useState,} from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity, Switch} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RBSheet from "react-native-raw-bottom-sheet";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RandomModal({navigation}) {
   
    const insets = useSafeAreaInsets();

    const [isEnabled, setIsEnabled] = useState(0);


    useEffect(() => {
        const initParam = async() => {
            try{
                var param = await AsyncStorage.getItem('parameters_vegetarien')
                if(param === "true"){setIsEnabled(true)}
            }
            catch(e){
                console.log(e)
            }
            
        }
        initParam()
    },[]);

    useEffect(() => {
        const changeState = async() => {
            try{
                await AsyncStorage.setItem('parameters_vegetarien', JSON.stringify(isEnabled))
            }
            catch(e){
                console.log(e)
            }
        }
        changeState()
    },[isEnabled]);
    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mes preferences de recherche</Text>
            <View style={{top:30}}>
                <View style={{flexDirection:'row', alignItems:'center',}}>
                    <Text style={{paddingHorizontal:30, paddingVertical:15}}>Végétarien</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#ffefe4" }}
                        thumbColor={isEnabled ? "#FFC5BB" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setIsEnabled}
                        value={isEnabled}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      top:20,
      alignItems:'center',
    },
    title:{
        fontSize:20,
        
    }
   

});