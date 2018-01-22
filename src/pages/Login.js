import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import firebase from 'firebase';
import {
  Button,
  Card,
  CardSection,
  Input,
  Spinner
} from '../components/common';

class Login extends Component {
  state = {
    user: undefined,
    email: '',
    password: '',
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  onButtonPress() {
    console.log('onButtonPress()');
  }

  onPressFooterLink() {
    console.log('onPressFooterLink()');
  }

  renderForm() {
    if (typeof this.state.user === 'undefined') {
      return <Spinner />;
    }

    return (
      <View style={styles.form}>
        <Text style={styles.header}>
          Login
        </Text>

        <Card>
          <CardSection>
            <Input
              label='Email'
              value={this.state.email}
              placeholder='your@email.com'
              onChangeText={email => this.setState({ email })}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label='Password'
              value={this.state.password}
              placeholder='********'
              onChangeText={password => this.setState({ password })}
            />
          </CardSection>

          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Login
            </Button>
          </CardSection>
        </Card>

        <Text style={styles.footerLink} onPress={this.onPressFooterLink.bind(this)}>
          Or signup for an account
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderForm()}
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
  form: {
    width: '90%',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  footerLink: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
});


export default Login;
