import { styled } from '../../stitches.config';

export const Container = styled('header', {
  flex: '1',
  background: '$blue9',
});

export const Content = styled('div', {
  maxWidth: '1120px',
  margin: '0 auto',

  padding: '2rem 1rem 12rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  button: {
    fontSize: '$1',
    color: '$blue1',
    backgroundColor: '$blue11',
    border: '0',
    padding: '0 2rem',
    borderRadius: '0.25rem',
    height: '3rem',

    '&:hover': {
      backgroundColor: '$blue10',
    },
    '&:active': {
      backgroundColor: '$blue8',
    },
  },
});
