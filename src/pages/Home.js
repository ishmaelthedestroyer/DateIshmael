import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import {
  Card
} from '../components/common';

class Home extends Component {
  render() {
    return (
      <Card style={styles.container}>
        <Text style={styles.header}>
          Home
        </Text>
      </Card>
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
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
});

export default Home;
