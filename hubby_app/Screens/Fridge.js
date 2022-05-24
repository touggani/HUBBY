import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SearchBar } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import Ingredient from '../Components/Ingredient/Ingredient';

export default function Fridge({navigation}) {
   
    const insets = useSafeAreaInsets();
    const [search, setSearch] = useState("");
    const updateSearch = (search) => {
      setSearch(search);
    };

    const [fridge, setFridge] = useState([]); 

    const getData = async () => {
        try {
          var jsonValue = await AsyncStorage.getItem('fridge')
          jsonValue = jsonValue + ']'
          console.log(JSON.parse(jsonValue))
          return JSON.parse(jsonValue);
        } catch(e) {
            //console.log(jsonValue)
          return JSON.parse("[]")
        }
    }

    const addToState = async () => {
        const res = await getData()
        console.log(res)
        console.log(res[Object.keys(res).length-1].quantite)
        setFridge(prevState => [...prevState, {key: res[Object.keys(res).length-1].key,produit: res[Object.keys(res).length-1].produit, quantite: res[Object.keys(res).length-1].quantite}]);
    }

    const removeKey = (key) => {
        //delete for state
        var list = [];
        list = "["
        console.log(list.length)
        for(var i = 0; i<fridge.length; i++){
            if(fridge[i].key != key){
                if(list.length == 1){list = list + fridge[i]}
                else{list = list + ","+fridge[i]}
                //console.log(fridge[i])
            }
            
        }
        list = list + ']'
        //setFridge(list)
        console.log("last:"+ JSON.parse(list)[0] )
        
    };
    

    const remove = async () => {await AsyncStorage.removeItem('fridge'); console.log("done remove"); setFridge([])}
    const add = async () => {
        const data = {"key": uuid.v4(),"produit": "orange", "quantite":3}
        var fridge = await AsyncStorage.getItem('fridge'); 
        if( fridge == null ) { await AsyncStorage.setItem('fridge', fridge = '['+JSON.stringify(data)); }
        else { await AsyncStorage.setItem('fridge', fridge += ','+JSON.stringify(data)); }
        console.log("done add")
        addToState()
    }

    const t = async () => { removeKey("db3ffbc5-a6d7-48c6-a931-28480dc17cc2") }

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Text onPress={t}>remove</Text>
            <Text onPress={remove}>remove All</Text>
            <Text onPress={add}>add</Text>
            <Text onPress={getData}>getData</Text>
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
                    { fridge.length != 0 ?
                    fridge.map((value, index) => (
                            <Ingredient value={value} key={value.key}/>
                    )) : null }
                    

                
            </View></ScrollView>
            <TouchableOpacity activeOpacity={0.8} style={styles.btn} >
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


/*const [fridge, setFridge] = useState([{}]); 

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
        quantite: 3
    }


    const addProductIntoStorage = async () => {
        var fridge = await AsyncStorage.getItem('fridge');
        if(await AsyncStorage.getItem('fridge') == null){ await AsyncStorage.setItem('fridge', fridge = "["+JSON.stringify(pro));}
        else{
            await AsyncStorage.setItem('fridge', fridge += ','+JSON.stringify(pro));}
        var res = await AsyncStorage.getItem('fridge')
        res = res + "]"
        var resparse = JSON.parse(res)
        console.log("last element: "+ resparse[resparse.length-1].produit)
        setFridge((prevFridge) => [
            ...prevFridge,
            {
                "produit": resparse[resparse.length-1].produit,
                //"quantite": resparse[resparse.length-1].quantite
            },
        ]);
        console.log(resparse)
        //setFridge(resparse[resparse.length-1])
        for(var i = 0; i<resparse.length;i++){
            setFridge((prevFridge) => [...prevFridge, {"produit" : resparse[i].produit, "quantite" : resparse[i].quantite}])
        }
    }

    const deleteProductIntoStorage = async () => {
        await AsyncStorage.removeItem('fridge')
        console.log(await AsyncStorage.getItem('fridge'))
    }*/