import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {Container, Header, Content, Footer, Title} from 'native-base';

import Dashboard from './app/components/dashboard.js';

export default class App extends React.Component {
  render() {
    return (
      <Container>
          <Header style={styles.headerStyle}>
            <Title style={[styles.logoStyle, styles.medText]}>fitThis</Title>
          </Header>
          <Content style={styles.content}>
            <Dashboard/>
          </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#f3f3f5',
    borderBottomColor: 'transparent',
  },
  logoStyle: {
    color: '#ffaa64',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
  },
  medText: {
    fontSize: 30,
  },
});
