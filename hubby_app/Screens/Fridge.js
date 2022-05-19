import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SearchBar } from 'react-native-elements';

import Ingredient from '../Components/Ingredient/Ingredient';

export default function Fridge({navigation}) {
   
    const insets = useSafeAreaInsets();
    const [search, setSearch] = useState("");
    const updateSearch = (search) => {
      setSearch(search);
    };
    

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <View style={styles.block1}><Text style={styles.title}>Qu'ai je dans mon frigo ?</Text>
            <SearchBar
                placeholder="Rechercher"
                placeholderTextColor="white"
                onChangeText={updateSearch}
                value={search}
                inputStyle={{}}
                containerStyle={{backgroundColor:'transparent', width:'90%', borderBottomColor:'transparent',borderTopColor:'transparent', top:20}}
                inputContainerStyle={{borderRadius:30, backgroundColor:"#E8B7B7", borderWidth:0}}
                leftIconContainerStyle={{color:'black'}}
                style={styles.searchbar}
            /></View>
           <ScrollView style={{top:40, height:'40%'}}><View style={styles.block2}>
                
                    <Ingredient/>
                    <Ingredient/>
                    <Ingredient/>
                    <Ingredient/>
                    <Ingredient/>
                    <Ingredient/>
                    <Ingredient/>
                    <Ingredient/>
                    <Ingredient/>
                    <Ingredient/>
                    <Ingredient/>
                    <Ingredient/>
                    <Ingredient/>
                    <Ingredient/>

                
            </View></ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column'
    },

    block1:{
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'center',
        width:'100%'
    },
    title:{
        fontSize:20,
    },
    block2:{
        display:'flex',
        flexWrap:'wrap',
        flex: 3,
        flexDirection:'row',
        justifyContent:'center',
        paddingBottom:100
    }

});