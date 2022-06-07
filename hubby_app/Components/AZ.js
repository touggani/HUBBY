import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FavorisCountry from './FavorisCountry/FavorisCountry';
import LastDish from './LastDish/LastDish';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function AZ({navigation}) {
   
    const insets = useSafeAreaInsets();

    const [recettes, setRecettes] = useState(null);


    useEffect(() => {
        const getAllRecettes  = async () => {
            //await fetch(api_link+'recettes/').then(response => {console.log(response)});
            const response = await fetch('https://gentle-oasis-78916.herokuapp.com/recettes/');
            const jsonresponse = await response.json();
            setRecettes(jsonresponse)
            try {
                console.log("token "+await AsyncStorage.getItem('api_token'))
                console.log("connect "+await AsyncStorage.getItem('isConnected'))
                console.log("id "+await AsyncStorage.getItem('id'))
              } catch (e) {
                // saving error
              }
        }
        getAllRecettes()
    },[]);

            
    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
                <LastDish recettes={recettes} navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    }

});