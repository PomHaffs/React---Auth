import React, { Component } from 'React';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBbPsLPfZD0U_odcmFbsXcZ0zUK-OaJOkw',
      authDomain: 'authentication-6d01f.firebaseapp.com',
      databaseURL: 'https://authentication-6d01f.firebaseio.com',
      storageBucket: 'authentication-6d01f.appspot.com',
      messagingSenderId: '561377822968'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
};

export default App;
