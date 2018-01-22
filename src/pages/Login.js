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
import {
  loadUser,
  login
} from '../actions';
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
    const { email, password } = this.state;
    this.props.login({ email, password });
  }

  onPressFooterLink() {
    console.log('onPressFooterLink()');
  }

  renderButton() {
    if (this.props.auth.loading) {
      return <Spinner size='small' />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  renderForm() {
    if (typeof this.props.auth.user === 'undefined') {
      return <Spinner />;
    }

    const error = this.props.auth.error;

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
            {this.renderButton()}
          </CardSection>

          { error && (
            <CardSection>
              <Text style={styles.error}>
                {error}
              </Text>
            </CardSection>
          )}
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
  error: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f00',
  },
  footerLink: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
});

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, {
  loadUser,
  login
})(Login);
