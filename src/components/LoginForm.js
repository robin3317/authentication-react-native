import React, { Component } from 'react';
import { Text } from 'react-native';

import { Card, CardSection } from './common';

class LoginForm extends Component {
  render() {
    return(
      <Card>
        <CardSection>
          <Text>Login form</Text>
        </CardSection>

        <CardSection>
          <Text>A</Text>
        </CardSection>

        <CardSection>
          <Text>B</Text>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;