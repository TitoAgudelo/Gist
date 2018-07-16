import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import GistList from './src/screens/GistList/GistList';
import { ScrollView } from './node_modules/react-native-gesture-handler';
import { MainNavigator } from './src/navigators/';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={{flexGrow:1}}>
        <MainNavigator />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 1
  },
});
