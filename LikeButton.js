'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} = React;

var LikeButton = React.createClass({
  render: function() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.button}>
          <Text style={{color: 'white'}}>
            Like ({this.props.count})
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
});

var styles = StyleSheet.create({
  button: {
    position: 'absolute',
    left: 20,
    bottom: 20,
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 10,
  },
});

module.exports = LikeButton;
