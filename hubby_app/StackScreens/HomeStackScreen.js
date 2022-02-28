import * as React from 'react';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

 import Home from "../Screens/Home"

 const HomeStack = createNativeStackNavigator();

 export default function HomeStackScreen() {
   return (
     <HomeStack.Navigator screenOptions={{ headerShown: false }}>
       <HomeStack.Screen name="Home" component={Home}/>
     </HomeStack.Navigator>
   );
 } 