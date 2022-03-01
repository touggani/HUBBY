import React, {} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function DishPreview({navigation}) {

    return (
            <TouchableOpacity activeOpacity={0.8} style={styles.container}>
                <ImageBackground 
                    style={styles.image}
                    source={require("../../Illustrations/burger.png")}>
                    
                <View style={styles.time}>
                    <Text style={styles.timeText}>10 - 15 min</Text>
                </View>
                </ImageBackground>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Text style={{flex:2, left:60, fontSize:20}}>Burger</Text>
                    <Text style={{right:60,fontSize:20}}><MaterialCommunityIcons name="home" size={20} /> International</Text>
                </View>
            </TouchableOpacity>
            
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop:30,
        overflow:'hidden',
        zIndex:1,
        alignItems:'center',
    },
    image:{
        width:370,
        height:200,
        zIndex:1,
        borderRadius:67,
        overflow:'hidden',
        
    },
    time:{
        backgroundColor:'white',
        zIndex:2,
        position:'absolute',
        width:110,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        bottom:7,
        left:10,
        borderBottomLeftRadius:30,
        borderTopRightRadius:30
    },
    timeText:{

    }
});