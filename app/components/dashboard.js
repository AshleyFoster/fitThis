import React from 'react';
import { StyleSheet, Text, TextInput, View, Platform } from 'react-native';

export default class Dashboard extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.medText}>Dashboard</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  medText: {
    fontSize: 30,
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
  }
});
