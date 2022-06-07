import React, {useEffect} from 'react';
 import { View, Text } from 'react-native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import HomeStackScreen from '../StackScreens/HomeStackScreen.js';

 import Log from "../Screens/Log.js"
 import Discover from "../Screens/Discover.js"
 import Home from '../Screens/Home.js';
import MainStackScreen from '../StackScreens/MainStackScreen.js';
import Connect from '../Screens/Connect.js';
import CreateAccount from '../Screens/CreateAccount.js';
import AsyncStorage from '@react-native-async-storage/async-storage';


 const NoStackScreenStack = createNativeStackNavigator();

 

 export default function NoStack({navigation}) {

  useEffect(() => {
    const getFirstOpen  = async () => {
    try {
      const value = await AsyncStorage.getItem('firstOpen')
      if(value !== null) {
          if(value !== '1'){ navigation.navigate('Main') }
        
      }
    } catch(e) {
      console.log(e)
    }
  }
  getFirstOpen()

   
  }, [])

   return (
     <NoStackScreenStack.Navigator screenOptions={{ headerShown: false }}>
       <NoStackScreenStack.Screen name="Discover" component={Discover}/>
       <NoStackScreenStack.Screen name="Log" component={Log}/>
       <NoStackScreenStack.Screen name="Connect" component={Connect}/>
       <NoStackScreenStack.Screen name="CreateAccount" component={CreateAccount}/>
       <NoStackScreenStack.Screen name="MainStack" component={MainStackScreen}/>
     </NoStackScreenStack.Navigator>
   );
 }