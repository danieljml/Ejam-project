import React from 'react';
import styled from 'styled-components';
import { ProductContainer, ProductTitle } from './Global';

const LeftSection = ({ productTitle, productDetails, productSummaryData, discountBanner, paymentContainer, satisfactionGuarantee }) => {
  return (
    <RightSectionContainer>
      <ProductTitle productTitle={productTitle} />
      <ProductContainer
        productDetails={productDetails}
        productSummaryData={productSummaryData}
        discountBanner={discountBanner}
        paymentContainer={paymentContainer}
        satisfactionGuarantee={satisfactionGuarantee}
      />
    </RightSectionContainer>
  );
};

export default LeftSection;

const RightSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  width: 550px;
`;
