import styled from 'styled-components';
import tw from 'twin.macro';

export const PrivacyTerms = styled.div`
  ${tw`p-10 overflow-auto`}

  h1 {
    font-weight: 700;
    font-size: 2.25em;
    margin-top: 0;
    margin-bottom: 0.8888889em;
    line-height: 1.1111111;
  }

  h1,
  h2 {
    margin-bottom: 0.8em;
    line-height: 1.4;
  }

  h3,
  h4 {
    font-weight: 600;
  }

  h2 {
    font-weight: 700;
    font-size: 1.5em;
    margin-top: 2em;
    margin-bottom: 1em;
    line-height: 1.3333333;
  }

  h3 {
    font-size: 1.25em;
    margin-top: 1.6em;
    margin-bottom: 0.6em;
    line-height: 1.6;
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-top: 1.25em;
    margin-bottom: 1.25em;
  }

  ul > li {
    position: relative;
    padding-left: 1.75em;
  }

  li {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  ul > li:before {
    content: '';
    position: absolute;
    background-color: #000;
    border-radius: 50%;
    width: 0.375em;
    height: 0.375em;
    top: calc(0.875em - 0.1875em);
    left: 0.25em;
  }

  a {
    color: #0078d4;
    text-decoration: none;
    font-weight: 400;
    cursor: pointer;

    :hover {
      color: #004578;
    }
  }
`;
