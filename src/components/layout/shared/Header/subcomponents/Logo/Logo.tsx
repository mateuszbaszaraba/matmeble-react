import React from 'react';
import { LogoStyled } from './Logo.styled';

const Logo = (): JSX.Element => (
  <LogoStyled
    viewBox='0 0 73 34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3.8147e-05 33.9533C5.38141 33.9533 10.9676 31.2194 15.6032 28.869C17.2747 28.0215 19.5585 27.0755 20.8365 25.761H20.9316C22.6377 27.776 25.9075 29.065 28.448 29.9121C34.1277 31.8058 40.5727 31.5729 46.1447 29.4829C48.3958 28.6386 50.8355 27.4013 52.5194 25.761C53.8821 26.9452 55.7384 27.8181 57.3718 28.656C60.5125 30.2672 63.7664 31.7107 67.1715 32.7955C68.3925 33.1846 69.6291 33.5992 70.8821 33.8914C71.226 33.9716 72.0452 34.0827 72.347 33.8638C72.6136 33.6704 72.526 33.005 72.4792 32.7332C72.3719 32.1099 71.715 31.6581 71.2556 31.2368C70.3885 30.4417 69.5827 29.5545 68.7617 28.7164C66.2501 26.152 63.7685 23.4932 61.557 20.7062C60.8198 19.7772 59.51 18.6634 59.1135 17.5687C58.9785 17.1958 59.4115 16.7564 59.5787 16.4357C60.0591 15.5143 60.5827 14.6052 60.9725 13.6469C61.2884 12.8705 61.6314 12.091 61.8786 11.2937C62.9802 7.74264 63.2829 1.89123 58.6086 0.315577C53.7812 -1.31163 50.7387 3.69874 51.1996 7.45905C51.4953 9.87203 52.7612 12.2495 54.0468 14.3441C54.5714 15.1989 55.8706 16.5159 55.9917 17.4815C56.0367 17.84 55.6356 18.2377 55.4474 18.5287C54.8593 19.4377 54.1417 20.2853 53.4885 21.1568C50.1128 25.6603 44.9149 28.3653 39.0089 28.9706C31.8953 29.6996 24.6065 27.0417 20.3256 21.752C19.5518 20.796 18.8397 19.7871 18.1321 18.7889C17.8943 18.4531 17.4015 17.9826 17.3753 17.5687C17.3501 17.1725 17.8118 16.6932 18.0302 16.3735C18.6593 15.453 19.231 14.5071 19.8103 13.5597C21.459 10.863 22.929 7.31385 21.9132 4.23441C20.7251 0.632338 16.1099 -1.47378 12.8468 1.45333C11.8476 2.34968 11.2787 3.61035 10.9849 4.84447C10.285 7.78456 11.2831 11.0194 12.4415 13.734C12.822 14.6258 13.2739 15.4961 13.7565 16.3452C13.9353 16.6599 14.341 17.11 14.287 17.4816C14.197 18.1003 13.2679 18.9029 12.8696 19.3989C10.0655 22.8915 7.05613 26.229 3.87138 29.4366C2.71177 30.6045 0.254624 32.3122 0 33.9534L3.8147e-05 33.9533ZM16.2696 2.25483C17.8696 2.08595 18.9433 3.27103 19.5022 4.49584C20.6402 6.98918 19.1384 10.143 17.8126 12.3395C17.3927 13.0351 17.0308 13.7609 16.5627 14.4312C16.4267 14.6258 16.2568 15.0545 15.9684 15.0878C15.6006 15.1303 15.4196 14.5771 15.3072 14.3441C14.9041 13.5087 14.5326 12.6686 14.1753 11.8166C13.2935 9.71408 12.793 7.23869 13.3837 5.01875C13.7478 3.65054 14.6415 2.42667 16.2696 2.25483V2.25483ZM57.1814 15.1284C56.584 13.3997 55.1479 11.893 54.4627 10.1607C54.0371 9.08484 53.5093 7.91761 53.4723 6.7618C53.4348 5.58905 53.7207 4.29622 54.5497 3.36285C55.762 1.99801 57.8803 1.81548 59.1291 3.27605C61.1158 5.59928 60.2077 9.3987 59.1829 11.9038C58.8573 12.6999 58.2173 15.0547 57.1815 15.1285L57.1814 15.1284ZM6.37471 30.3801C6.87148 29.0411 8.75949 27.6058 9.78371 26.5455C11.8614 24.3947 13.8391 22.0337 15.6037 19.6604C16.095 19.798 16.3071 20.233 16.5887 20.602C17.2118 21.4186 17.8462 22.2313 18.4508 23.0593C18.6725 23.3629 19.3351 23.9314 19.0444 24.3205C18.4369 25.1334 16.7134 25.7513 15.7977 26.2534C12.9538 27.8132 9.63614 29.687 6.37471 30.3801V30.3801ZM67.0764 30.3801C65.8775 30.2178 64.6474 29.5765 63.5561 29.112C61.5349 28.2519 59.559 27.3606 57.6487 26.3025C56.6364 25.7418 55.1794 25.1881 54.3846 24.3753C54.0319 24.0146 54.5703 23.5286 54.793 23.2335C55.4506 22.3624 56.1568 21.5172 56.7811 20.6256C56.9528 20.3805 57.2268 19.7957 57.5708 19.7394C57.902 19.6851 58.1765 20.1563 58.3232 20.3586C58.8219 21.0458 59.4251 21.6668 59.9359 22.3473C61.4064 24.3064 63.1919 26.1333 64.8771 27.9398C65.6082 28.7235 66.5367 29.4712 67.0764 30.3801V30.3801Z'
      fill='white'
    />
  </LogoStyled>
);

export default Logo;
