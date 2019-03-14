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
      apiKey: "api_key",
      authDomain: "authDomain",
      databaseURL: "databaseURL",
      projectId: "projectId",
      storageBucket: "storageBucket",
      messagingSenderId: "messagingSenderId"
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