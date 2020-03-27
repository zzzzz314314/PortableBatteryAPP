import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreenDrawerWrap from './screens/HomeScreenDrawerWrap';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';


import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCbOu9GHTSfmb-oqpQcUnG0DZnnY6iEcqA",
  authDomain: "portablebatteryapp.firebaseapp.com",
  databaseURL: "https://portablebatteryapp.firebaseio.com",
  projectId: "portablebatteryapp",
  storageBucket: "portablebatteryapp.appspot.com",
  messagingSenderId: "745499340798",
  appId: "1:745499340798:web:23eb5c0463cb3831421aaf",
  measurementId: "G-4ZN8MFYGG9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
/*
firebase.database().ref('users/001').set(
  {
    name: 'yaaaa',
    age: 22
  })
.then(() => {
  console.log('inserted!');
}).catch((err) => {
  console.log(err);
})*/




const RootStack = createStackNavigator();


export default function App() {
  return(
    <NavigationContainer>
      <RootStack.Navigator>
        
          <RootStack.Screen 
            name="Login" 
            component={LoginScreen}
            options={{
              headerShown: false
              //headerTitleAlign: 'center'
            }}
          />
          <RootStack.Screen 
            name="Register" 
            component={RegisterScreen}
            options={{
              headerShown: false
              //headerTitleAlign: 'center'
            }}
          />
          <RootStack.Screen 
            name="Home" 
            component={HomeScreenDrawerWrap}
            options={{
              headerShown: false
              //headerTitleAlign: 'center'
            }}
          />
        
      </RootStack.Navigator>
    </NavigationContainer>
  );
}


