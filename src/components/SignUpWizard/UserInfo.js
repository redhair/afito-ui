import React from 'react';
import Form from 'react-validation/build/form';
import { Row, Column } from '../Grid';
import FormButton from '../FormButton';
import Input from '../Input';
import * as valid from '../../formValidator';

function UserInfo({ onSubmit, updateUserInfo, userInfo, signedUp }) {
  return (
    <Form className="UserInfo" onSubmit={onSubmit}>
      <Row>
        <Column xs={6}>
          <Input
            placeholder="First"
            id="first"
            type="text"
            name="first"
            validations={[valid.required]}
            onChange={e => updateUserInfo(e)}
          />
        </Column>
        <Column xs={6} style={{ paddingLeft: '8px' }}>
          <Input
            placeholder="Last"
            id="last"
            type="text"
            name="last"
            validations={[valid.required]}
            onChange={e => updateUserInfo(e)}
          />
        </Column>
      </Row>
      <Row>
        <Column xs={12}>
          <Input
            placeholder="example@domain.com"
            id="email"
            type="email"
            name="email"
            validations={[valid.required, valid.email]}
            onChange={e => updateUserInfo(e)}
          />
          <Input
            placeholder="Password"
            id="password"
            type="password"
            name="password"
            validations={[valid.required, valid.password]}
            onChange={e => updateUserInfo(e)}
          />
          <Input
            placeholder="Confirm Password"
            id="confirm"
            type="password"
            name="passwordConfirm"
            validations={[valid.required, valid.password]}
            onChange={e => updateUserInfo(e)}
          />
          <FormButton level="secondary" disabled={signedUp}>
            Create An Account
          </FormButton>
        </Column>
      </Row>
    </Form>
  );
}

export default UserInfo;