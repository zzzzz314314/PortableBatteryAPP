import React from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';

import * as firebase from 'firebase';



export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    state ={
        email: '',
        password: '',
        errorMessage: null
    };

    handleLogin = () => {
        const {email, password} = this.state;
        
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.replace("Home"))
            .catch(error => this.setState({errorMessage: error.message}));
        
        /*if(firebase.auth().currentUser){    
            this.props.navigation.replace('Home');
        };*/
        
    }

    render() {
        
        return (
            <View style={styles.container}>
                {/*<Image source={require('../pics/battery.png')} style={styles.logo}/>*/}
                <Text style={styles.greeting}>歡迎回來</Text>
            
                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize='none'
                            onChangeText={email => this.setState({email})}
                            value={this.state.email}>
                        </TextInput>
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput 
                            style={styles.input} 
                            secureTextEntry 
                            autoCapitalize='none'
                            onChangeText={password => this.setState({password})}
                            value={this.state.password}>
                        </TextInput>
                    </View>
                    
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{color: '#FFFFFF', fontWeight: '500'}}>Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{alignSelf: 'center', marginTop: 32}} 
                    onPress={() => this.props.navigation.navigate('Register')}
                >
                    <Text style={{color: '#414959', fontSize: 13}}>
                        New member? <Text style={{fontWeight: '500', color: '#73b504'}}> Sign up</Text>
                    </Text>

                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center'
    },
    logo: {
        marginTop: 32,
        //alignItems: 'center',
        //justifyContent: 'center',
        alignSelf: 'center',
        width: 100,
        height: 100
    },
    greeting: {
        marginTop: 64,
        fontSize: 18, 
        fontWeight: '400',
        textAlign: 'center',
        color: '#414959'
    },
    errorMessage:{
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30
    },
    error:{
        color: '#E9446A',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center'
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: '#8A8F9E',
        fontSize: 10,
        textTransform: 'uppercase'
    },
    input: {
        borderBottomColor: '#8A8F9E',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: '#161F3D'
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: '#73b504',
        borderRadius: 4,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center'
    }
    

});
