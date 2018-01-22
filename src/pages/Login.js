import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Login
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});


export default Login;