import React from 'react';
import styled from 'styled-components';

const Header = ({ logo, brands, styles }) => {
  return (
    <ContainerHeader>
      <CustomHeader styles={styles}>
        {logo}
        <CustomContainer styles={styles}>
          {brands.map(({ id, image }) => {
            return <div key={id}>{image}</div>;
          })}
        </CustomContainer>
      </CustomHeader>
    </ContainerHeader>
  );
};

export default Header;

const ContainerHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const CustomHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 127px;
  width: 1245px;

  @media (max-width: 1245px) {
    background: #fafafa;
    padding: 20px;
    width: 100%;
    font-size: 12px;
  }

  img {
    @media (max-width: 1245px) {
      width: 106.667px;
      height: 20px;
    }
  }
`;

const CustomContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 32px;

  img {
    @media (max-width: 1245px) {
      width: 44px;
      height: 16px;
    }
  }
`;
