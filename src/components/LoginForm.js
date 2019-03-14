import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import * as firebase from 'firebase';

import { Card, CardSection, Button, InputField, Spinner } from './common';

class LoginForm extends Component {

  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  }

  onButtonPress = () => {
    const {email, password} = this.state;

    this.setState({error: '', loading: true});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail);
      });
  }

  // if Correct email & password or Create a new user
  onLoginSuccess = () => {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: null
    });
  }

  // if anything wrong from email & password
  onLoginFail = () => {
    this.setState({
      error: 'Authentication Failed',
      loading: false
    });
  }

  render() {
    const { errorTextStyle } = styles;

    return(
      <Card>
        {/* Email */}
        <CardSection>
          <InputField 
            label="Email" 
            placeholder="example@gmail.com"
            keyboardType="email-address"
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
        </CardSection>

        {/* Password */}
        <CardSection>
          <InputField 
            label="Password" 
            placeholder="password"
            secureTextEntry={true}
            onChangeText={password => this.setState({password})}
            value={this.state.password} 
          />
        </CardSection>

        {/* Error */}
        { 
          this.state.error ? 
          <Text style={errorTextStyle}>
            {this.state.error}
          </Text> : null
        }
        

        {/* Button */}
        <CardSection>
          {!this.state.loading ? <Button onPress={this.onButtonPress}>Log in</Button> : <Spinner />}
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 18,
  }
});

export default LoginForm;