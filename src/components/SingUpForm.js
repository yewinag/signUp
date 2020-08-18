import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

import FormInput from './FormInput';
import AlertError from './AlertError';
const SingUpForm = (props) =>
        (
            <View>                
                <FormInput 
                    type="email"
                    placeholder="yewin@mail.com" 
                    onChangeText={props.onChangeEmail}/>
                <AlertError err={props.errors.email && props.errors.email}/>
                <FormInput 
                    keyboardType={'phone-pad'}
                    placeholder="09787676567" 
                    onChangeText={props.onChangePhone}/>
                <AlertError err={props.errors.phone && props.errors.phone}/>
                <FormInput 
                    secureTextEntry={true}
                    name="password" 
                    placeholder="***"
                    onChangeText={props.onChangePassword}/>
                <AlertError err={props.errors.password && props.errors.password}/>
                <FormInput 
                    secureTextEntry={true}
                    name="confirmPassword" 
                    placeholder="***"
                    onChangeText={props.onChangePasswordConfirm}/>
                <AlertError err={props.errors.passwordConfirm && props.errors.passwordConfirm}/>
                <Button     
                    onPress={props.onSubmit}               
                    title="Sign Up"
                    color="#2196F3"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        )
    
export default SingUpForm;
