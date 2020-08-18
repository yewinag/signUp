import React, { Component } from 'react'
import { Text, View } from 'react-native'

import alertError from '../styles/alert-error';


const AlertError = (props) => (
    <View>
        <Text style={alertError.text}>{props.err}</Text>
    </View>
)
export default AlertError
