import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Card extends Component {
  render() {
    return (
      <View>
        <Image style={styles.image} source={{ uri: this.props.image }} />

        <Text style={styles.text}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
  text: {

  },
});

export default Card;
