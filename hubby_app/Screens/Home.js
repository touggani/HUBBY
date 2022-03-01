import React, {useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FavorisCountry from '../Components/FavorisCountry/FavorisCountry';
import LastDish from '../Components/LastDish/LastDish';

export default function Home({navigation}) {
   
    const insets = useSafeAreaInsets();

    

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <ScrollView style={{paddingBottom:30}}>
            <FavorisCountry/>
            <LastDish/></ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    }

});