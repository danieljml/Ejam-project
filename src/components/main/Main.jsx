import React from 'react';
import styled from 'styled-components';
import RightSection from './RightSection';
import LeftSection from './LeftSection';
import { PrincipalImage, ProductContainer, ProductTitle } from './Global';


const Main = ({ MainRightContent, MainLeftContent }) => {
  return (
    <>
      <CustomMain>
        <RightSection {...MainRightContent} />
        <LeftSection {...MainLeftContent} />
      </CustomMain>
      <MobileMain {...MainRightContent} {...MainLeftContent} />
    </>
  );
};

export default Main;

const CustomMain = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 40px;
  border-radius: 10px;
  background: #fafafa;
  margin: 40px 127px 61px 128px;
  padding: 40px 40px 38px 40px;
  width: 1165px;

  @media (max-width: 1245px) {
    display: none;
  }
`;

const MobileMain = ({ heroImageSrc, productTitle, productDetails, productSummaryData, discountBanner, paymentContainer, satisfactionGuarantee }) => {
  return (
    <MainMobileContainer>
      <ProductTitle productTitle={productTitle} />
      <PrincipalImage heroImageSrc={heroImageSrc}/>
      <ProductContainer
        productDetails={productDetails}
        productSummaryData={productSummaryData}
        discountBanner={discountBanner}
        paymentContainer={paymentContainer}
        satisfactionGuarantee={satisfactionGuarantee}
      />
    </MainMobileContainer>
  );
};

const MainMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  @media (min-width: 1245px) {
    display: none;
  }

  @media (max-width: 1245px) {
    padding: 0 20px 32px 20px;
  }
`;

