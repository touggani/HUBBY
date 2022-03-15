import * as React from 'react';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

 import Random from "../Screens/Random"

 const MenuStack = createNativeStackNavigator();

 export default function RandomStackScreen() {
   return (
     <MenuStack.Navigator screenOptions={{ headerShown: false }}>
       <MenuStack.Screen name="Random" component={Random}/>
     </MenuStack.Navigator>
   );
 } 