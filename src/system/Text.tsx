import { styled } from './stitches.config';

export const Text = styled('div', {
  fontSize: 16,
  color: 'hsl(190, 100%, 99%)',
  fontFamily: '$sans',

  variants: {
    size: {
      1: { fontSize: 16 },
      2: { fontSize: 20 },
    },
  },
});
