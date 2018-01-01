import React from 'react';
import { StyleSheet, Text, TextInput, View, Platform } from 'react-native';

export default class CurrentWeight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChangeText = text => {
    this.setState({
      text: text,
      finished: false,
    });
  };

  handleSubmitEditing = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;
  };

  render () {
    const { placeholder } = this.props;
    const { finished, text } = this.state;

    if (finished) {
      return <Text style={styles.weight}>{text}</Text>;
    } else {
      return (
        <View style={styles.container}>
          <TextInput
            autoCorrect={false}
            clearButtonMode="always"
            keyboardType='numeric'
            maxLength={5}
            onChangeText={this.handleChangeText}
            onEndEditing={() => this.setState({ finished: true })}
            onSubmitEditing={this.handleSubmitEditing}
            placeholder="Your Weight Today"
            placeholderTextColor="#557dab"
            returnKeyType="done"
            style={styles.textInput}
            underlineColorAndroid="transparent"
            value={text}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 20,
    backgroundColor: '#f3f3f5',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderColor: '#557dab',
    borderWidth: 1,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 20,
    color: '#557dab',
  },
  weight: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    color: '#557dab',
  },
});
