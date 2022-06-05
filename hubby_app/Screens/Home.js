import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FavorisCountry from '../Components/FavorisCountry/FavorisCountry';
import LastDish from '../Components/LastDish/LastDish';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAllRecettes } from '../Api';


export default function Home({navigation}) {
   
    const insets = useSafeAreaInsets();

    const [recettes, setRecettes] = useState(null);


    useEffect(() => {
        const getAllRecettes  = async () => {
            //await fetch(api_link+'recettes/').then(response => {console.log(response)});
            const response = await fetch('https://gentle-oasis-78916.herokuapp.com/recettes/');
            const jsonresponse = await response.json();
            setRecettes(jsonresponse)
        }
        getAllRecettes()
        console.log(recettes)
    },[]);

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
                <LastDish recettes={recettes}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    }

});