import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Refine from './Refine'
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native'
import ExploreHome from './ExploreHome'
import Network from './Network'
import Chat from './Chat'
import Contacts from './Contacts'
import Groups from './Groups'

const Tab = createBottomTabNavigator()

export default function Explore() {
  return (
    
    <Tab.Navigator>
      <Tab.Screen name='ExploreHome' component={ExploreHome} options={{
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <Feather name="eye" size={24} color="black" />
        ),
      }}  />
      <Tab.Screen name='Network' component={Network} options={{
        tabBarIcon: ({ color, size }) => (
          <Entypo name="network" size={24} color="black" />
        ),
      }}/>
      <Tab.Screen name='Refine' component={Refine} options={{
        tabBarIcon: ({ color, size }) => (
          <Entypo name="chat" size={24} color="black" />
        ),
      }}/>
      <Tab.Screen name='Contacts' component={Contacts} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="contacts" size={24} color="black" />
        ),
      }}/>
      <Tab.Screen name='Groups' component={Groups} options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="hashtag" size={24} color="black" />
        ),
      }}/>

    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})