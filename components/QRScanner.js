import React from 'react';
import {
    StyleSheet,
    Text, 
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';


WIDTH = Dimensions.get('window').width;


export default class QRScanner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {}} style={styles.leftCol}>
                    
                        <Text style={{fontSize: 21, color: 'white', fontWeight: 'bold'}}>掃描二維碼</Text>
                    
                </TouchableOpacity>
            </View>
        );
        
    }
}

const styles = StyleSheet.create({
    container: {
        //zIndex: 999,
        position: 'absolute',
        flexDirection: 'row',
        width: (WIDTH-140),
        height: 55,
        bottom: 20,
        //left: 20,
        borderRadius: 50,
        backgroundColor: '#73BF00',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000000',
        elevation: 7,
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },
    leftCol: {
        flex: 1,
        alignItems: 'center',   
    },
});