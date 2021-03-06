import React from 'react';
import {
  FooterLogoContentP,
  FooterLogoContentStyled,
  FooterLogoContentSvg,
} from './FooterLogoContent.styled';

const FooterLogoContent = (): JSX.Element => {
  return (
    <FooterLogoContentStyled>
      <FooterLogoContentSvg
        viewBox='0 0 123 81'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <rect width='123' height='81' fill='url(#pattern0)' />
        <defs>
          <pattern
            id='pattern0'
            patternContentUnits='objectBoundingBox'
            width='1'
            height='1'
          >
            <use
              xlinkHref='#image0_2_5'
              transform='translate(-0.000938086) scale(0.00281426 0.0042735)'
            />
          </pattern>
          <image
            id='image0_2_5'
            width='356'
            height='234'
            xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWQAAADqCAYAAACV1j88AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkY3ODU1ODI2NkM1MTFFQUI0QzJGRjczQjY1MzM2MUQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkY3ODU1ODE2NkM1MTFFQUI0QzJGRjczQjY1MzM2MUQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTAwQTI4QzU2NkM0MTFFQThBNEFGQjY5RTAxRUM5QTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTAwQTI4QzY2NkM0MTFFQThBNEFGQjY5RTAxRUM5QTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7fbQwBAAATH0lEQVR42uyd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'
          />
        </defs>
      </FooterLogoContentSvg>
      <FooterLogoContentP>
        MatMeble?? Wszelkie prawa zastrze??one
      </FooterLogoContentP>
    </FooterLogoContentStyled>
  );
};

export default FooterLogoContent;
