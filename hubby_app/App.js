import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainStackScreen from './StackScreens/MainStackScreen';
import NoStack from './NoStackScreens/NoStack';
import {useState, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

export default function App() {

    const [firstOpen, setfirstOpen] = useState()
        
    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('firstOpen')
          if(value !== null) {
              if(value === '1'){ setfirstOpen(true)}
              else{setfirstOpen(false)}
            
          }
        } catch(e) {
          console.log(e)
        }
      }

      useEffect(() => {
        getData()
        
      },[]);

    return (
      
          <NavigationContainer>
              <Stack.Navigator screenOptions={{headerShown: false}}>
                  {
                      firstOpen ?
                          <Stack.Screen name="Main" component={MainStackScreen}/>
                          //<Stack.Screen name="Main" component={NoStack}/>
                          :
                          <Stack.Screen name="Main" component={NoStack}/>
                          //<Stack.Screen name="Main" component={MainStackScreen}/>
                  }
              </Stack.Navigator>
          </NavigationContainer>
    );
}