import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchBar } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Menu({navigation}) {
   
    const insets = useSafeAreaInsets();
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
      setSearch(search);
    };
    

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <View style={{flexDirection:'row'}}>
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

            <View style={{flexDirection:'row',top:50, borderWidth:1, borderColor:"#E8B7B7", paddingTop:3,paddingBottom:3,borderRadius:30,paddingRight:3,paddingLeft:3,}}>
                <Text style={{paddingRight:50,paddingLeft:50,borderWidth:1,borderColor:"#E8B7B7",paddingTop:20,paddingBottom:20,borderRadius:30 }}>A-Z</Text>
                <Text style={{backgroundColor:"#E8B7B7" ,alignItems:'center',paddingRight:50,paddingLeft:50,borderWidth:1,borderColor:"#E8B7B7",paddingTop:20,paddingBottom:20,borderRadius:30 }}>Pays</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:0,
        alignItems:'center'
    }

});