import * as React from 'react';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

 import Home from "../Screens/Home"
import DetailMenu from '../Screens/DetailMenu';
import CookingInstructions from '../Screens/CookingInstructions'

 const HomeStack = createNativeStackNavigator();

 export default function HomeStackScreen() {
   return (
     <HomeStack.Navigator screenOptions={{ headerShown: false }}>
       <HomeStack.Screen name="Home" component={Home}/>
       <HomeStack.Screen name="DetailMenu" component={DetailMenu}/>
       <HomeStack.Screen name="CookingInstructions" component={CookingInstructions}/>
     </HomeStack.Navigator>
   );
 } 