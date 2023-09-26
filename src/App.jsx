import styled from 'styled-components';

import fluent_checkmark from './assets/fluent_checkmark-starburst-20-regular.svg';
import truck from './assets/ph_truck_light.svg';
import heart from './assets/mdi_cards-heart-outline.svg';
import sync_checkmark from './assets/fluent_arrow-sync-checkmark-20-regular.svg';
import clarifion_logo from './assets/clarifion_logo.png';
import norton from './assets/norton.svg';
import mcafee from './assets/mcafee.svg';
import clarifion_hero from './assets/clarifion_hero.png';
import user_photo from './assets/user.png';
import user_stars from './assets/Stars.svg';
import verify from './assets/verify.svg';
import clarifion_stock from './assets/clarifion_stock.png';
import star_filled from './assets/star_filled.svg';
import stock_point from './assets/point.svg';
import percent_icon from './assets/percent_icon.svg';
import lock from './assets/lock_1.svg';
import visa from './assets/visa.svg';
import paypal from './assets/paypal.svg';
import shop_pay from './assets/shop pay.svg';
import mastercard from './assets/mastercard.svg';
import gpay from './assets/gpay.svg';
import apple_pay from './assets/apple pay.svg';
import amex from './assets/amex.svg';
import satisfaction_guarantee from './assets/satisfaction_guarantee.png';

import Banner from './components/banner/Banner';
import Image from './components/image/Image';
import Header from './components/header/Header';
import Title from './components/title/Title';
import SubTitle from './components/subtitle/Subtitle';
import ProgressBar from './components/progress_bar/ProgressBar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

const BannerInfo = [
  {
    id: 1,
    title: '30-DAY SATISFACTION GUARANTEE',
    icon: <Image src={fluent_checkmark} alt={'fluent_checkmark'} />,
  },
  {
    id: 2,
    title: 'Free delivery on orders over $40.00',
    icon: <Image src={truck} alt={'truck'} />,
  },
  {
    id: 3,
    title: '50.000+ HAPPY CUSTOMERS',
    icon: <Image src={heart} alt={'heart'} />,
  },
  {
    id: 4,
    title: '100% Money Back Guarantee',
    icon: <Image src={sync_checkmark} alt={'sync_checkmark'} />,
  },
];

const HeaderLogo = <Image src={clarifion_logo} alt="clarifion_logo" />;
const HeaderBrands = [
  {
    id: 1,
    image: <Image src={mcafee} alt="mcafee" />,
  },
  {
    id: 2,
    image: <Image src={norton} alt="norton" />,
  },
];

const TitleStyles = { margin: '-18.33px 0 0 0', mediaQuery: { fontSize: '32px' } };
const SubTitleStyles = {
  color: '#4D5254',
  fontSize: '24px',
  fontStyle: 'normal',
  margin: '24px 0 60px 0',
  mediaQuery: { fontSize: '16px', padding: '0', margin: '0 0 2px 0' },
};

const ProgressBarInfo = [
  { id: 1, state: 'completed', number: 1, title: 'Cart Review' },
  { id: 2, state: 'completed', number: 2, title: 'Checkout' },
  { id: 3, state: 'doing', number: 3, title: 'Special Offer' },
  { id: 4, state: 'remaining', number: 4, title: 'Confirmation' },
];

const MainRightContent = {
  heroImageSrc: clarifion_hero,
  userPhotoSrc: user_photo,
  userStarsSrc: user_stars,
  verificationIconSrc: verify,
  userName: 'Ken T.',
  comment:
    '“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”',
};

const paymentIcons = [
  { id: 1, image: visa, title: 'Visa' },
  { id: 2, image: paypal, title: 'PayPal' },
  { id: 3, image: shop_pay, title: 'Shop Pay' },
  { id: 4, image: mastercard, title: 'Mastercard' },
  { id: 5, image: gpay, title: 'Google Pay' },
  { id: 6, image: apple_pay, title: 'Apple Pay' },
  { id: 7, image: amex, title: 'American Express' },
];

const MainLeftContent = {
  productTitle: '<span>ONE TIME ONLY</span> special price for 6 extra Clarifion for only <span>$14 each</span> ($84.00 total!)',
  productDetails: {
    productImageSrc: clarifion_stock,
    productDescription: 'Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.',
    productHeader: {
      productName: 'Clarifion Air Ionizer',
      productPrice: '<s>$180</s> $84',
    },
    productStars: {
      productRating: 5,
      starImageSrc: star_filled,
    },
    productStock: {
      stockImageSrc: stock_point,
      stockText: '12 left in Stock',
    },
  },
  productSummaryData: [
    {
      id: 1,
      title: 'Negative Ion Technology may <strong>help with allergens</strong>',
    },
    {
      id: 2,
      title: 'Designed for <strong>air rejuvenation</strong>',
    },
    {
      id: 3,
      title: '<strong>Perfect for every room</strong> in all types of places.',
    },
  ],
  discountBanner: {
    percentIconSrc: percent_icon,
    discountMessage: 'Save <span>53%</span> and get <span>6 extra Clarifision</span> for only <span>$14 Each</span>.',
  },
  paymentContainer: {
    customButtonText: 'Yes - Claim my discount',
    paymentAndSecurity: {
      freeShippingText: 'Free shipping',
      secureText: {
        lockImageSrc: lock,
        text: 'Secure 256-bit SSL encryption.',
      },
      paymentTypes: paymentIcons.map(item => ({
        id: item.id,
        imageSrc: item.image,
        title: item.title,
      })),
    },
    noThanksText: 'No thanks, I don’t want this.',
  },
  satisfactionGuarantee: {
    satisfactionGuaranteeImageSrc: satisfaction_guarantee,
    satisfactionGuaranteeText:
      'If you are not completely thrilled with your Clarifion - We have a <span>30 day satisfaction guarantee.</span> Please refer to our return policy at the bottom of the page for more details. Happy Shopping!',
  },
};

function App() {
  return (
    <>
      <Banner info={BannerInfo} />
      <Header logo={HeaderLogo} brands={HeaderBrands} />
      <Title message="Wait ! your order in progress." styles={TitleStyles} />
      <SubTitle message="Lorem ipsum dolor sit amet, consectetur adipiscing" styles={SubTitleStyles} />
      <Container>
        <ProgressBar info={ProgressBarInfo} />
      </Container>
      <Container>
        <Main MainRightContent={MainRightContent} MainLeftContent={MainLeftContent} />
      </Container>
      <Footer email="clarifionsupport@clarifion.com" secureText="Secure 256-bit SSL encryption." />
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
