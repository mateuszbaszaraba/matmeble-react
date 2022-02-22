import React from 'react';
import { ProdInfoSectionStyled, ProdInfo } from './ProdInfoSection.styled';
import ContentHeader from '../shared/ContentHeader/ContentHeader';

const ProdInfoSection = (): JSX.Element => {
  return (
    <ProdInfoSectionStyled>
      <ContentHeader lightHeader='Nasze' boldHeader='Produkty' />
      <ProdInfo>
        Nasza firma oferuje szeroki wachlarz produktów. Począwszy od kanapy, po
        fetele, aż do narożnika. Nasi klienci mają możliwość wyboru tkaniny oraz
        jej koloru. Oprócz tego, nasze produkty można zamawiać w ustalonym
        wymiarze. Każdy mebel w naszej kolekcji ma możliwość spania oraz
        pojemnik. Oferujemy także dostawę do naszych klientów.
      </ProdInfo>
    </ProdInfoSectionStyled>
  );
};

export default ProdInfoSection;
