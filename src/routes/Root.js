import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import SingleMovie from '../components/Movies/SingleMovie'
 
const RootStack = createStackNavigator();


const RootNavigation = () => {
    
return (
    <RootStack.Navigator
        screenOptions={{
            headerStyle:{
                elevation: 0,
                backgroundColor:'#34495e'
            },
            cardStyle: {
                backgroundColor:'#34495e'
            }
        }}
    >
         <RootStack.Screen name="Home" options={{title:''}} component={Home}/>
         <RootStack.Screen name="SingleMovie" component={SingleMovie}/>
    </RootStack.Navigator>
)}
export default RootNavigation;