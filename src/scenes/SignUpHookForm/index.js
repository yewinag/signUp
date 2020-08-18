import React, { Component } from 'react'
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().required().min(3),
    email: yup.string().required().email(),
    phone: yup.number().required().min(9),
    password: yup.string().required(),
    passwordConfirm: yup.string().required()
     .oneOf([yup.ref('password'), null], 'Passwords must match')    
});


function SignUpHookForm(props) {

    const { register, control, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });
    const nameInputRef = React.useRef();
    const emailInputRef = React.useRef();
    const phoneInputRef = React.useRef();
    const passwordInputRef = React.useRef();
    const passwordConfirmInputRef = React.useRef();

    const onSubmit = data => props.callbackSignUp(data);
    
    return (
        <View>
            <View><Text>Name</Text></View>
            <Controller
                control={control}
                onFocus={() => nameInputRef.current.focus()}
                render={({ onChange, onBlur, value, onFocus }) => (
                    <TextInput
                        onBlur={onBlur}
                        onFocus={onFocus}
                        onChangeText={value => onChange(value)}
                        value={value}
                        placeholder="enter your name"
                    />
                )}
                defaultValue=""
                name="name"
            />
            <View><Text style={styles.errors}>{errors.name?.message}</Text></View>
            <View><Text>Email</Text></View>
            <Controller
                control={control}
                onFocus={() => { emailInputRef.current.focus() }}
                render={({ onChange, onBlur, value, onFocus }) => (
                    <TextInput
                        onBlur={onBlur}
                        onFocus={onFocus}
                        onChangeText={value => onChange(value)}
                        value={value}
                        placeholder="enter your email"
                    />
                )}
                defaultValue=""
                name="email"
            />
            <View><Text style={styles.errors}>{errors.email?.message}</Text></View>
            <View><Text>Phone</Text></View>
            <Controller
                control={control}
                onFocus={() => { phoneInputRef.current.focus() }}
                render={({ onChange, onBlur, value, onFocus }) => (
                    <TextInput
                        onBlur={onBlur}
                        onFocus={onFocus}                        
                        onChangeText={value => onChange(value)}
                        value={value}
                        placeholder="enter your phone number"
                    />
                )}
                defaultValue=""
                name="phone"
            />
            <View><Text style={styles.errors}>{errors.phone?.message}</Text></View>
            <View><Text>Password</Text></View>
            <Controller
                control={control}
                onFocus={() => { passwordInputRef.current.focus() }}
                render={({ onChange, onBlur, value, onFocus }) => (
                    <TextInput
                        onBlur={onBlur}
                        onFocus={onFocus}
                        onChangeText={value => onChange(value)}
                        value={value}
                        placeholder="enter password"
                    />
                )}
                defaultValue=""
                name="password"
            />
            <View><Text style={styles.errors}>{errors.password?.message}</Text></View>            
            <View><Text>Password Confirm</Text></View>
            <Controller
                control={control}
                onFocus={() => { passwordConfirmInputRef.current.focus() }}
                render={({ onChange, onBlur, value, onFocus }) => (
                    <TextInput
                        onBlur={onBlur}
                        onFocus={onFocus}
                        onChangeText={value => onChange(value)}
                        value={value}
                        placeholder="enter confirm password"
                    />
                )}
                defaultValue=""
                name="passwordConfirm"
            />
            <View><Text style={styles.errors}>{errors.passwordConfirm?.message}</Text></View>
            <Button
                title="Register"
                onPress={handleSubmit(onSubmit)}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    errors: {
        color: "#ff0033"
    }
  });

export default SignUpHookForm;
