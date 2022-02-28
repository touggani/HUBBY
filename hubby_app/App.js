import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainStackScreen from './StackScreens/MainStackScreen';
import NoStack from './NoStackScreens/NoStack';
import {useState} from "react";

const Stack = createNativeStackNavigator();

export default function App() {

  const [logged, setLogged] = useState(false)

    return (
      
          <NavigationContainer>
              <Stack.Navigator screenOptions={{headerShown: false}}>
                  {
                      logged ?
                          <Stack.Screen name="Main" component={MainStackScreen}/>
                          :
                          <Stack.Screen name="Main" component={NoStack}/>
                  }
              </Stack.Navigator>
          </NavigationContainer>
    );
}