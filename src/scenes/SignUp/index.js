import React, { Component } from 'react';
import Geolocation from 'react-native-geolocation-service';

import { 
    SafeAreaView,
    ScrollView,
    Text, 
    View, 
    Alert, 
    PermissionsAndroid,
    StyleSheet
} from 'react-native';
import SingUpForm from '../../components/SingUpForm';
import UserSubmitDataView from '../../components/UserSubmitDataView';
import { API_URL } from '../../constants';
import { Actions } from 'react-native-router-flux';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: null,
            email: null,
            phone: null,
            password: null,
            passwordConfirm: null,
            errors: {},
            userData: null
        };
    }
    
    componentDidMount() {
        this.requestLocationPermission();        
    }
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
    // find current location and then sign up
    findCoordinatesUserSignUp() {
        if(this.requestLocationPermission){
            Geolocation.getCurrentPosition(
                position => {       
                    this.setState({location: position})      
                    this.handleUserSignUp(position);
                },
                error => Alert.alert(error.message),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
            );
        }        
    };
    // add user form validation errors
    isValidUserFormErr(){
        const {
            email,
            phone,
            password,
            passwordConfirm
        } = this.state;

        const errors = {};
        if (!email) {
            errors.email = '* Enter email.';
          }  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = '* Enter valid email.';
        }        
        if (!phone) {
            errors.phone = '* Enter phone number.';
        }else if (!/^[0-9 \-\+\(\)]{8,16}$/.test(phone)) {
            errors.phone = '* Enter valid phone number.';
        }      
        if (!password) {
          errors.password = '* Enter password.';
        }
        if (!passwordConfirm) {
          errors.passwordConfirm = '* Enter confirm password.';
        } else if(password != passwordConfirm) {
          errors.passwordConfirm = '* password need to be same !!';
        }
        return errors; 
    }
    // check email
    checkEmail = (mail) => !(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(mail));
    //check phone valid
    checkPhone = (phone) => !(!/^[0-9 \-\+\(\)]{8,16}$/.test(phone));
    // user form validate
    isValidUserForm = () => !!this.state.email &&                                
                            this.checkEmail(this.state.email) &&
                            !!this.state.phone &&
                            this.checkPhone(this.state.phone) &&
                            !!this.state.password &&
                            this.state.password == this.state.passwordConfirm &&
                            !!this.state.passwordConfirm;
                                
    handleUserSignUp(location){
        const {
            email,
            phone,
            password,
            passwordConfirm
        } = this.state;
        if(this.isValidUserForm()){
            const payload = {
                email: email,
                phone: phone,
                password: password,
                passwordConfirm: passwordConfirm,
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            }
                this.submitApi(payload) 
            this.setState({errors: {}})
            }else{
                this.setState({errors: this.isValidUserFormErr()}) // add user type errors
            }
    }
    // call sign up api
    submitApi(payload){
        fetch(API_URL, {
            method: 'post',
            body: JSON.stringify(payload)
        })
            .then(function(response) {
                    return response.json();
                }).then(function(data) {
                });
                this.setState({userData: payload})
                Actions.otp({payload: payload})
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>                                        
                <SingUpForm 
                    onChangeEmail={(value)=> this.setState({email: value})}
                    onChangePhone={(value)=> this.setState({phone: value})}
                    onChangePassword={(value)=> this.setState({password: value})}
                    onChangePasswordConfirm={(value)=> this.setState({passwordConfirm: value})}
                    onSubmit={()=> this.findCoordinatesUserSignUp()}
                    errors={this.state.errors}
                />                
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

export default SignUp
