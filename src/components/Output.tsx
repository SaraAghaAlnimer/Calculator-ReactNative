import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface OutputComponentProps {
  outputResult: string;
}

class Output extends Component<OutputComponentProps> {
  render() {
    return (
      <View style={styles.outputView}>
        <Text style={styles.textStyle}>{this.props.outputResult}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outputView: {
    height: 150,
    backgroundColor: 'white',
    marginLeft: '2%',
  },
  textStyle: {
    fontSize: 110,
    color: '#1e2326',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
});

export default Output;
