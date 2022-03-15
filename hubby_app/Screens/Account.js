import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RBSheet from "react-native-raw-bottom-sheet";

import pp from "../Illustrations/pp.jpg"

export default function Random({navigation}) {
   
    const insets = useSafeAreaInsets();
    const refRBSheet = useRef();
    

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Text>NOM_UTILISATEUR</Text>
            <View><Image
                style={styles.userProfil}
                source={pp}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingHorizontal:20,
    },
    userProfil:{
        borderRadius:100,
        width:120,
        height:120,
        top:20
        
    }

});