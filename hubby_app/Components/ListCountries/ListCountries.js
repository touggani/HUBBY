import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

import CountryBtn from "./CountryBtn"

export default function Menu({navigation}) {

    //const names = ['Abricot sauce piment', 'Saumon fumée','Poireau','Poireau']
    const List = [{
                    "name":"France",
                    "country":"France",
                    "countryCode":"fr",
                    "key" : '1010928377376776'
                },
                {
                    "name":"Canada",
                    "country":"France",
                    "countryCode":"ca",
                    "key" : '1010928377376776'
                },
                {
                    "name":"Canada",
                    "country":"France",
                    "countryCode":"ca",
                    "key" : '1010928377376776'
                },{
                    "name":"Bresil",
                    "country":"Canada",
                    "countryCode":"br",
                    "key" : '10109377361T267'
                },{
                    "name":"Japon",
                    "country":"France",
                    "countryCode":"jp",
                    "key" : '101092837999738787'
                },{
                    "name":"Italie",
                    "country":"Italie",
                    "countryCode":"it",
                    "key" : '1010928379930986543'
                },
                {
                    "name":"Maroc",
                    "country":"Maroc",
                    "countryCode":"ma",
                    "key" : '101092837993'
                }
                ,
                {
                    "name":"Maroc",
                    "country":"Maroc",
                    "countryCode":"ma",
                    "key" : '1017993'
                },
                {
                    "name":"Belgique",
                    "country":"Belgique",
                    "countryCode":"be",
                    "key" : '1017993bebe'
                }]
                

    var namesList = List.map(function(element, key){
        
        var res = DisplayLetter(element, key)
        if(res === 0){return <CountryBtn key={"btn-"+element.key} element={element} padding={10}/>}
        return [<Text key={res+key} style={styles.letter}>{res}</Text>,<CountryBtn key={"btn-"+element.key} element={element}/>]
        //return [[<Text key={"text1"+key} style={styles.letter}>{res}</Text>,<Text key={"text2"+key} style={styles.name}>{name.name}</Text>]];
        
    })

    function DisplayLetter(name, key){
        if(key == 0) return List[key].name.charAt(0)
        if(List[key].name.charAt(0) === List[key-1].name.charAt(0)) { return 0 }
        return List[key].name.charAt(0)
        
    }

    return (
        <View style={styles.container}>
            {namesList}
        </View>
    );
}

const styles = StyleSheet.create({
    letter:{
        fontSize:20,
        fontWeight:"bold",
        paddingTop:15
    }

});