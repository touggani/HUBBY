import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStackScreen from "./HomeStackScreen"
import MenuStackScreen from './MenuStackScreen';


 const Tab = createBottomTabNavigator();

 const isLoggedIn = 0;

 export default function MainStackScreen() {
   return (
       
        <Tab.Navigator 
            screenOptions={{ headerShown: false, 
            tabBarActiveTintColor: 'white', 
            tabBarInactiveBackgroundColor: 'black',
            tabBarActiveBackgroundColor: '#FFC5BB',
            tabBarStyle:{
                 paddingBottom: 0,
                 paddingTop: 0
            }
            }}
        >
         <Tab.Screen 
            name="HomeStack" 
            component={HomeStackScreen}
            
            options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={50} />
                ),
                tabBarShowLabel:false,
          }}/>
          <Tab.Screen 
            name="MenuStack" 
            component={MenuStackScreen}
            
            options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="silverware-fork-knife" color={color} size={50} />
                ),
                tabBarShowLabel:false,
          }}/>
              
       </Tab.Navigator>
   );
 }