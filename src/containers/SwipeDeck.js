import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import Card from '../components/Card';
import NoMoreCards from '../components/NoMoreCards';

export default class extends Component {
  state = {
    cards: [{
      name: 'Foo',
      image: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif',
    }, {
      name: 'Bar',
      image: 'https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif',
    }, {
      name: 'Bam',
      image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif',
    }],
  }

  handleYup(card) {
    console.log(`Yup for card ${card.name}`);
  }

  handleNope(card) {
    console.log(`Nope for card ${card.name}`);
  }

  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={card => <Card {...card} />}
        renderNoMoreCards={() => <NoMoreCards />}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        hasMaybeAction={false}
      />
    );
  }
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  },
  noMoreCardsText: {
    fontSize: 22,
  },
});
