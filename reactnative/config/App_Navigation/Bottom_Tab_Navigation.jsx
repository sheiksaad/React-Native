import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Home';
import About from '../../Screens/About';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Contact from '../../Screens/Contact';
import Products from '../../Screens/Products';

const Tab = createBottomTabNavigator();

const Bottom_Tab_Navigation = () => {
  return (    
   <Tab.Navigator  
   initialRouteName='Home'
   
   screenOptions={{
    tabBarActiveTintColor:'white',
    tabBarInactiveTintColor:'black',
    tabBarActiveBackgroundColor:'black',
    tabBarInactiveBackgroundColor:'white'
   }}
   
   >
    <Tab.Screen options={{
      tabBarIcon:({color})=>{
        return <AntDesign color={color} name = 'home' size= {30}/>;
      },
    }} name='Home' component={Home} />
    <Tab.Screen 
    options={{
      tabBarIcon:({color})=>{
        return <AntDesign color={color} name='infocirlceo' size={30} />
      }
    }}
     name='About' component={About} />
    <Tab.Screen
     options={{
      tabBarIcon:({color})=>{
        return <Ionicons color={color} name='person-circle-outline' size={30} />
      }
    }}
    name='Contact' component={Contact} />
    <Tab.Screen
     options={{
      tabBarIcon:({color})=>{
        return <Ionicons color={color} name='person-circle-outline' size={30} />
      }
    }}
    name='Products' component={Products} />

   </Tab.Navigator>
  )
}

export  {Bottom_Tab_Navigation}