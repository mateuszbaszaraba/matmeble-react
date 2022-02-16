import React from 'react';
import { IconSectionStyled, IconSectionBackground } from './IconSection.styled';
import { IconsContent } from './subcomponents/AboutIcon.model';
import AboutIcon from './subcomponents/AboutIcon';

const IconSection = (): JSX.Element => {
  return (
    <IconSectionStyled>
      <IconSectionBackground />
      {IconsContent.map((icon) => (
        <AboutIcon
          icon={icon.icon}
          title={icon.title}
          desc={icon.desc}
          key={icon.title}
        />
      ))}
    </IconSectionStyled>
  );
};

export default IconSection;
