import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import DetailStack from './DetailStack';



const Drawer = createDrawerNavigator();

function RootNavigator(){
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeStack} />
                <Drawer.Screen name="Details" component={DetailStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}  
    

export default RootNavigator;