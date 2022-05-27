import {
  blue,
  red,
  green,
  yellow,
  blueDark,
  redDark,
  greenDark,
  slate,
  slateDark,
  blackA,
} from '@radix-ui/colors';
// Spread the scales in your light and dark themes

import { createStitches } from '@stitches/react';

export const { styled, createTheme, css, globalCss, getCssText } =
  createStitches({
    theme: {
      colors: {
        ...blue,
        ...red,
        ...green,
        ...yellow,
        ...slate,
        ...blackA,

        title: '$slate11',
        body: '$slate8',

        background: '#f0f2f5',
        shape: '$slate1',

        success1: '$green1',
        success2: '$green2',

        warning1: '$yellow1',
        warning2: '$yellow2',

        danger1: '$red1',
        danger2: '$red2',
      },
      space: {
        '0': `0px`,
        '1': `1px`,
        '4': `0.25rem`,
        '8': `0.5rem`,
        '12': `0.75rem`,
        '16': `1rem`,
        '24': `1.5rem`,
        '32': `2rem`,
        '48': `3rem`,
        '64': `4rem`,
      },
      fontSizes: {
        1: '1rem',
        2: '2rem',
        3: '3rem',
      },
      fonts: {
        untitled: 'Untitled Sans, apple-system, sans-serif',
        mono: 'Söhne Mono, menlo, monospace',
      },
      fontWeights: {},
      lineHeights: {},
      letterSpacings: {},
      sizes: {},
      borderWidths: {},
      borderStyles: {},
      radii: {},
      shadows: {},
      zIndices: {},
      transitions: {},
    },
    utils: {
      // Abbreviated margin properties
      m: (value: any) => ({
        margin: value,
      }),
      mt: (value: any) => ({
        marginTop: value,
      }),
      mr: (value: any) => ({
        marginRight: value,
      }),
      mb: (value: any) => ({
        marginBottom: value,
      }),
      ml: (value: any) => ({
        marginLeft: value,
      }),
      mx: (value: any) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: any) => ({
        marginTop: value,
        marginBottom: value,
      }),

      // A property for applying width/height together
      size: (value: any) => ({
        width: value,
        height: value,
      }),

      // A property to apply linear gradient
      linearGradient: (value: any) => ({
        backgroundImage: `linear-gradient(${value})`,
      }),

      // An abbreviated property for border-radius
      br: (value: any) => ({
        borderRadius: value,
      }),
    },
  });

export const darkTheme = createTheme({
  colors: {
    ...blueDark,
    ...redDark,
    ...greenDark,
  },
});

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    background: '#f0f2f5',
  },
  html: {
    '@media (max-width: 1080px)': {
      fontSize: '93.75%',
    },
    '@media (max-width: 720px)': {
      fontSize: '87.5%',
    },
  },
  button: {
    cursor: 'pointer',
  },
  '[disabled]': {
    opacity: 0,
    cursor: 'not-allowed',
  },
  'body, input, textArea, button': {
    fontFamily: '"Poppins", sans-serif',
    fontSize: '400',
  },
  'h1, h2, h3, h4, h5, h6, strong': {
    fontWeight: '600',
  },
});
