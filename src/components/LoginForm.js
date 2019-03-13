import React, { Component } from 'react';
import { Text } from 'react-native';

import { Card, CardSection, Button, InputField } from './common';

class LoginForm extends Component {
  render() {
    return(
      <Card>
        <CardSection>
          <InputField label="Email" />
        </CardSection>

        <CardSection>
          <InputField label="Password" />
        </CardSection>

        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;