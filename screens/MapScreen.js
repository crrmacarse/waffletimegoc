import React,  { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Platform } from 'react-native';

import {
  Constants,
  MapView,
  Location,
  Permissions
} from 'expo';

import { Marker } from 'react-native-maps';

export default class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Map',
  };

  state = {
    location: null,
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if(status !== 'granted'){
      console.error('Permission not granted');
      return;
    }
    let location = await Location.getCurrentPositionAsync({});

    let where = (await Location.reverseGeocodeAsync(location.coords))[0];

    this.setState({
      location,
      where,
    });
  }

  componentDidMount(){
    this._getLocationAsync();
  }


  render() {
    if(!this.state.location){
      return(<ScrollView />);
    }
    return (
        <MapView
           style={{ flex: 1 }}
           initialRegion={{
             latitude: this.state.location.coords.latitude,
             longitude: this.state.location.coords.longitude,
             latitudeDelta: 0.0922 / 2.5,
             longitudeDelta: 0.0421 / 2.5,
           }}>
         <Marker
            coordinate = {this.state.location.coords}
            title = "I've found you!"
            description = {this.state.where.name + " " + this.state.where.street + ", " + this.state.where.city}
          />
         </MapView>
    );
  }
}
