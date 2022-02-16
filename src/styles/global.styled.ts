import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
  body {
    font-family: 'Lato', sans-serif;
    margin: 1.5em
  }
  
  :root {
    --whiteColor: #FFF;
    --blackFontColor: #5E5E5E;
    --goldColor: #E4C68B;
    --blackColor: #292929;

    --lightBrownColor: #332E27;
    --greyColor: #595959;
    --lightGreyColor: #EDEDED;
  }
  
  `;

export default GlobalStyles;
