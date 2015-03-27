'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} = React;

var LikeButton = require('./LikeButton.js');

var TweetCell = React.createClass({
  render: function() {

    var color = this.props.tweet.get('color');
    return (
      <View style={[styles.tweet, {backgroundColor: color}]}>
        <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>
          {this.props.tweet.get('text')}
        </Text>
        <LikeButton
          count={this.props.tweet.get('likes')}
          onPress={this.handleLike} />
      </View>
    );
  },

  handleLike: function() {
    this.props.tweet.increment('likes', 1);
    this.props.tweet.save();
    this.forceUpdate();
  },
});


var styles = StyleSheet.create({
  tweet: {
    height: 200,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeeeee',
  },
});

module.exports = TweetCell;
