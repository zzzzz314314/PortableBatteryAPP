import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Platform, Alert, Image} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as firebase from 'firebase';
import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import SearchBar from '../components/searchBar';
import QRScanner from '../components/QRScanner';
import BatteryMarker from '../components/BatteryMarker';


const battery_info_form = [];

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        //console.log(this.props);

        this.state = {
            //email: '',
            //displayName: '',
            latitude: 0,
            longitude: 0,
            battery_info: battery_info_form
        };
        //console.log(this.state.latitude, this.state.longitude);
    }
    

    

    requestLocationPermission = async() => {
        if(Platform.OS === 'ios'){
            var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
            //console.log('iPhone: ' + response);
            if(response === 'granted'){
                this.locateCurrentPosition();
            }
        }
        else{
            // asking for GPS opening
            var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
            //console.log('Android: ' + response);
            if(response === 'granted'){
                this.locateCurrentPosition();
            }

        }
    }

    locateCurrentPosition = () => {
        Geolocation.getCurrentPosition(
            position => {
              const {latitude, longitude} = position.coords;
              /******   rendering too many times  ************** */
              this.setState({latitude, longitude});
              //console.log(this.state.latitude, this.state.longitude);
              let initialPosition = {
                  latitude: latitude,
                  longitude: longitude,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
              }
              this.setState({initialPosition});
            },
            error => {
              Alert.alert(error.message);  
              //console.log(error.code, error.message);
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 20000},
          );
        
        
    }

    componentDidMount(){
        // retrieve the user name, email
        //const {email, displayName} = firebase.auth().currentUser;
        //this.setState({email, displayName});
        this.requestLocationPermission();

        //retrieve battery information from db
        firebase.database().ref('battery').on('value', (data) => {
            
            
            //console.log((data.toJSON())['battery0']['latitude']);\
            let data1 = data.toJSON();
            let data2 = Object.keys(data1);
            let battery_info = data2.map(function(key) {
                return [key, 
                        data1[key]['latitude'],
                        data1[key]['longitude'],
                        data1[key]['remaining'],
                        data1[key]['vacancy']];
              });
            //console.log("fuck", battery_info);
            this.setState({battery_info});
            
            //console.log(this.state.battery_info);
            
        })
    }

    

    
    
    render() {
        //console.log(this.state.battery_info);
        return (
            
            <View style={styles.container}>
                
                <MapView
                    style={styles.map}
                    ref={map => this._map = map}
                    showsUserLocation={true}
                    showsCompass={false}
                    initialRegion={this.state.initialPosition}
                    rotateEnabled={false}>
                    
 {/*                   
                    <MapView.Marker 
                        title='hi'
                        coordinate={{latitude: 24.7927, longitude: 121.01358}}>
                        <Image source={require('../pics/battery.png')} style={{width:34, height: 35}}/>
                    </MapView.Marker>
                 
 
                    {this.state.battery_info.map(marker => (
                        <MapView.Marker
                            coordinate={{latitude: marker[1], longitude: marker[2]}}>
                            <Image source={require('../pics/battery.png')} style={{width:34, height: 35}}/>
                        </MapView.Marker>
                    ))}
*/}
                    {this.state.battery_info.map(marker => (
                        <BatteryMarker battery={{
                            uid: marker[0], 
                            location: {
                                latitude: marker[1],
                                longitude: marker[2]
                            },
                            remaining: marker[3],
                            vacancy: marker[4]
                        }}/>
                    ))}

                </MapView>

                <SearchBar toggleDrawer={this.props.navigation.openDrawer}/>
                <QRScanner props={this.props}/>
                
                
            </View>
            
        );
    }
}




const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
        //zIndex: 0
      },
});
