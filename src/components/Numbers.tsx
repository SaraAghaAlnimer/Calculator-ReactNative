import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import Operators from './Operators';
import Layout from './Layout';

interface NumberComonentProps {
  nums: any;
  operators: any;
  outputResult: string;
}

class Number extends Component<NumberComonentProps> {
  render() {
    // console.log(this.props.nums);
    // console.log(this.props.operators);
    console.log(this.props.outputResult);
    console.log(this.props.nums);
    return (
      <View style={styles.numbersView}>
        <View style={styles.keyboardColumns}>
          <FlatList
            numColumns={3}
            data={this.props.nums}
            renderItem={({item}) => {
              return (
                <View style={styles.column}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.handleTextResult(item);
                    }}>
                    <Text style={styles.textStyle}>{item}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={(index) => index}
          />
        </View>
        <Operators
          operators={this.props.operators}
          handleTextResult={this.props.handleTextResult.bind(Layout)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  numbersView: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#454e54',
    width: '100%',
  },
  column: {
    width: 100,
    height: 100,
    marginVertical: 28,
  },

  keyboardColumns: {
    width: '80%',
    backgroundColor: '#454e54',
  },

  textStyle: {
    fontSize: 50,
    color: '#dcdcdc',
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default Number;
