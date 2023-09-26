import React from 'react';
import styled from 'styled-components';
import arrow_left from '../../assets/arrow_left.svg';
import arrow_right from '../../assets/arrow_right.svg';
import Image from '../image/Image';

function BannerList({ info }) {
  return (
    <ContainerBanner>
      <CustomList>
        {info.map(({ id, title, icon }) => {
          return (
            <CustomItem key={id}>
              {icon} {title}
            </CustomItem>
          );
        })}
      </CustomList>
    </ContainerBanner>
  );
}

function BannerSlider({ info }) {
  const { id, icon, title } = info[0];
  return (
    <ContainerBannerSlider>
      <Image src={arrow_left} alt="arrow_left" />
      <BannerSliderItem key={id}>
        {icon} {title}
      </BannerSliderItem>
      <Image src={arrow_right} alt="arrow_right" />
    </ContainerBannerSlider>
  );
}

const Banner = ({ info }) => {
  return <><BannerSlider info={info} /> <BannerList info={info} /></>;
};

export default Banner;

const ContainerBannerSlider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #252f3d;
  color: white;
  height: 42px;
  column-gap: 26.5px;
  padding: 10px 20px;

  @media (max-width: 360px) {
    justify-content: center;
    height: 22px;
  }

  @media (min-width: 1245px) {
    display: none;
  }
`;

const BannerSliderItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: 8px;
  color: #fff;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  font-size: 12px;

  text-transform: capitalize;
  @media (max-width: 360px) {
    margin: 0;
    letter-spacing: -0.49px;
  }
`;

const ContainerBanner = styled.div`
  background: #252f3d;
  display: flex;
  justify-content: center;

  @media (max-width: 1245px) {
    display: none;
  }
`;

const CustomList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  min-height: 50px;
  max-height: auto;
  margin: 0;
  padding: 0 137px 0 127px;
  width: 1236px;

  @media (max-width: 1236px) {
    justify-content: center;
    column-gap: 10px;
    padding: unset;
  }
`;

const CustomItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: 8px;
  color: #fff;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  text-transform: uppercase;
  padding: 15px 0 13px 0;
`;
