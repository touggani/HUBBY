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

    const [active, setActive] = useState(1);
    
    

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <View style={{flexDirection:'row',}}>
                <SearchBar
                    placeholder="Rechercher"
                    placeholderTextColor="white"
                    onChangeText={updateSearch}
                    value={search}
                    inputStyle={{borderColor:'yellow'}}
                    containerStyle={{backgroundColor:'transparent', width:330, borderBottomColor:'transparent',borderTopColor:'transparent'}}
                    inputContainerStyle={{borderRadius:30, backgroundColor:"#E8B7B7", borderWidth:0}}
                    leftIconContainerStyle={{color:'black'}}
                    style={styles.searchbar}
                />
                <MaterialCommunityIcons name="filter" size={40} color={"#E8B7B7"} style={{left:0,top:15}}/>
            </View>
            <ScrollView style={{}}>
                <View style={styles.topMenu}>
                    <Text style={[styles.topMenuComponent, active === 1 ? styles.topMenuComponentPays : null ]} onPress={() => {setActive(1)}}>A-Z</Text>
                    <Text style={[styles.topMenuComponent, active === 2 ? styles.topMenuComponentAZ : null]} onPress={() => {setActive(2)}}>Pays</Text>
                </View>
                <View>
                    <View style={styles.list}> 
                        {active === 1 ? 
                            <Text>1</Text> : 
                            <ListCountries/>}
                    </View> 
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 3,
        paddingHorizontal:'7%',
    },
    topMenu:{
        flex:2,
        flexDirection:'row',
        top:30, 
        borderWidth:1, 
        borderColor:"#E8B7B7", 
        paddingTop:3,
        paddingBottom:3,
        borderRadius:30,
        paddingRight:3,
        paddingLeft:3,
    },
    topMenuComponent:{
        paddingRight:70,
        paddingLeft:70,
        paddingTop:20,
        paddingBottom:20,
        borderRadius:30,
        overflow:"hidden"
    },
    topMenuComponentAZ:{
        backgroundColor:'#E8B7B7',
        borderRadius:30,
        
    },
    topMenuComponentPays:{
        backgroundColor:'#E8B7B7',
        borderRadius:30,
    },
    list:{
        top:60,
        height:100,
    
    }
    

});