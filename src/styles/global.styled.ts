import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
  body {
    font-family: 'Lato', sans-serif;
    margin: var(--globalMargin);
    color: var(--blackFontColor);
  }
  
  :root {
    --globalMargin: 1.5em;
    --minusGlobalMargin: -1.5em;
    
    --globalMarginTablet: 1.5em 5em;
    
    --tabletSize: 680px;
    --desktopSize: 920px;
    --fixedSize: 1200px;
    
    --whiteColor: #FFF;
    --blackFontColor: #5E5E5E;
    --goldColor: #E4C68B;
    --blackColor: #292929;

    --lightBrownColor: #332E27;
    --greyColor: #595959;
    --lightGreyColor: #EDEDED;

    @media only screen and (min-width: 680px) {
      --globalMargin: var(--globalMarginTablet);
      --minusGlobalMargin: calc(-1 * var(--globalMarginTablet));
    }
    
  }
  
  `;

export default GlobalStyles;
