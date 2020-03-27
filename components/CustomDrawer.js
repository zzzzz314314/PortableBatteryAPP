import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform, Alert, Image, ScrollView} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';




import * as firebase from 'firebase';

const wallet = <SimpleLineIcons name="wallet" size={20} color="#000000" style={{alignSelf: 'center'}}/>;
const contacts = <SimpleLineIcons name="phone" size={20} color="#000000" style={{alignSelf: 'center'}}/>;
const record = <Feather name="file" size={20} color="#000000" style={{alignSelf: 'center'}}/>;
const question = <SimpleLineIcons name="question" size={20} color="#000000" style={{alignSelf: 'center'}}/>;
const settings = <SimpleLineIcons name="settings" size={20} color="#000000" style={{alignSelf: 'center'}}/>;




export default class CustomDrawer extends Component {

    constructor(props) {
        super(props);

        this.state ={
            email: '',
            displayName: ''
        };
    }

    componentDidMount(){
        // retrieve the user name, email
        const {email, displayName} = firebase.auth().currentUser;
        this.setState({email, displayName});
    }

    signOutUser = () => {
        firebase.auth().signOut();
    }
    

    render() {
        //console.log(this.props);
        return (
            <TouchableOpacity activeOpacity={1} style={styles.drawerTransparent}>
                <TouchableOpacity activeOpacity={1} style={styles.drawer}>
                    <ScrollView>
                        <View style={styles.header}>
                            <Image source={require('../pics/Me1.png')} style={styles.headerImage}/>
                            <Text style={styles.textHeader}>{this.state.email}</Text>
                        </View>

                        <TouchableOpacity underlaycolor={'rgba(0,0,0,0.2)'}>
                            <View style={styles.row}>
                                {wallet}
                                <Text style={styles.text}>我的錢包</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity underlaycolor={'rgba(0,0,0,0.2)'}>
                            <View style={styles.row}>
                                {record}
                                <Text style={styles.text}>租借紀錄</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity underlaycolor={'rgba(0,0,0,0.2)'}>
                            <View style={styles.row}>
                                {settings}
                                <Text style={styles.text}>個人設定</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity underlaycolor={'rgba(0,0,0,0.2)'}>
                            <View style={styles.row}>
                                {question}
                                <Text style={styles.text}>常見問題</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity underlaycolor={'rgba(0,0,0,0.2)'}>
                            <View style={styles.row}>
                                {contacts}
                                <Text style={styles.text}>聯絡我們</Text>
                            </View>
                        </TouchableOpacity>
                        
                    </ScrollView>

                </TouchableOpacity>

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    drawerTransparent: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    drawer: {
        flex: 1,
        width: 250,
        backgroundColor: 'transparent',
    },
    header: {
        width: '100%',
        height: 200,
        backgroundColor: '#73BF00',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 20
    },
    headerImage: {
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#FFFFFF',
        width: 100,
        height: 100
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingLeft: 20,
    },
    textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 0,
        color: '#FFFFFF'
    },
    text: {
        fontSize: 20,
        //fontWeight: 'bold',
        marginLeft: 25,
        color: '#111111'
    }
})