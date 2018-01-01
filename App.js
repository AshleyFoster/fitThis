import React from 'react';
import { StyleSheet, Text, View, Platform, Button, AsyncStorage } from 'react-native';
import {Container, Header, Content, Footer, Title} from 'native-base';

import Dashboard from './app/components/dashboard.js';

import CurrentWeight from './app/components/currentWeight.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeight: '',
    };
  }

  componentDidMount() {
    this.handleUpdateCurrentWeight('Your Weight Today');
  }

  handleUpdateCurrentWeight = currentWeight => {
    this.setState({
      currentWeight: currentWeight,
    });
  };

  render() {
    const { currentWeight } = this.state;

    return (
      <Container>
        <Header style={styles.headerStyle}>
          <Title style={[styles.logoStyle, styles.medText]}>fitThis</Title>
        </Header>
        <Content style={styles.content}>
          <Dashboard/>
          <CurrentWeight
            onSubmit={this.handleUpdateLocation}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#f3f3f5',
    borderBottomWidth: 1,
    borderBottomColor: '#d4d3d4',
  },
  logoStyle: {
    color: '#e64835',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
  },
  medText: {
    fontSize: 30,
  },
  content: {
    backgroundColor: '#f3f3f5'
  },
  button: {
    padding: 10,
  },
});
