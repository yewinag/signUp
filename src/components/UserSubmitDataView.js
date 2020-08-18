import React, { Component } from 'react'
import { Text, View } from 'react-native'
import UserDataItem from './UserDataItem';

export class UserSubmitDataView extends Component {
    render() {
        const { userData } = this.props;
        if(!!userData){
            return (
                <View>
                    <Text> {userData && 'user payload data'} </Text>
                    <View>
                        <Text>{'{'}</Text>
                    </View>
                    <UserDataItem
                        title="email" 
                        name={userData && userData.email} />
                    <UserDataItem 
                        title="phone" 
                        name={userData && userData.phone}/>
                    <UserDataItem 
                        title="password" 
                        name={userData && userData.password}/>
                    <UserDataItem 
                        title="latitude" 
                        name={userData && userData.latitude}/>
                    <UserDataItem 
                        title="longitude" 
                        name={userData && userData.longitude}/>
                    <View>
                        <Text>{'}'}</Text>
                    </View>
                </View>
            )
        }else{
            return(
                <View></View>
            )
        }
    }
}

export default UserSubmitDataView
