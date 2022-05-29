import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';


import HomeStackScreen from "./HomeStackScreen"
import MenuStackScreen from './MenuStackScreen';
import RandomStackScreen from './RandomStackScreen';
import FridgeStackScreen from './FridgeStackScreen';
import AccountStackScreen from './AccountStackScreen';


 const Tab = createBottomTabNavigator();

 const isLoggedIn = 0;
 const iconSize = 40;
 const connect = 1;

 export default function MainStackScreen() {
   return (
       
        <Tab.Navigator 
            screenOptions={{ headerShown: false, 
            tabBarActiveTintColor: 'black', 
            tabBarInactiveTintColor: 'white',
            tabBarHideOnKeyboard: 'true',
            tabBarInactiveBackgroundColor: '#FFC5BB',
            tabBarActiveBackgroundColor: '#FFC5BB',
            tabBarStyle:{
                 paddingBottom: 0,
                 paddingTop: 0,
                 height:100,
            },
            
            
            }}
        >
         <Tab.Screen 
            name="HomeStack" 
            component={HomeStackScreen}
            
            options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={iconSize} style={{marginBottom:15}}/>
                ),
                tabBarShowLabel:false,
          }}/>
          <Tab.Screen 
            name="MenuStack" 
            component={MenuStackScreen}
            
            options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="silverware-fork-knife" color={color} size={iconSize} style={{marginBottom:15}} />
                ),
                tabBarShowLabel:false,
          }}/>
          <Tab.Screen 
            name="RandomStack" 
            component={RandomStackScreen}
            
            options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="random" size={iconSize} color={color} style={{marginBottom:15}}/>
                ),
                tabBarShowLabel:false,
          }}/>
          <Tab.Screen 
            name="FridgeStack" 
            component={FridgeStackScreen}
            
            options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="fridge" color={color} size={iconSize} style={{marginBottom:15}}/>
                ),
                tabBarShowLabel:false,
          }}/>
           
          <Tab.Screen 
            name="AccountStack" 
            component={AccountStackScreen}
            
            options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="account" color={color} size={iconSize} style={{marginBottom:15}}/>
                ),
                tabBarShowLabel:false,
          }}/>
              
       </Tab.Navigator>
   );
 }