import '@testing-library/jest-dom';
import { formatMarketingArchivesDate } from '../lib/helpers/date';

describe('Marketing', () => {
  describe('formatMarketingArchivesDate formatting', () => {
    it('formats 2022-04-11 to equal April 11, 2022', () => {
      expect(formatMarketingArchivesDate('2022-04-11')).toBe('11/04/2022');
    });
    it('formats 2022-11-04 to equal November 04, 2022', () => {
      expect(formatMarketingArchivesDate('2022-11-04')).toBe('04/11/2022');
    });
    it('formats 2022-11-11 to equal November 11, 2022', () => {
      expect(formatMarketingArchivesDate('2022-11-11')).toBe('11/11/2022');
    });
  });
});
