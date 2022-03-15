import * as React from 'react';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Account from "../Screens/Account"

 const MenuStack = createNativeStackNavigator();

 export default function AccountStackScreen() {
   return (
     <MenuStack.Navigator screenOptions={{ headerShown: false }}>
       <MenuStack.Screen name="Account" component={Account}/>
     </MenuStack.Navigator>
   );
 } 