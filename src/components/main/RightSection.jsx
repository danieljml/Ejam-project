import React from 'react';
import styled from 'styled-components';
import Image from '../image/Image';
import { PrincipalImage } from "./Global"

const RightSection = ({ heroImageSrc, userPhotoSrc, userStarsSrc, verificationIconSrc, userName, comment }) => {
  return (
    <RightSectionContainer>
      <PrincipalImage heroImageSrc={heroImageSrc}/>
      <UserSection>
        <UserInfo>
          <UserPhoto>
            <Image src={userPhotoSrc} alt="user_photo" />
          </UserPhoto>
          <UserDescription>
            <UserStars>
              <Image src={userStarsSrc} alt="user_stars" />
            </UserStars>
            <UserProfile>
              <UserName>{userName}</UserName>
              <VerificationBadge>
                <Image src={verificationIconSrc} alt="verify" />
                <span>Verified Customer</span>
              </VerificationBadge>
            </UserProfile>
          </UserDescription>
        </UserInfo>
        <UserComment>{comment}</UserComment>
      </UserSection>
    </RightSectionContainer>
  );
};

export default RightSection;

const RightSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  row-gap: 18px;
  border-radius: 10px;
  background: #fff;
  height: 138px;

  @media (max-width: 1245px) {
    display: none;
  }
`;

const UserInfo = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 13px;
`;

const UserDescription = styled.div`
  display: grid;
  row-gap: 8.35px;
  height: 36.35px;
`;

const UserProfile = styled.div`
  display: flex;
  column-gap: 10px;
`;

const UserName = styled.p`
  color: #333;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  margin: 0;
`;

const VerificationBadge = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  height: 16px;

  span {
    color: #5bb59a;
    font-family: Manrope;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
  }
`;

const UserComment = styled.p`
  color: #4d5254;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: 0;
`;

const UserPhoto = styled.div``;

const UserStars = styled.div``;
