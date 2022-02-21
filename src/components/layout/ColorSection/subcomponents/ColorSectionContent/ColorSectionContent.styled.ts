import styled from 'styled-components';
import backImg from '../../../../../assets/colors_back.jpeg';

export const ColorSectionContentStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 4em;
  margin-bottom: 3em;
`;

export const ColorSectionText = styled.div<{ pos: string }>`
  width: 25%;
  height: min-content;
  font-weight: lighter;
  align-self: ${(props) => (props.pos === 'left' ? 'flex-end' : 'flex-start')};
  background-color: var(--lightGreyColor);
  border: 1px solid var(--lightGreyColor);
  border-radius: 50px;
  padding: 2em;
  text-align: center;
`;

export const TextBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  padding-left: 20vw;
`;

export const ColorSectionImg = styled.div`
  background: url(${backImg}) center center/contain no-repeat fixed;
  width: 50%;
  height: 70vh;
  z-index: -1;
  margin-bottom: -6em;
`;
