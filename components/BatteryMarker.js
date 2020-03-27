import React from 'react';
import {Image, View} from 'react-native'
import MapView, { MapViewAnimated, Marker } from 'react-native-maps';

export default class BatteryMarker extends React.Component {
    constructor(props) {
        super(props);
        
    
        const battery = this.props.battery ?
            this.props.battery : 
            {
                uid:'NoNearByBattery',
                remaining: 0,
                vacancy: 0,
                location: {latitude: 0, longitude: 0}
            }

        const coordinate = {
            latitude: battery.location.latitude,
            longitude: battery.location.longitude,
        }

        this.state = {
            battery: battery,
            coordinate: coordinate,
        }
    }

    /*
    * Bug: while dynamic changing vacancy in firebase, description in map doesnt change
    * (doesnt render again, maybe some problem with props and state? )
    * Solved, however can think of a better way.
    */
    componentDidUpdate(prevProps) {
        if(prevProps.battery !== this.props.battery) {
          this.setState({battery: this.props.battery});
        }
      }

    render(){
        //console.log('state: '+this.state.battery.vacancy);
        //console.log('props: '+this.props.battery.vacancy);
        return(
            /*
            * Can do some debug here:
            * ex: vacancy + remaining != 10, then mark this battery station as problematic.
            */
            <MapView.Marker
                //coordinate={{latitude: 24.7927, longitude: 121.01358}}
                coordinate={this.state.coordinate}
                title={this.state.battery.uid}
                description={'remaining: ' + this.state.battery.remaining.toString() + ' vacancy: ' + this.state.battery.vacancy.toString()}
                
                /******** check out the anchor problem ************ */
                anchor={{x: 0.35, y: 0.32}} 
                //ref={marker=>{this.marker = marker}}
                //style={{width: 50, height: 50}}
                >
                <Image source={require('../pics/battery.png')} style={{width:34, height: 35}}/>
            </MapView.Marker>
        )
    }
}