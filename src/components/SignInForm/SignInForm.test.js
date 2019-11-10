import React from 'react';
import ReactDOM from 'react-dom';
import SignInForm from '.';
import ThemeProvider from '../ThemeProvider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <SignInForm
        onSignIn={({ email, password }, callback) => {
          console.log({ email, password });
          // Send email & password to API
          callback({ status: 400, data: { message: 'Invalid username/password' } });
        }}
      />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
