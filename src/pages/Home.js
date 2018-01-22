import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  Card
} from '../components/common';
import SwipeDeck from '../containers/SwipeDeck';

class Home extends Component {
  render() {
    return (
      <Card style={styles.container}>
        <SwipeDeck />
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
