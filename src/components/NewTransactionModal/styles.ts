import { styled } from '../../stitches.config';

import { Cross1Icon } from '@radix-ui/react-icons';

export const Container = styled('form', {});

export const H2 = styled('h2', {
  color: '$title',
  fontSize: '$24',
  marginBottom: '$32',
});

export const Input = styled('input', {
  width: '100%',
  padding: '0 $24',
  height: '$64',
  borderRadius: '$1',

  backgroundColor: '#e7e9ee',
  border: '1px solid #d7d7d7',
  fontWeight: '400',
  fontSize: '$16',

  mb: '$24',
  '& + input': {
    mb: '$24',
  },

  '&::placeholder': {
    color: '$body',
  },

  '&:focus': {
    outlineColor: '$green7',
  },
});

export const ButtonTransaction = styled('button', {
  width: '100%',
  padding: '0 $24',
  height: '$64',
  borderRadius: '$1',
  border: '0',
  fontSize: '$16',
  backgroundColor: '$green11',
  color: '$green1',

  transition: 'background .2s',

  '&:hover': {
    backgroundColor: '$green10',
  },
  '&:active': {
    backgroundColor: '$green8',
  },
});

export const ButtonClose = styled('button', {
  position: 'absolute',
  right: '$24',
  top: '$24',
  border: '0',
  backgroundColor: 'transparent',
});

export const ImgClose = styled(Cross1Icon, {
  transition: 'background .2s',

  '&:hover': {
    color: '$red9',
  },
});

export const TypeContainer = styled('div', {
  mb: '$24',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '$8',
});

export const TypeContainerButton = styled('button', {
  height: '$64',
  border: '1px solid #d7d7d7',
  borderRadius: '$1',
  backgroundColor: 'transparent',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  // '&:hover': {
  //   borderColor: '$green10',
  // },
  variants: {
    border: {
      income: {
        '&:hover': {
          borderColor: '$green10',
        },
      },
      outcome: {
        '&:hover': {
          borderColor: '$red9',
        },
      },
    },
  },
});

export const TypeContainerImg = styled('img', {
  width: '$24',
  height: '$24',
});

export const TypeContainerSpan = styled('span', {
  display: 'inline-block',
  ml: '$16',
  fontSize: '$16',
  color: '$title',
});
