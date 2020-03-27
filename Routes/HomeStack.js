import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/Entypo';

const HStack = createStackNavigator();



function HomeStack({navigation}){
    
    return(
        <HStack.Navigator>
            
            <HStack.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <Icon name="menu" size={28} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={styles.icon}/>
                    ), 
                }} 
            />
        </HStack.Navigator>
    );
} 
    
const styles = StyleSheet.create({
    icon:{
        position: 'absolute',
        left: 16
    }
});


export default HomeStack;

