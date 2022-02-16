import React from 'react';
import { AboutSectionStyled, AboutSectionText } from './AboutSection.styled';

const AboutSection = () => {
  return (
    <AboutSectionStyled>
      <AboutSectionText>
        Jesteśmy firmą działającą już od ponad prawie 17 lat. Przez ten okres
        opracowaliśmy najnowsze i najlepsze technologie w tworzeniu naszych
        produktów. Dzięki temu, mamy pewność, iż nawet najbardziej wymagający
        klienci bedą zadowoleni. Przy wykonywaniu naszych produktów, używamy
        najwyższej jakości materiałów, sprężyn itd. Każdy klient jest inny, oraz
        potrzebuje czegoś innego. Nasza firma zapewnia indywidualne podejście do
        każdego konsumenta.
      </AboutSectionText>
    </AboutSectionStyled>
  );
};

export default AboutSection;
