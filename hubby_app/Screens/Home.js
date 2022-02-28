import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FavorisCountry from '../Components/FavorisCountry/FavorisCountry';

export default function Home({navigation}) {
   
    const insets = useSafeAreaInsets();

    

    return (
        <View style={[styles.container, {paddingTop: insets.top,paddingBottom: insets.bottom,}]}>
            <FavorisCountry/>
            <Text style={{flex:4}}>HELL</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1
    }

});