import * as React from 'react';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

 import Menu from "../Screens/Menu"

 const MenuStack = createNativeStackNavigator();

 export default function MenuStackScreen() {
   return (
     <MenuStack.Navigator screenOptions={{ headerShown: false }}>
       <MenuStack.Screen name="Menu" component={Menu}/>
     </MenuStack.Navigator>
   );
 } 