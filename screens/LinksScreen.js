import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Button
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

var categories = [
    { id: 0, text: 'example' },
    { id: 1, text: 'exampl2' },
    { id: 2, text: 'example3' }
  ];

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Board',
  };

  state = {
    date: new Date()
  };

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnMount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date(),
    })
  }

  btnPress(){
    return( 
        Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
          {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
      this.setState({date: 'dadas'});
    )
  }

  renderCategories(){
    return categories.map((item, index)=>
    <Text key = {index}> {item.text}</Text>
    )
  };

  render() {
    return (
      <ScrollView style={styles.container}>
         {this.renderCategories()}
         <Text style = "fontSize: 20px;"> {this.state.date.toLocaleTimeString()} </Text>
         <Button
           onPress = { this.btnPress}
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
});
