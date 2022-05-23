import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SearchBar } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Ingredient from '../Components/Ingredient/Ingredient';

export default function Fridge({navigation}) {
   
    const insets = useSafeAreaInsets();
    const [search, setSearch] = useState("");
    const updateSearch = (search) => {
      setSearch(search);
    };

    const [fridge, setFridge] = useState(); 

    useEffect(() => {

        const addToState = async () => {
           const storage = await AsyncStorage.getItem('fridge')
            //setFridge(oldArray => [...oldArray, newElement]);
            //console.log(storage) 
            //console.log(JSON.parse(storage)) 
        }
        addToState()
        
        
      },[]);

    const pro = {
        produit: "tomate",
        quantité: 3
    }


    const addProductIntoStorage = async () => {
        var fridge = await AsyncStorage.getItem('fridge');
        if(await AsyncStorage.getItem('fridge') == null){ await AsyncStorage.setItem('fridge', fridge = "["+JSON.stringify(pro));}
        else{ await AsyncStorage.setItem('fridge', fridge += JSON.stringify(pro));}
        //console.log(JSON.parse(await AsyncStorage.getItem('fridge'))) 
        console.log(await AsyncStorage.getItem('fridge'))
    }

    const deleteProductIntoStorage = async () => {
        await AsyncStorage.removeItem('fridge')
        console.log(await AsyncStorage.getItem('fridge'))
    }
    

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Text onPress={deleteProductIntoStorage}>remove</Text>
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
           <ScrollView style={{top:10, height:'40%',width:'100%'}}><View style={styles.block2}>
                
                    <Ingredient/>
                    <Ingredient/>
                    <Ingredient/>

                
            </View></ScrollView>
            <TouchableOpacity activeOpacity={0.8} style={styles.btn} onPress={addProductIntoStorage}>
                <Icon name="plus" size={50} color="#FFC5BB"/>
            </TouchableOpacity>
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
        justifyContent:'center',
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
        paddingBottom:40
    },
    btn:{
        bottom:5,
        backgroundColor:'white',
        paddingHorizontal:'5%',
        paddingVertical:'4%',
        borderRadius:100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    }

});