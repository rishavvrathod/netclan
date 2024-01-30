import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Explore from './src/screens/Explore';
import Refine from './src/screens/Refine';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const HomeStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Explore"
        component={Explore}
        options={{
          headerStyle: { backgroundColor: "#19194B" },
          headerTintColor: "white",
          headerLeft: () => <Entypo name="menu" size={32} color="white" />,
          title: "HELLO ${name}",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Refine')}>
              <AntDesign name="menuunfold" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Refine"
        component={Refine}
        options={{ headerStyle: { backgroundColor: "#19194B" }, headerTintColor: "white" }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({});
