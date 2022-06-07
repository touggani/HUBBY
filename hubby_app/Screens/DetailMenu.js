import React, {useState,useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView, FlatList, Image} from 'react-native';
import image from '../Illustrations/none.jpeg'



export default function DetailMenu({route, navigation}) {

    const [recette, setRecette] = useState(null)
    const [temps, setTemps] = useState(null)
    const [etape, setEtape] = useState(null)


    useEffect(() => {
        const getAllRecettes  = async () => {
            //await fetch(api_link+'recettes/').then(response => {console.log(response)});
            const response = await fetch('https://gentle-oasis-78916.herokuapp.com/etapes/');
            const jsonresponse = await response.json();
            setEtape(jsonresponse)
            console.log(jsonresponse)
        }
        getAllRecettes()
    }, [])

    useEffect(() => {
        setRecette(route.params.recette)
        if(recette)setTemps(recette.duree*100+" min")
        const getAllRecettes  = async () => {
            //await fetch(api_link+'recettes/').then(response => {console.log(response)});
            const response = await fetch('https://gentle-oasis-78916.herokuapp.com/etapes/');
            const jsonresponse = await response.json();
        }
        getAllRecettes()
    }, [recette])
    

    return (
        
        <View style={styles.container}>
            <ScrollView>
            {recette && 
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
                    </View>
                </View>
            }
            </ScrollView>
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop:30,
    },
    informations:{
        paddingHorizontal:'5%',
        marginTop:20
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
        fontSize:16
    }
    
});