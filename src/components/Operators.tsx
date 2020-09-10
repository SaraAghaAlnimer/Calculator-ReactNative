import React, {Component} from 'react';
import {View, FlatList, TouchableOpacity, Text, StyleSheet} from 'react-native';

interface OperatorsComponentProps {
  operators: any;
}

class Operators extends Component<OperatorsComponentProps> {
  render() {
    console.log(this.props.operators);

    return (
      <View style={styles.leftOperators}>
        <FlatList
          data={this.props.operators}
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
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50,
    color: '#dcdcdc',
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  column: {
    width: 100,
    height: 100,
    marginVertical: 28,
  },
  leftOperators: {
    width: '20%',
    alignSelf: 'flex-end',
    backgroundColor: '#1e2326',
  },
});

export default Operators;
