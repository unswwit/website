import { style } from '@vanilla-extract/css';

export const button = style({
  backgroundColor: '#e85f5c',
  fontWeight: 'bold',
  color: 'white',
  padding: '0.75rem',
  borderRadius: '0.5rem',
  border: 'none',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#c15250'
  }
});
