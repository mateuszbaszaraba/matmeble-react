import React from 'react';
import { InfoContentStyled } from './InfoContent.styled';
import { LeftInfoBlock, RightInfoBlock } from '../ProductDetailsInfo.styled';
import { Armchair, SoftFurniture } from '../../../../services/types';

const InfoContent = ({
  product,
}: {
  product: SoftFurniture | Armchair | any;
}): JSX.Element => {
  if (product.type === 'narożnik' || 'kanapa' || 'wersalka' || 'łóżko') {
    return (
      <InfoContentStyled>
        <LeftInfoBlock>
          <p>
            Nazwa:
            <span>
              {product.title.charAt(0).toUpperCase() + product.title.slice(1)}
            </span>
          </p>
          <p>
            Wysokość:<span>{product.height}</span>
          </p>
          <p>
            Szerokość:<span>{product.width}</span>
          </p>
          <p>
            Głębokość:<span>{product.depth}</span>
          </p>
          <p>
            Głębokość siedziska:<span>{product.seat_depth}</span>
          </p>
        </LeftInfoBlock>
        <RightInfoBlock>
          <p>
            Zagłówki:<span>{product.headrest}</span>
          </p>
          <p>
            Boki:<span>{product.arm}</span>
          </p>
          <p>
            Funkcja spania:<span>{product.sleep_func && 'Tak'}</span>
          </p>
          <p>
            Powierzchnia spania:<span>{product.sleep_dim}</span>
          </p>
          <p>
            Pojemniki:<span>{product.container}</span>
          </p>
        </RightInfoBlock>
      </InfoContentStyled>
    );
  } else if (product.type === 'fotel' || 'pufa') {
    return (
      <InfoContentStyled>
        <LeftInfoBlock>
          <p>
            Nazwa:
            <span>
              {product.title.charAt(0).toUpperCase() + product.title.slice(1)}
            </span>
          </p>
          <p>Wysokość:</p>
          <p>Szerokość:</p>
          <p>Głębokość:</p>
          <p>Głębokość siedziska:</p>
        </LeftInfoBlock>
        <RightInfoBlock>
          <p>Zagłówki:</p>
          <p>Boki:</p>
          <p>Funkcja spania:</p>
          <p>Powierzchnia spania:</p>
          <p>Pojemniki:</p>
        </RightInfoBlock>
      </InfoContentStyled>
    );
  } else {
    return <></>;
  }
};

export default InfoContent;
