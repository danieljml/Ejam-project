import styled from 'styled-components';
import Title from '../title/Title';
import Image from '../image/Image';

import fluent_checkmark from '../../assets/tick-circle_blue.svg';
import line from '../../assets/line.svg';

export const ProductTitle = ({ productTitle }) => {
  return (
    <CustomProductTitle>
      <Title message={productTitle} />
    </CustomProductTitle>
  );
};

const CustomProductTitle = styled.div`
  h1 {
    color: #000;
    font-family: Manrope;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    text-transform: capitalize;
    margin: 0;
    padding: 0;
    height: 113px;
    margin-top: -10px;
    text-align: start;

    span {
      color: #2c7ef8;
    }
  }

  @media (max-width: 1245px) {
    h1 {
      font-size: 24px;
      text-align: center;
      height: unset;
      margin-bottom: -7.5px;
    }
  }
`;

export const PrincipalImage = ({heroImageSrc}) => {
  return (
    <CustomImageContainer>
      <Image src={heroImageSrc} alt="clarifion_hero" />
    </CustomImageContainer>
  );
};

const CustomImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  img {
    border-radius: 10px
  }

  @media (max-width: 1245px) {
    align-items: center;

    img {
      width: 100%;
      height: 328px;
    }
  }

  @media (max-width: 360px) {
    img {
      width: 320px;
    }
  }
`;

export const ProductContainer = ({ productDetails, productSummaryData, discountBanner, paymentContainer, satisfactionGuarantee }) => {
  return (
    <CustomProductContainer>
      <ProductDetails>
        <ProductDetailContainer>
          <ProductImageContainer>
            <Image src={productDetails.productImageSrc} />
          </ProductImageContainer>
          <ProductDescription>
            <ProductHeader>
              <ProductName>{productDetails.productHeader.productName}</ProductName>
              <ProductPrice>
                <Title message={productDetails.productHeader.productPrice} />
              </ProductPrice>
            </ProductHeader>
            <ProductStars>
              {new Array(5).fill().map((_, i) => {
                return <Image key={i} src={productDetails.productStars.starImageSrc} alt="star_filled" />;
              })}
            </ProductStars>
            <ProductStock>
              <Image src={productDetails.productStock.stockImageSrc} alt="stock_point" />
              <Title message={productDetails.productStock.stockText} />
            </ProductStock>
            <StockDescription>{productDetails.productDescription}</StockDescription>
          </ProductDescription>
        </ProductDetailContainer>
        <MobileStockDescription>{productDetails.productDescription}</MobileStockDescription>
      </ProductDetails>
      <ProductSummaryContainer>
        {productSummaryData.map(({ id, title }) => {
          return (
            <ProductSummary key={id}>
              <Image src={fluent_checkmark} alt="fluent-checkmark" />
              <Title message={title} />
            </ProductSummary>
          );
        })}
      </ProductSummaryContainer>
      <DiscountBanner>
        <Image src={discountBanner.percentIconSrc} alt="percent_icon" />
        <Title message={discountBanner.discountMessage} />
      </DiscountBanner>
      <PaymentContainer>
        <CustomButton>
          {paymentContainer.customButtonText} <Image src={line} alt="line" />
        </CustomButton>
        <PaymentAndSecurity>
          <FreeSecureContainer>
            <FreeText>{paymentContainer.paymentAndSecurity.freeShippingText}</FreeText>
            <span></span>
            <SecureText>
              <Image src={paymentContainer.paymentAndSecurity.secureText.lockImageSrc} alt="lock" /> {paymentContainer.paymentAndSecurity.secureText.text}
            </SecureText>
          </FreeSecureContainer>
          <span></span>
          <PaymentTypes>
            {paymentContainer.paymentAndSecurity.paymentTypes.map(({ id, imageSrc, title }) => {
              return <Image key={id} src={imageSrc} alt={title} />;
            })}
          </PaymentTypes>
        </PaymentAndSecurity>
        <Title message={paymentContainer.noThanksText} />
      </PaymentContainer>
      <SatisfactionGuarantee>
        <Image src={satisfactionGuarantee.satisfactionGuaranteeImageSrc} alt="satisfaction guarantee" />
        <Title message={satisfactionGuarantee.satisfactionGuaranteeText} />
      </SatisfactionGuarantee>
    </CustomProductContainer>
  );
};

const CustomProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  width: 550px;

  @media (max-width: 1245px) {
    row-gap: 24px;
    width: unset;
  }
`;

const PaymentContainer = styled.div`
  h1 {
    color: #f82c2c;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    text-decoration: underline #f82c2c;
    cursor: pointer;
  }

  @media (max-width: 1245px) {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    h1 {
      font-size: 12px;
    }
  }
`;

