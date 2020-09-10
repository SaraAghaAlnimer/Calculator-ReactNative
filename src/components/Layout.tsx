import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
// import {observer, inject} from 'mobx-react';
import ClearButton from './ClearButton';
import Numbers from './Numbers';
import Output from './Output';
import Operators from './Operators';
import {types} from '@babel/core';

// interface LayoutComponentProps {
//   rootTree?: Root;
// }

interface LayoutComponentState {
  outputResult: string;
  nums: any;
  operators: any;
}

// @inject('rootTree')
// @observer
class Layout extends Component<LayoutComponentState> {
  state = {
    outputResult: '',
    nums: ['1', '2', '3', '4', '5', '6', '7', '9', '9', '.', '0', '='],
    operators: ['/', '*', '-', '+'],
  };
  handleTextResult(input) {
    const parallelValues = {};

    const currentInput = this.state.outputResult + input;
    this.setState({
      outputResult: currentInput,
    });

    if (input === '=') {
      // const calculatedValue = 0;
      // const splitedValuesArray = this.state.outputResult.split('');
      // for (let i = 0; i < splitedValuesArray.length; i++) {
      //   if (parseInt(splitedValuesArray[i]) !== NaN) {
      //     const accumulator = '';
      //     accumulator += splitedValuesArray[i];
      //   } else {
      //     if (splitedValuesArray[i] === '/') {
      //     calculatedValue = parseInt(accumulator) /
      //     }
      //   }
      // }
      this.setState({
        outputResult: eval(this.state.outputResult),
      });
      return;
    }
  }
  clearOutputScreen() {
    this.setState({
      outputResult: '',
    });
  }

  render() {
    // const {rootTree} = this.props;
    // if (!rootTree) return null;
    console.log(this.state.outputResult);

    return (
      <View>
        <View style={styles.box1} />
        <Output outputResult={this.state.outputResult} />
        <ClearButton clearOutputScreen={this.clearOutputScreen.bind(this)} />
        <Numbers
          nums={this.state.nums}
          operators={this.state.operators}
          handleTextResult={this.handleTextResult.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box1: {
    backgroundColor: '#454e54',
    height: 35,
  },
});

export default Layout;
