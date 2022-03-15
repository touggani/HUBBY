import React, {useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Fridge({navigation}) {
   
    const insets = useSafeAreaInsets();

    

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },

});