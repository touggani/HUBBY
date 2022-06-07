import React, {} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import DishPreview from './DishPreview'

export default function LastDish({navigation, recettes}) {

    return (
        <View style={styles.container}>
            {recettes && recettes.map((value, index) => (
                        <DishPreview recette={value} key={index} navigation={navigation}/>
                    ))}
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingBottom:30
    },

    title:{
        fontWeight: 'bold',
        fontSize:30,
        paddingLeft:30
    },
});