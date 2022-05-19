import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Pressable, Image, TouchableOpacity, Button} from 'react-native';
import logo from "../Illustrations/logo.png"
import FadeInOut from 'react-native-fade-in-out';
import LottieView from 'lottie-react-native';
import Btn from '../Components/Btn';
import { LoremIpsum } from "lorem-ipsum";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function DiscoverComponent({page, navigation}) {

    const [visible, setVisible] = useState(false);
    useEffect(() => {
        setVisible(true);
        
      },[]);

      const lorem = new LoremIpsum({
        sentencesPerParagraph: {
          max: 8,
          min: 4
        },
        wordsPerSentence: {
          max: 16,
          min: 4
        }
      });

      function toLog(){
        navigation.push('Log');
    }

    return (
        
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
              {page === 1 ?
                <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                    <View style={{flex:3, justifyContent:'center'}}>
                    <FadeInOut visible={visible} scale={true} duration={1200}>
                    <Image
                        style={styles.tinyLogo}
                        source={require("../Illustrations/logo.png")}
                    />
                    </FadeInOut>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={styles.title}>Bienvenue sur HUBBY</Text>
                    </View>
                </View>:
                <View>
                    <View style={{flex:4, justifyContent:'center', alignItems:'center' }}>
                        <Text style={styles.title}>{page ===2 ? "Découvrir" : "Partager"}</Text>
                    </View>
                    <View style={{flex:5}}>
                    {page === 2 ?
                        <LottieView source={require('../lottieJson/cooking-kitchen.json' )} autoPlay loop style={styles.gif}/>  
                        :
                        <LottieView source={require('../lottieJson/share.json' )} autoPlay loop style={styles.gif}/> }
                    </View>
                    <View style={styles.description}>
                        <Text>{lorem.generateParagraphs(7)}</Text>  
                                              
                    </View>
                    <View style={{flex:3, alignItems:'center'}}>
                        {page === 3 ?  <Btn text={"C'est parti"} action={toLog}/> : null}              
                    </View>
                </View>}
              
        </View>
        


    );
}


const styles = StyleSheet.create({
    tinyLogo:{
        height: hp('30%'),
        width: wp('60%')
    },
    title:{
        fontSize: hp('2%')
    },
    gif:{
    },
    description:{
        flex:2,
        alignItems:'center',
        paddingRight:25,
        paddingLeft:25,
        fontSize:40
    }
    
});