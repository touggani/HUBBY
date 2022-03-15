import * as React from 'react';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

 import Fridge from '../Screens/Fridge';

 const MenuStack = createNativeStackNavigator();

 export default function FridgeStackScreen() {
   return (
     <MenuStack.Navigator screenOptions={{ headerShown: false }}>
       <MenuStack.Screen name="Fridge" component={Fridge}/>
     </MenuStack.Navigator>
   );
 } 