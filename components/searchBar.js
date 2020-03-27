import React from 'react';
import {
    StyleSheet,
    Text, 
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Icon_AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const searchIcon = <Icon_AntDesign name="search1" size={25} color="#000000" style={{alignSelf: 'center'}}/>;
const profileIcon = <SimpleLineIcons name="user" size={23} color="#000000" style={{alignSelf: 'center'}}/>;

WIDTH = Dimensions.get('window').width;

export default class searchBar extends React.Component{

    constructor(props) {
        super(props);
    }

    
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {this.props.toggleDrawer()}} style={styles.leftCol}>
                    <View>
                        <Text style={{fontSize: 8}}>{profileIcon}</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.search}>
                    <View style={styles.centerCol}>
                        <Text style={{fontSize: 21, color: '#545454'}}>你在哪裡 ?</Text>
                    </View>
                    <View style={styles.rightCol}>
                        {searchIcon}
                    </View>
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
        width: (WIDTH-40),
        height: 55,
        top: 20,
        left: 20,
        borderRadius: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        shadowColor: '#000000',
        elevation: 7,
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },
    leftCol: {
        flex: 1,
        alignItems: 'center',   
        
        
    },
    centerCol: {
        flex: 4, 
        
    },
    rightCol: {
        flex: 1,
        borderLeftWidth: 1,
        borderColor: '#ededed',
    },
    search:{
        flex: 5, 
        flexDirection: 'row',
    }
});
