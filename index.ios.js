/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBarIOS,
} = React;
var Parse = require('parse').Parse;
var TweetCell = require('./TweetCell.js');


var Rainbow = React.createClass({
  getInitialState: function() {
    return {tweets: []};
  },

  componentDidMount: function() {
    StatusBarIOS.setStyle(StatusBarIOS.Style.lightContent);

    Parse.initialize(
      "fvtpdvCoglxbhZ5F80xcV8VXMpZWmBJWk3a1KHP6",
      "YTQ1kXCc96kjuTSnlEdIQPxVnfRo4C65jlnPNxHq"
    );
    var Tweet = Parse.Object.extend("Tweet");
    var query = new Parse.Query(Tweet);
    query.find({
      success: (tweets) => this.setState({tweets}),
      error: (error) => console.error(error),
    });
  },

  render: function() {
    return (
      <ScrollView style={styles.container}>
        {this.state.tweets.map(
          tweet => <TweetCell tweet={tweet} />
        )}
      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('Rainbow', () => Rainbow);
