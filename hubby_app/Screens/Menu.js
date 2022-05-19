import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchBar } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ListCountries from '../Components/ListCountries/ListCountries'

export default function Menu({navigation}) {
   
    const insets = useSafeAreaInsets();
    const [search, setSearch] = useState("");

    

    const updateSearch = (search) => {
      setSearch(search);
    };

    const [active, setActive] = useState(2);
    
    

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <View style={{flexDirection:'row',}}>
                <SearchBar
                    placeholder="Rechercher"
                    placeholderTextColor="white"
                    onChangeText={updateSearch}
                    value={search}
                    inputStyle={{borderColor:'yellow'}}
                    containerStyle={{backgroundColor:'transparent', width:'90%', borderBottomColor:'transparent',borderTopColor:'transparent'}}
                    inputContainerStyle={{borderRadius:30, backgroundColor:"#E8B7B7", borderWidth:0}}
                    leftIconContainerStyle={{color:'black'}}
                    style={styles.searchbar}
                />
                <MaterialCommunityIcons onPress={() => {alert("click")}} name="filter" size={40} color={"#E8B7B7"} style={{left:0,top:15}}/>
            </View>
            <ScrollView style={{height:'1%'}}>
                <View style={styles.scrollList}>
                    <View style={styles.topMenu}>
                        <View style={styles.topMenuComponent}><Text style={[active === 1 ? styles.topMenuComponentAZ : null ]} onPress={() => {setActive(1)}}>A-Z</Text></View>
                        <View style={styles.topMenuComponent}><Text style={[active === 2 ? styles.topMenuComponentPays : null]} onPress={() => {setActive(2)}}>Pays</Text></View>
                    </View>
                    <View style={styles.scrollList}>
                        <View style={styles.list}> 
                            {active === 1 ? 
                                <Text>1</Text> : 
                                <ListCountries/>}
                        </View> 
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal:'7%',
    },
    topMenu:{
        flexDirection:'row',
        top:30, 
        borderWidth:1, 
        borderColor:"#E8B7B7", 
        paddingTop:3,
        paddingBottom:3,
        borderRadius:30,
        width:'100%'
    },
    topMenuComponent:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
    },
    topMenuComponentAZ:{
        backgroundColor:'#E8B7B7',
        borderRadius:30,
        paddingVertical:10,
        paddingHorizontal:'40%',
        overflow:"hidden",
        borderRadius:20,
        
        
    },
    topMenuComponentPays:{
        backgroundColor:'#E8B7B7',
        borderRadius:30,
        paddingVertical:10,
        paddingHorizontal:'40%',
        overflow:"hidden",
        borderRadius:20,
    },
    list:{
        top:60,
        height:100,
    
    },
    scrollList:{
        paddingBottom:330,
        flex: 3,
    }
    

});