import React from 'react';
import ReactDOM from 'react-dom';
import LoginModal from '.';
import ThemeProvider from '../ThemeProvider';
import 'jest-styled-components';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <LoginModal
        activeIndex={0}
        onSignIn={() => console.log('log user in')}
        onSignUp={() => console.log('sign user up')}
      />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
