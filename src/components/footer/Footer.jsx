import React from 'react';
import styled from 'styled-components';
import lock from '../../assets/lock.svg';
import Image from '../image/Image';

const Footer = ({ email, secureText }) => {
  return (
    <CustomFooter>
      <ContainerFooter>
        <CopyrightText>
          Copyright (c) 2023 <span></span> {email}
        </CopyrightText>
        <SecureText>
          <Image src={lock} alt="lock" /> {secureText}
        </SecureText>
      </ContainerFooter>
    </CustomFooter>
  );
};

export default Footer;

const CustomFooter = styled.footer`
  display: flex;
  justify-content: center;
  background: #252f3d;
  color: #fff;
  padding: 24px 119px 24px 127px;
  height: 40px;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin: 0;

  @media (max-width: 1245px) {
    justify-content: center;
    padding: 20px 0;
    width: unset;
    height: unset;
  }
`;

const ContainerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 1245px;

  @media (max-width: 1245px) {
    font-size: 12px;
    row-gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }
`;

const CopyrightText = styled.div`
  display: flex;
  align-items: center;
  line-height: 140%;
  column-gap: 16px;

  span {
    width: 1px;
    height: 24px;
    background: #FFF;
  }

  @media (max-width: 1245px) {
    padding: 8px 0;
    column-gap: 12px;

    span {
      width: 1px;
      height: 14px;
    }
  }
`;

const SecureText = styled.div`
  display: flex;
  align-items: center;
  line-height: 150%;
  column-gap: 16px;
  text-transform: capitalize;
`;
