import React, { Component } from 'react'
import { Text, View } from 'react-native'

const UserDataItem = (props)=> (
            <View>
                <Text>{'   '} {props.name && props.title} : {props.name && props.name}{props.name && ','} </Text>
            </View>
        )
    

export default UserDataItem;
             