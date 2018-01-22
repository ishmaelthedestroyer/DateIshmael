import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import { loadUser } from '../actions';
import FIREBASE_CONFIG from '../../firebase.json';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  componentWillMount() {
    firebase.initializeApp(FIREBASE_CONFIG);
    firebase.auth().onAuthStateChanged(user => this.props.loadUser(user));
  }

  onButtonPress() {
    console.log('onButtonPress()');
  }

  onPressFooterLink() {
    console.log('onPressFooterLink()');
  }

  renderForm() {
    if (typeof this.props.user === 'undefined') {
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

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps, { loadUser })(Login);
