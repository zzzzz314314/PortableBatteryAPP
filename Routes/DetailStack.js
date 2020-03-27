import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';
import DetailScreen from '../screens/DetailScreen';
import Icon from 'react-native-vector-icons/Entypo';

const DStack = createStackNavigator();

function DetailStack({navigation}){
    
    return(
        <DStack.Navigator >  
            <DStack.Screen 
                name="Details" 
                component={DetailScreen}
                options={{
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <Icon name="menu" size={28} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={styles.icon}/>
                    ), 
                }} 
            />
        </DStack.Navigator>
    );
} 

   
const styles = StyleSheet.create({
    icon:{
        position: 'absolute',
        left: 16
    }
});
export default DetailStack;


