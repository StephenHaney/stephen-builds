import createCss from '@stitches/react';

export const { styled, css, theme } = createCss({
  theme: {
    fonts: {
      sans:
        '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '32px',
      8: '40px',
      9: '48px',
      10: '64px',
    },
  },
});
