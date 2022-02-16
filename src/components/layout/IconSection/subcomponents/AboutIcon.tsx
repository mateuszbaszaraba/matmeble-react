import React from 'react';
import { AboutIconProps } from './AboutIcon.model';
import {
  AboutIconStyled,
  AboutIconInfo,
  AboutIconTitle,
  AboutIconDesc,
  AboutIconIcon,
} from './AboutIcon.styled';

const AboutIcon = ({ icon, title, desc }: AboutIconProps): JSX.Element => {
  return (
    <AboutIconStyled>
      <AboutIconIcon>{icon()}</AboutIconIcon>
      <AboutIconInfo>
        <AboutIconTitle>{title}</AboutIconTitle>
        <AboutIconDesc>{desc}</AboutIconDesc>
      </AboutIconInfo>
    </AboutIconStyled>
  );
};

export default AboutIcon;
