import React, {useState,useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView, FlatList, Image, Pressable} from 'react-native';
import image from '../Illustrations/none.jpeg'
import Btn from '../Components/Btn';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function DetailMenu({route, navigation}) {

    const [recette, setRecette] = useState(null)
    const [commentaire, setCommentaire] = useState(null)
    const [temps, setTemps] = useState(null)
    const [etape, setEtape] = useState(null)


    useEffect(() => {

        const getAllRecettes  = async () => {
            //await fetch(api_link+'recettes/').then(response => {console.log(response)});
            const response = await fetch('https://gentle-oasis-78916.herokuapp.com/etapes/'+recette.id, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    //'Authorization': await AsyncStorage.getItem('jwt')
                },
            },);
            const jsonresponse = await response.json();
            setEtape(jsonresponse)
        }
        if(recette) getAllRecettes()
    }, [recette])

    useEffect(() => {
        
        const getAllCommentaire  = async () => {
            //console.log(await AsyncStorage.getItem('api_token'))
            //await fetch(api_link+'recettes/').then(response => {console.log(response)});
            const response = await fetch('https://gentle-oasis-78916.herokuapp.com/commentaire/'+recette.id, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authentication' : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NywiZXhwIjoxNjYyMjkzMjY1LCJpYXQiOjE2NjIyODk2NjV9.tPczHQ_y1Xybg3LsYKy629dS_oMO3LZgKQw0IpcrEfw"
                    //await AsyncStorage.getItem('api_token')
                },
            },);
            const jsonresponse = await response.json();
            setCommentaire(jsonresponse)
            console.log("reponse "+JSON.stringify(jsonresponse))
        }
        if(recette) getAllCommentaire()
    }, [recette])



    useEffect(() => {
        setRecette(route.params.recette)
        if(recette)setTemps(recette.duree*100+" min")
    }, [recette])
    
    useEffect(() => {
        const toStep  = () => {
            navigation.push('CookingInstructions', {
                step: etape,
            })
        }
    }, [etape])

    return (
        
        <View style={styles.container}>
            <ScrollView>
            {recette && etape &&
                <View>
                    <Image style={styles.image} source={image} />
                    <View  style={styles.informations}>
                        <Text style={styles.name}>{recette.nom}</Text>
                        <Text style={styles.title}>Description:</Text>
                        <Text>{recette.description}</Text>
                        <Text style={styles.title}>Durée de preparation:</Text>
                        <Text>{temps}</Text>
                        <Text style={styles.title}>Les ingrédients:</Text>
                        {recette.Ingredient.map((value, index) => (
                            <Text style={styles.item} key={index}>{'\u2022'}{value.nom}</Text>
                        ))}
                        <View style={{alignItems:'center'}}>
                        {etape ? <Pressable style={styles.btn} onPress={() => {navigation.push('CookingInstructions', {
                                etape: etape,
                            })}}>
                            <Text style={styles.txt}>Commencer</Text>
                        </Pressable> : null}
                        </View>
                        {/*<Text style={styles.title}>Les étapes de préparation:</Text>
                        etape ? etape.map((value, index) => (
                            <Text style={styles.item} key={index}>{index+1+". "}{value.description}</Text>
                        )) : null*/}

                    </View>
                </View>
            }
            <Text style={{marginTop:'20%', fontSize:25}}>Commentaires:</Text>
            </ScrollView>
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop:30,
        flex:1,
        display:'flex'
    },
    informations:{
        paddingHorizontal:'5%',
        marginTop:20,
    },
    image:{
        width:"100%"
    },
    name:{
        fontSize:30
    },
    title:{
        paddingTop:20,
        paddingBottom:5,
        fontSize:16,
        fontWeight:"bold"
    },
    btn:{
        alignItems:'center',
        justifyContent:'center',
        width:280,
        height:50,
        backgroundColor:'#F8F0E1',
        borderRadius:30,
        shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 2,
         },
         shadowOpacity: 0.23,
         shadowRadius: 2.62,
 
         elevation: 4,
         top:40,
         bottom:40
    },
    txt:{
        color:'#D58C8C',
        fontSize:20,
        fontWeight:'bold'
    }
    
});