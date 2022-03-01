import React, {} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

import FavorisButton from './FavorisButton';

export default function FavorisCountry({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pays</Text>
            <Text style={styles.title}>Favoris</Text>
            <View style={{height:200}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.favorisList}>
                    <FavorisButton isActive={false}/>
                    <FavorisButton isActive={false}/>
                    <FavorisButton isActive={false}/>
                    <FavorisButton isActive={false}/>
                </ScrollView>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:3,
        paddingTop:30,
        
    },
    title:{
        fontWeight: 'bold',
        fontSize:35,
        paddingLeft:30,
    },
    favorisList:{
        paddingLeft:20,
    }
});