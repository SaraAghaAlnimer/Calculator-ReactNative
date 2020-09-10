import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Layout from './src/components/Layout';
// import RootStore from './src/models/index';
// import {setupRootStore} from './src/models/setup';

// import {Provider} from 'mobx-react';
// import {isModelType} from 'mobx-state-tree';

// interface AppState {
//   rootStore: RootStore;
// }
class App extends Component /*<AppState> */ {
  // state = {rootTree: null};
  // componentDidMount() {
  //   const {rootTree} = setupRootStore();
  //   this.setState({rootTree});
  // }

  render() {
    // if (!this.state.rootTree) {
    //   return null;
    // }

    return (
      // <Provider /*rootTree={this.state.rootTree}*/>
      <View style={styles.container}>
        <Layout />
      </View>
      /* </Provider> */
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
export default App;
