import '@testing-library/jest-dom'
import { formatPodcastDate } from "../lib/helpers";

describe('Podcast', () => {
  it('podcast date formatting', () => {
    expect(formatPodcastDate("2022-04-11")).toBe("April 11, 2022")
    expect(formatPodcastDate("2022-11-04")).toBe("November 04, 2022")
    expect(formatPodcastDate("2022-11-11")).toBe("November 11, 2022")
  })
})