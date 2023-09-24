import React from 'react';
import styled, { css } from 'styled-components';

const Title = ({ message, styles }) => {
  return <CustomTitle styles={styles} dangerouslySetInnerHTML={{ __html: message }}/>;
};

export default Title;

const CustomTitle = styled.h1`
  text-align: center;
  font-style: normal;
  color: ${(props) => props?.styles?.color || '#000'}; 
  font-size: ${(props) => props?.styles?.fontSize || '48px'};
  font-weight: ${(props) => props?.styles?.fontWeight || 400}; 
  line-height: ${(props) => props?.styles?.lineHeight || '100%'};
  text-transform: ${(props) => props?.styles?.textTransform || 'capitalize'};
  font-style: ${(props) => props?.styles?.fontStyle || 'unset'};
  margin: ${(props) => props?.styles?.margin || 'unset'};;

  ${(props) =>
    props?.styles?.mediaQuery &&
    css`
      @media (max-width: 1245px) {
        font-size: ${props?.styles?.mediaQuery?.fontSize};
        padding: ${props.styles?.mediaQuery?.padding || '30px 0 24px 0'};
        margin: ${props?.styles?.mediaQuery?.margin};
        background-color: #fafafa;
      }
    `};
`;