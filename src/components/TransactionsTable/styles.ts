import { styled } from '../../stitches.config';

export const Container = styled('div', {
  marginTop: '$64',

  table: {
    width: '100%',
    borderSpacing: `0 0.5rem`,

    th: {
      color: '$body',
      fontWeight: '400',
      padding: '$16 $32',
      // padding: '1rem 2rem',
      textAlign: 'left',
      lineHeight: '$24',
    },
  },
});

export const Td = styled('td', {
  color: '$body',
  padding: '$16 $32',
  border: '0',
  backgroundColor: '$shape',
  borderRadius: '0.5rem',

  '&:first-child': {
    color: '$title',
  },

  variants: {
    test: {
      true: {
        color: '$green9',
      },
      false: {
        color: '$red9',
      },
    },
  },
});
