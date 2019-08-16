import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading } from '../Typography';

function randomLoadingMessage() {
  let lines = [
    'You might want to get a cup of coffee...',
    'Shovelling coal into the server...',
    'Programming the flux capacitor',
    'Please wait and enjoy the elevator music.',
    "At least you're not on hold.",
    'Please wait while the satellite moves into position.',
    'Please wait, we are testing your patience.'
  ];

  return lines[Math.round(Math.random() * (lines.length - 1))];
}

const LoadingBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 350px;
`;

const Circles = styled.div`
  width: auto;
  text-align: center;

  & > div {
    width: 16px;
    height: 16px;
    margin: 0 8px;
    background-color: #333;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: scaleUpDown 1.5s infinite ease-in-out both;
    animation: scaleUpDown 1.5s infinite ease-in-out both;
  }

  & .circle1 {
    -webkit-animation-delay: -0.3s;
    animation-delay: -0.3s;
  }

  & .circle2 {
    -webkit-animation-delay: -0.15s;
    animation-delay: -0.15s;
  }

  @-webkit-keyframes scaleUpDown {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes scaleUpDown {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

const Wrapper = ({ quiet }) => (
  <LoadingBlock>
    <Circles>
      <div className="circle1" />
      <div className="circle2" />
      <div className="circle3" />
    </Circles>
    {!quiet && (
      <Heading level={5} style={{ marginTop: '20px' }}>
        {randomLoadingMessage()}
      </Heading>
    )}
  </LoadingBlock>
);

Wrapper.propTypes = {
  quiet: PropTypes.bool
};

export default Wrapper;
