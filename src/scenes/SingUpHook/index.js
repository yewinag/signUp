import React, { Component } from 'react'
import { Text, View, Alert, SafeAreaView, ScrollView, StyleSheet} from 'react-native'
import SignUpHookForm from '../SignUpHookForm'
import { Actions } from 'react-native-router-flux';
import { API_URL } from '../../constants/index';
import Geolocation from 'react-native-geolocation-service';

class SignUpHook extends Component {

    // request user permission
    requestLocationPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: "access Permission",
              message:"please access for our services goodness",          
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            return true;
          } else {
            return false;
          }
        } catch (err) {
          console.warn(err);
        }
      };
    
    handleSubmitForm(formData){        
        if(this.requestLocationPermission){
            Geolocation.getCurrentPosition(
                position => {            
                    this.handleSubmitFormLocation(position, formData);
                },
                error => Alert.alert(error.message),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
            );
        }  
    }
    handleSubmitFormLocation(position, formData){
        const payload = Object.assign(formData,
            {
                'latitude': position.coords.latitude,
                'longitude': position.coords.longitude
            })
        fetch(API_URL, {
            method: 'post',
            body: JSON.stringify(payload)
        })
            .then(function(response) {
                    return response.json();
                }).then(function(data) {
                    console.log('response data')
                });
                
        Actions.otp()
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>             
                    <SignUpHookForm callbackSignUp={(formData)=> this.handleSubmitForm(formData)}/>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    scrollView: {
        marginHorizontal: 20,
    }
  });

export default SignUpHook;
