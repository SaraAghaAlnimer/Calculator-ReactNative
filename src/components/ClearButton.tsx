import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class ClearButton extends Component {
  render() {
    return (
      <View style={styles.barView}>
        <TouchableOpacity
          style={styles.opacityStyle}
          onPress={() => {
            this.props.clearOutputScreen();
          }}>
          <Text style={styles.textStyle}>DEL</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  barView: {
    height: 80,
    backgroundColor: '#e3aa1a',
  },
  opacityStyle: {
    width: 100,
    height: 80,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'right',
  },
});

export default ClearButton;
