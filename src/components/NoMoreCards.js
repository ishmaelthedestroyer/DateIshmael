import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class NoMoreCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          No more users.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {

  },
});

export default NoMoreCards;
