import '@testing-library/jest-dom'
import { formatPodcastDate, getMostRecentPodcast } from "../lib/helpers";

describe('Podcast', () => {
  describe('formatPodcastDate formatting', () => {
    it('formats 2022-04-11 to equal April 11, 2022', () => {
      expect(formatPodcastDate("2022-04-11")).toBe("April 11, 2022")
    })
    it('formats 2022-11-04 to equal November 04, 2022', () => {
      expect(formatPodcastDate("2022-11-04")).toBe("November 04, 2022")
    })
    it('formats 2022-11-11 to equal November 11, 2022', () => {
      expect(formatPodcastDate("2022-11-11")).toBe("November 11, 2022")
    })
  })

  describe('getMostRecentPodcast', () => {
    it('gets the most recent podcast', () => {
      const podcasts = [
        { id: 1, date: "2020-10-10" },
        { id: 2, date: "2022-10-10" },
        { id: 3, date: "2022-02-09" },
        { id: 4, date: "2022-11-11" },
      ]
      expect(getMostRecentPodcast(podcasts)).toEqual({ id: 4, date: "2022-11-11" })
    })

    it('returns null if no podcasts are passed', () => {
      expect(getMostRecentPodcast()).toBeNull()
    })
  })
})