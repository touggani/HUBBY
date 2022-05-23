import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FavorisCountry from '../Components/FavorisCountry/FavorisCountry';
import LastDish from '../Components/LastDish/LastDish';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Home({navigation}) {
   
    const insets = useSafeAreaInsets();

    const remove  = async () => {
        try {
            await AsyncStorage.removeItem('fridge')
          } catch(e) {
            // remove error
          }
        
          console.log('Done.')
    }
            
    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Text onPress={remove}>Remove </Text>
            <ScrollView style={{paddingBottom:30, flex:1}}>
                <FavorisCountry/>
                <LastDish/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    }

});