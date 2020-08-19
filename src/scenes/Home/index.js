import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, ImageBackground } from 'react-native'
import { Actions } from 'react-native-router-flux';

class Home extends Component {
  componentDidMount() {
    this.requestLocationPermission()
  }
  requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "access Permission",
          message: "please access for our services goodness",
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
  render() {    
    return (
      <View>
        <ImageBackground 
          style={styles.section} 
          source={{ uri: "https://reactjs.org/logo-og.png" }}>        
          <View>
            <Text style={styles.title}> Home page </Text>
          </View>
        </ImageBackground>
        <View>
          <View style={styles.button}>
            <Button              
              title="SignUp"
              onPress={() => Actions.signup()} />
          </View>
          <View style={styles.button}>
            <Button              
              title="SignUpHook"
              onPress={() => Actions.singuphook()} />
          </View>
        </View>
        <View>
          <Text>{JSON.stringify(this.props.payload)}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  section: {
    height: 300,
    backgroundColor: '#00bcd4'
  },
  title: {
    color: "#fff", 
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  signupLayout: {
    marginTop: 20
  },
  button: {
    marginBottom: 10       
  }
});

export default Home;
