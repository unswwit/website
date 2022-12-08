import '@testing-library/jest-dom';
import { formatDate } from '../lib/helpers/date';

describe('Videos', () => {
  describe('formatDate formatting', () => {
    it('formats 2022-02-09 to equal February 9, 2022', () => {
      expect(formatDate('2022-02-09')).toBe('February 09, 2022');
    });
    it('formats 2022-09-10 to equal September 10, 2022', () => {
      expect(formatDate('2022-09-10')).toBe('September 10, 2022');
    });
    it('formats 2000-01-01 to equal January 1, 2000', () => {
      expect(formatDate('2000-01-01')).toBe('January 01, 2000');
    });
  });
});
