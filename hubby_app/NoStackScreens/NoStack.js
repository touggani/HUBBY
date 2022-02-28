import * as React from 'react';
 import { View, Text } from 'react-native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import HomeStackScreen from '../StackScreens/HomeStackScreen.js';

 import Log from "../Screens/Log.js"
 import Discover from "../Screens/Discover.js"
 import Home from '../Screens/Home.js';
import MainStackScreen from '../StackScreens/MainStackScreen.js';


 const NoStackScreenStack = createNativeStackNavigator();


 export default function NoStack() {
   return (
     <NoStackScreenStack.Navigator screenOptions={{ headerShown: false }}>
       <NoStackScreenStack.Screen name="Discover" component={Discover}/>
       <NoStackScreenStack.Screen name="Log" component={Log}/>
       <NoStackScreenStack.Screen name="MainStack" component={MainStackScreen}/>
     </NoStackScreenStack.Navigator>
   );
 }