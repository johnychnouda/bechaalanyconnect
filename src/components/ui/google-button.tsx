import React from 'react';
import styled from 'styled-components';

interface GoogleButtonProps {
  onClick: () => void;
  text?: string;
}

const GoogleButton = ({ onClick, text = "SIGNUP WITH GOOGLE" }: GoogleButtonProps) => {
  return (
    <StyledWrapper>
      <button className="button" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" className="svg">
          <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" className="blue" />
          <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" className="green" />
          <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" className="yellow" />
          <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" className="red" />
        </svg>
        <span className="text">{text}</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;

  .button {
    width: 100%;
    padding: 12px;
    font-weight: bold;
    display: flex;
    position: relative;
    overflow: hidden;
    border-radius: 35px;
    align-items: center;
    justify-content: center;
    border: solid #E73828 2px;
    outline: none;
    background: transparent;
    color: #E73828;
    font-size: 18px;
    white-space: nowrap;
    text-overflow: ellipsis;
    min-width: 0;
    max-width: 100%;
  }

  .svg {
    height: 24px;
    min-width: 24px;
    margin-right: 10px;
    flex-shrink: 0;
  }

  .button .text {
    z-index: 10;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
    font-weight: bold;
    min-width: 0;
    max-width: 100%;
  }

  @media (max-width: 400px) {
    .button {
      font-size: 14px;
      padding: 10px;
    }
    .button .text {
      font-size: 14px;
    }
    .svg {
      height: 20px;
      min-width: 20px;
      margin-right: 8px;
    }
  }
  @media (max-width: 340px) {
    .button {
      font-size: 11px;
      padding: 8px;
    }
    .button .text {
      font-size: 11px;
    }
    .svg {
      height: 16px;
      min-width: 16px;
      margin-right: 6px;
    }
  }

  .button:hover .text {
    animation: text forwards 0.3s;
  }

  @keyframes text {
    from {
      color: #E73828;
    }
    to {
      color: white;
    }
  }

  .svg {
    z-index: 6;
  }

  .button:hover::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 9%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    opacity: 0;
    border-radius: 300px;
    animation: wave1 2.5s ease-in-out forwards;
  }

  .button:hover::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 9%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    opacity: 0;
    border-radius: 300px;
    animation: wave2 2.5s ease-in-out forwards;
  }

  @keyframes wave1 {
    0% {
      z-index: 1;
      background: #EB4335;
      width: 0;
      height: 0;
      opacity: 1;
    }
    1% {
      z-index: 1;
      background: #EB4335;
      width: 0;
      height: 0;
      opacity: 1;
    }
    25% {
      z-index: 1;
      background: #EB4335;
      width: 800px;
      height: 800px;
      opacity: 1;
    }
    26% {
      z-index: 3;
      background: #34A853;
      width: 0;
      height: 0;
      opacity: 1;
    }
    50% {
      z-index: 3;
      background: #34A853;
      width: 800px;
      height: 800px;
      opacity: 1;
    }
    70% {
      z-index: 3;
      background: #34A853;
      width: 800px;
      height: 800px;
      opacity: 1;
    }
    100% {
      z-index: 3;
      background: #34A853;
      width: 800px;
      height: 800px;
      opacity: 1;
    }
  }

  @keyframes wave2 {
    0% {
      z-index: 2;
      background: #FBBC05;
      width: 0;
      height: 0;
      opacity: 1;
    }
    11% {
      z-index: 2;
      background: #FBBC05;
      width: 0;
      height: 0;
      opacity: 1;
    }
    35% {
      z-index: 2;
      background: #FBBC05;
      width: 800px;
      height: 800px;
      opacity: 1;
    }
    39% {
      z-index: 2;
      background: #FBBC05;
      width: 800px;
      height: 800px;
      opacity: 1;
    }
    40% {
      z-index: 4;
      background: #4285F4;
      width: 0;
      height: 0;
      opacity: 1;
    }
    64% {
      z-index: 4;
      background: #4285F4;
      width: 800px;
      height: 800px;
      opacity: 1;
    }
    100% {
      z-index: 4;
      background: #4285F4;
      width: 800px;
      height: 800px;
      opacity: 1;
    }
  }

  .button:hover .red {
    animation: disappear 0.1s forwards;
    animation-delay: 0.1s;
  }

  .button:hover .yellow {
    animation: disappear 0.1s forwards;
    animation-delay: 0.3s;
  }

  .button:hover .green {
    animation: disappear 0.1s forwards;
    animation-delay: 0.7s;
  }

  .button:hover .blue {
    animation: disappear 0.1s forwards;
    animation-delay: 1.1s;
  }

  @keyframes disappear {
    from {
      filter: brightness(1);
    }
    to {
      filter: brightness(100);
    }
  }
`;

export default GoogleButton; 