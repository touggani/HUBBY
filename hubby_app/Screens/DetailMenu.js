import React, {useState,useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView, FlatList, Image, Pressable, TextInput} from 'react-native';
import image from '../Illustrations/none.jpeg'
import Btn from '../Components/Btn';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function DetailMenu({route, navigation}) {

    const [recette, setRecette] = useState(null)
    const [commentaire, setCommentaire] = useState(null)
    const [temps, setTemps] = useState(null)
    const [etape, setEtape] = useState(null)
    const [inputCommentaire, setInputCommentaire] = useState(null)




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
            //await fetch(api_link+'recettes/').then(response => {console.log(response)});
            const response = await fetch('https://gentle-oasis-78916.herokuapp.com/commentaire/'+recette.id, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
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
    
    const sendCommentaire  = async () => {
        const response = await fetch('https://gentle-oasis-78916.herokuapp.com/commentaire/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"commentaire": inputCommentaire, "user":parseInt(await AsyncStorage.getItem('api_token')),"recette":recette.id, })
            },);
            const jsonresponse = await response.json();
            console.log("reponse "+JSON.stringify(jsonresponse))
    }

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
            <View style={{marginTop:'20%', fontSize:25, paddingHorizontal:30}}>
                <Text style={{fontSize:25}}>Commentaires:</Text>
                { commentaire ? commentaire.map((value, index) => (
                                <Text style={styles.com} key={index}>{index+1+". "}{value.commentaire}</Text>
                            )) : null}
                <TextInput
                    style={styles.input}
                    onChangeText={setInputCommentaire}
                    value={inputCommentaire}
                    placeholder="Commentaire"
                />
                { commentaire && recette ? <Pressable style={styles.btn_com} onPress={() => {sendCommentaire()}}>
                            <Text style={styles.txt_com}>Envoyé</Text> 
                </Pressable>: null}
            </View>
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
    }, 
    com:{
        paddingVertical:20
    },
    input:{
        width:'100%',
        marginTop:20,
        paddingHorizontal:20,
        paddingVertical:15,
        backgroundColor:'#E5E5E5',
        borderRadius:10,
        fontSize:15,
    },
    btn_com:{
        marginVertical:'10%',
        backgroundColor:'#E5E5E5',
        textAlign:'center',
        paddingVertical:'5%',
        
    },
    txt_com:{
        color:'#D58C8C',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    }
    
});