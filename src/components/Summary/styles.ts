import { styled } from '../../stitches.config';

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2rem',
  marginTop: '-10rem',

  div: {
    backgroundColor: '$blue2',
    padding: '1.5rem 2rem',
    borderRadius: '0.25rem',
    color: '$title',

    '&.highlight-background': {
      backgroundColor: '$green9',
      color: '$green1',
    },
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  strong: {
    display: 'block',
    marginTop: '1rem',
    fontWeight: '500',
    fontSize: '$2',
    lineHeight: '3rem',
  },
});
