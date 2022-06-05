import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainStackScreen from './StackScreens/MainStackScreen';
import NoStack from './NoStackScreens/NoStack';
import {useState, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

export default function App() {

    return (
      
          <NavigationContainer>
              <Stack.Navigator screenOptions={{headerShown: false}}>
                  
                <Stack.Screen name="MainNoStack" component={NoStack}/>
                <Stack.Screen name="Main" component={MainStackScreen}/>
                          
                          
                  
              </Stack.Navigator>
          </NavigationContainer>
    );
}