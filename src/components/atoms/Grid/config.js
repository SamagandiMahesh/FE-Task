import { css } from 'styled-components';


const GRID_CONFIG = {
    maxSize: 1248,
    gutters: {
      desktop: 24,
      tablet: 24,
      mobile: 24,
    },
    totalLgCols: 12,
    totalMdCols: 8,
    totalSmCols: 4,
    offsets: {
      desktop: 12,
      tablet: 12,
      mobile: 12,
    },
    scrnSizes: {
      tablet: 650,
      desktop: 1024,
      large_desktop: 1440,
      mobile_only: 649,
      xs_only: [
        0,
        321,
      ],
      below_iphone6: [
        0,
        374,
      ],
      tablet_only: [
        650,
        1023,
      ],
    },
  };

const MEDIA = Object.keys(GRID_CONFIG.scrnSizes).reduce((acc, label) => {
    acc[label] = (...args) => {
      if (label === 'mobile_only') {
        return css`
          @media (max-width: ${GRID_CONFIG.scrnSizes[label]}px) {
            ${css(...args)}
          }
        `;
      }
      if (label === 'large_desktop') {
        return css`
          @media (min-width: ${GRID_CONFIG.scrnSizes[label]}px) {
            ${css(...args)}
          }
        `;
      }
      if (Array.isArray(GRID_CONFIG.scrnSizes[label])) {
        return css`
          @media (min-width: ${GRID_CONFIG.scrnSizes[label][0]}px) and (max-width: ${GRID_CONFIG.scrnSizes[label][1]}px) {
            ${css(...args)}
          }
        `;
      }
      return css`
        @media (min-width: ${GRID_CONFIG.scrnSizes[label]}px) {
          ${css(...args)}
        }
      `;
    };
    return acc;
  }, {});

const pxToRem = px => `${px / 16}rem`;

export {
    GRID_CONFIG,
    MEDIA,
    pxToRem,
};