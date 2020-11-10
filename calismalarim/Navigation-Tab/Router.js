// In App.js in a new project

import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import {Timeline, Post, Frieds} from "../Navigation-Tab/pages"



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainComponent(){
  return (
  <Stack.Navigator initialRouteName="MainPage">
      <Stack.Screen name="MainPage" component={Timeline}/>
      <Stack.Screen name="PostPage" component={Post}/>
  </Stack.Navigator>
  )
}


function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="MainComponent" tabBarOptions={{activeTintColor: "purple",inactiveTintColor: "gray"}}>
        <Tab.Screen name="MainComponentPage" component={MainComponent} options={{title: "Ana Sayfa"}} />
        <Tab.Screen name="FriedsPage" component={Frieds} options={{title: "Arkadaşlar"}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;
