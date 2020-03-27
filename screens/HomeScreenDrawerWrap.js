import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import Profile from './Profile';
import Record from './Record';
import About from './About';
import CustomDrawer from '../components/CustomDrawer'
import { Dimensions } from 'react-native';

const Drawer = createDrawerNavigator();


function HomeScreenDrawerWrap(){
    return(
        //<NavigationContainer>
            <Drawer.Navigator 
                //drawerType="slide" 
                drawerContent={props => <CustomDrawer {...props} />}
                drawerStyle={{
                backgroundColor: 'transparent',
                width: 250//Dimensions.get('window').width,
              }}
            >
                <Drawer.Screen 
                    name="Home" 
                    component={HomeScreen}
                    options={{
                        headerShown: false
                        //headerTitleAlign: 'center'
                    }} 
                />
                <Drawer.Screen 
                    name="Profile" 
                    component={Profile}
                    options={{
                        headerShown: false
                        //headerTitleAlign: 'center'
                    }} 
                />
                <Drawer.Screen 
                    name="Record" 
                    component={Record}
                    options={{
                        headerShown: false
                        //headerTitleAlign: 'center'
                    }} 
                />
                <Drawer.Screen 
                    name="About" 
                    component={About}
                    options={{
                        headerShown: false
                        //headerTitleAlign: 'center'
                    }} 
                />
            </Drawer.Navigator>
        //</NavigationContainer>
    )
}  
    

export default HomeScreenDrawerWrap;