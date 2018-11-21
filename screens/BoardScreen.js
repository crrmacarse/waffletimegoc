import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Button
} from 'react-native';

import { TestComponent } from './../components/app_components';
import { green } from 'ansi-colors';

var categories = [
  { id: 0, text: 'example' },
  { id: 1, text: 'exampl2' },
  { id: 2, text: 'example3' }
];

export default class BoardScreen extends React.Component {
  static navigationOptions = {
    title: 'Board',
  };

  state = {
    date: new Date()
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnMount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  btnPress() {
    console.log("heard");
  } 

  renderCategories() {
    return categories.map((item, index) =>
      <Text key={index}> {item.text}</Text>
    ) 
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderCategories()}
        <TestComponent />
        <Text style={styles.hourCSS}> {this.state.date.toLocaleTimeString()} </Text>
        <Button
          onPress={this.btnPress}
          title="Click Here"
          backgroundColor="#666"
        />
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  hourCSS:{
    fontSize: 20,
    color: 'green',
    fontWeight: "bold",
  }
});
