import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Card, CardSection, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  state = {
    loggedIn: false
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBMLZi7UqdJAuk4GQRt4aW8SXEA3FRGSDM",
      authDomain: "auth-reactnative123.firebaseapp.com",
      databaseURL: "https://auth-reactnative123.firebaseio.com",
      projectId: "auth-reactnative123",
      storageBucket: "auth-reactnative123.appspot.com",
      messagingSenderId: "882103771147"
    });

    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.setState({loggedIn: true});
      }else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return(
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />
      default:
        return <Spinner size='large' />
    }
  }

  render() {
    return (
      <View>
        <Header header="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;