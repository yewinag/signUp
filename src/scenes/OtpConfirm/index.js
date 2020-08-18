import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, ScrollView } from 'react-native'

import OtpInputs from 'react-native-otp-inputs';
import { Actions } from 'react-native-router-flux';

class OtpConfirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otp:''
        };
    }
    handleConfirmOtp(){
        if(this.checkOtp()){
            this.otpConfirmApi(this.state.otp)
        }
    }
    otpConfirmApi(otp){
        console.log(otp);
        Actions.home();
    }
    checkOtp = () => !!this.state.otp && this.state.otp.length > 3;
    render() {
        return (
            <ScrollView>
                <View style={styles.layout}>
                    <View>
                        <Text> check your email otp confirmation successfully sent </Text>
                    </View>
                    <OtpInputs
                        handleChange={(code) => this.setState({otp: code})}
                        numberOfInputs={4}
                        style={styles.inputLayout}
                        inputStyles={styles.input}
                    />
                    <View style={styles.buttonLayout}>
                        <Button
                            title="Check Otp"
                            onPress={() => this.handleConfirmOtp()} />
                    </View>
                </View>
            </ScrollView>

        )
    }
}
const styles = StyleSheet.create({
    layout: {
        paddingTop: 40
    },
    inputLayout: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    input: {
        height: 48,
        backgroundColor: '#ddd',
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    buttonLayout: {
        paddingTop: 40
    }
});
export default OtpConfirm;