const SatisfactionGuarantee = styled.div`
  display: flex;
  column-gap: 16px;
  height: 88px;

  h1 {
    color: #4d5254;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    text-align: start;
  }

  span {
    font-weight: 700;
  }

  @media (max-width: 1245px) {
    h1 {
      text-transform: unset;
      font-size: 12px;
    }

    img {
      width: 48px;
      height: 48px;
    }
  }

  @media (max-width: 360px) {
    h1 {
      width: 256px;
    }
  }
`;

const PaymentAndSecurity = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #cfcfcf;
  color: #4d5254;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  text-transform: capitalize;
  margin: 12px 0 20px 0;

  span {
    margin: 0 16px;
    width: 1px;
    height: 16px;
    background: #cfcfcf;
  }

  @media (max-width: 1245px) {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
    margin: unset;
    padding: 8px 0;

    span {
      display: block;
      width: 289px;
      height: 1px;
      background: #cfcfcf;
    }
  }
`;

const FreeSecureContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1245px) {
    span {
      margin: 0 12px;
      width: 1px;
      height: 16px;
      background: #cfcfcf;
    }
  }
`;

const FreeText = styled.p`
  color: #4d5254;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  text-transform: capitalize;
  margin: 0;
`;

const SecureText = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: #4d5254;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-transform: capitalize;
  margin: 0;
`;

const PaymentTypes = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2px;
`;

const CustomButton = styled.button`
  display: flex;
  padding: 16px 64px;
  justify-content: center;
  align-items: center;
  column-gap: 19.76px;
  align-self: stretch;
  border-radius: 50px;
  background: #59ae43;
  color: #fff;
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  width: 542px;
  height: 59px;
  border: none;
  cursor: pointer;

  @media (max-width: 1245px) {
    width: 100%;
    font-size: 14px;
    padding: unset;

    img {
      width: 12px;
    }
  }
`;

const DiscountBanner = styled.div`
  background: #edf3fd;
  display: flex;
  align-items: center;
  width: 510px;
  column-gap: 16px;
  border-radius: 10px;
  padding: 12px 16px;

  h1 {
    color: #000;
    font-size: 16px;
    font-family: Manrope;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    text-transform: unset;
  }

  span {
    color: #2c7ef8;
    font-family: Manrope;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  @media (max-width: 1245px) {
    width: unset;

    h1 {
      font-size: 14px;
      text-align: unset;
    }

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

const ProductSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const ProductSummary = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  h1 {
    text-transform: unset;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    color: #4d5254;
    font-size: 16px;
  }

  img {
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1245px) {
    h1 {
      font-size: 12px;
      text-align: unset;
    }

    img {
      width: 16px;
      height: 16px;
    }
  }
`;

const ProductDetailContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 24px;
  height: 135px;

  @media (max-width: 1245px) {
    gap: 16px;
    height: unset;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const ProductImageContainer = styled.div`
  background: #2c7ef8;
  display: grid;
  place-items: center;
  border-radius: 10px;
  width: 134px;
  height: 134px;

  @media (max-width: 1245px) {
    width: 80px;
    height: 80px;

    img {
      width: 100%;
    }
  }
`;

const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  margin-top: -1.5px;

  @media (max-width: 1245px) {
    row-gap: 12px;
  }
`;

const ProductHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 16px;
`;

const ProductStock = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;

  h1 {
    text-transform: unset;
    color: #37465a;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }

  @media (max-width: 1245px) {
    h1 {
      font-size: 12px;
    }

    img {
      width: 12px;
      height: 12px;
    }
  }
`;

const StockDescription = styled.p`
  color: #4d5254;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin: 0;

  @media (max-width: 1245px) {
    display: none;
  }
`;

const MobileStockDescription = styled.p`
  color: #4d5254;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin: 0;
  font-size: 12px;
  text-align: center;

  @media (min-width: 1245px) {
    display: none;
  }
`;

const ProductStars = styled.div`
  height: 18px;

  @media (max-width: 1245px) {
    img {
      width: 12px;
      height: 12px;
    }
  }
`;

const ProductName = styled.p`
  margin: 0;
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  text-transform: capitalize;

  @media (max-width: 1245px) {
    font-size: 14px;
  }
`;

const ProductPrice = styled.div`
  h1 {
    display: flex;
    align-items: center;
    column-gap: 10px;
    color: #2c7ef8;
    font-family: Manrope;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    text-transform: capitalize;
  }

  s {
    color: #969696;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;
  }

  @media (max-width: 1245px) {
    h1 {
      font-size: 14px;
    }
    s {
      font-size: 10px;
    }
  }
`;
