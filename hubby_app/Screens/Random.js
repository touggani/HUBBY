import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RBSheet from "react-native-raw-bottom-sheet";
import RandomModal from '../Components/RadomModal/RandomModal';

export default function Random({navigation}) {
   
    const insets = useSafeAreaInsets();
    const refRBSheet = useRef();
    

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <View style={{flex:3, justifyContent:'center', top:50}}><Text style={styles.title}>On te choisit quelque chose ?</Text></View>
            <View style={{flex:4}}><TouchableOpacity activeOpacity={0.8} style={styles.btn}>
                <Icon name="random" size={130} color="#FFC5BB"/>
            </TouchableOpacity></View>
            <View style={{flex:3, alignItems:'center'}} >
                <MaterialCommunityIcons name="filter" size={70} color={"#E8B7B7"} onPress={() => refRBSheet.current.open()}/>
                <Text>Affine tes preferences</Text>
            </View>
            <View>
                <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                height={500}
                openDuration={250}
                customStyles={{
                    container: {
                    alignItems: "center"
                    }
                }}>
                    <RandomModal/>
                </RBSheet>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
    },
    btn:{
        top:40,
        backgroundColor:'white',
        padding:'10%',
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