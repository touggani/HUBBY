import React, {} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import DishPreview from './DishPreview'

export default function LastDish({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dernières recettes</Text>
            <Text style={styles.title}>consultées</Text>

            <DishPreview/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:4,
        paddingTop:30,
        paddingBottom:30
    },

    title:{
        fontWeight: 'bold',
        fontSize:35,
        paddingLeft:30
    },
});