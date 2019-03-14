import React, { Component } from 'react';
import { Text } from 'react-native';

import { Card, CardSection, Button, InputField } from './common';

class LoginForm extends Component {
  render() {
    return(
      <Card>
        {/* Email */}
        <CardSection>
          <InputField 
            label="Email" 
            placeholder="example@gmail.com"
            keyboardType="email-address"
          />
        </CardSection>

        {/* Password */}
        <CardSection>
          <InputField 
            label="Password" 
            placeholder="password"
            secureTextEntry={true} 
          />
        </CardSection>

        {/* Button */}
        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;