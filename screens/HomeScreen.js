import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <View style={styles.homeTitleContainer}>
            <Text style = {styles.homeTitle}>WAFFLE TIME</Text>
            <Text style={styles.semiTitle}>
                        G R O U P &nbsp; O F &nbsp; C O M P A N I E S
              </Text>
          </View>

          <View style={styles.homeNotificationContainer}>


          </View>


        </ScrollView>

        <View style={styles.homeModulesContainer}>
        <Button
          buttonStyle={styles.buttonBG}
          onPress={() => {
            Alert.alert('A PROPOSAL ONLY');
          }}
          title="Visit Employee Portal"
          accessibilityLabel="Company Agenda"
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fee300',
    padding: 8,
  },
  contentContainer: {
    paddingTop: 30,
  },
  homeTitleContainer:{

  },
  homeTitle: {
    fontSize: 50,
    color: '#fa0002',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  homeNotificationContainer:{
    marginTop: 50,
    backgroundColor: '#f5f5f5',
    padding: 150,
  },
  semiTitle: {
    textAlign: 'center',
  },
  homeModulesContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    paddingVertical: 20
  },
  buttonBG: {
     backgroundColor: '#00aeef',
     borderColor: 'red',
     borderWidth: 5,
     borderRadius: 15
  }
});
