import React from 'react';
import styled from 'styled-components';
import doneIcon from '../../assets/tick-circle.svg';
import Image from '../image/Image';

const ProgressStep = ({ state, number }) => {
  const stepStyles = {
    completed: { backgroundColor: '#85BF55' },
    doing: { backgroundColor: '#2C7EF8' },
    remaining: { outline: '2px solid #2C7EF8', color: '#2C7EF8' },
  };

  return <StepContainer styles={stepStyles[state]}>{state === 'completed' ? <Image src={doneIcon} /> : number}</StepContainer>;
};

const ProgressBar = ({ info }) => {
  return (
    <ProgressBarWrapper>
      {info.map(({ id, state, number, title }) => (
        <ProgressBarItem key={id}>
          <ProgressStep state={state} number={number} />
          <ProgressText $isdoing={state}>
            <span className="step">Step {number} : </span>{title}
          </ProgressText>
        </ProgressBarItem>
      ))}
    </ProgressBarWrapper>
  );
};

export default ProgressBar;

const ProgressBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1245px;

  @media (max-width: 1245px) {
    padding: 24px 20px;
    background-color: #fafafa;
  }
`;

const StepContainer = styled.div`
  display: grid;
  place-items: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
  text-transform: capitalize;
  background-color: ${props => props?.styles?.backgroundColor || 'transparent'};
  outline: ${props => props?.styles?.outline || 'none'};
  color: ${props => props?.styles?.color || 'inherit'};
  
  @media (max-width: 1245px) {
    width: 20px;
    height: 20px;
    font-size: 14px;

    img {
      width: 8px;
      height: 8px;
    }
  }
`;

const ProgressBarItem = styled.li`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 20px;
  color: #fff;
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
  text-transform: capitalize;

  @media (max-width: 1245px) {
    font-size: 12px;
    row-gap: 8px;
    justify-content: center;

    span .step {
      display: none;
    }
  }
`;

const ProgressText = styled.span`
  color: #000;
  font-weight: ${props => (props.isdoing === 'doing' ? 700 : 400)};
`;
