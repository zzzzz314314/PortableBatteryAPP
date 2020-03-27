import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';


function Header(){

    const openMenu = () => {
        navigator.openDrawer();
    }
    return(
        <View style={styles.header}>
            <Icon name="menu" size={28} onPress={openMenu} style={styles.icon}/>
            
            <Text style={styles.headerText}>Battery</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        /*height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',*/
        
    },
    headerText:{
        letterSpacing: 0,
        color: '#000000',
        fontSize: 20,
        fontWeight: 'normal',
    },
    icon:{
        position: 'absolute',
        left: 16
    }

});

export default Header;