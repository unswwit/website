import '@testing-library/jest-dom'
import { formatPublicationsDate, getRecentPublications } from "../lib/helpers";

describe('Publications', () => {
    describe('formatPublicationsDate formatting', () => {
      it('formats 2022-04-11 to equal April 11, 2022', () => {
        expect(formatPublicationsDate("2022-04-11")).toBe("11/04/2022")
      })
      it('formats 2022-11-04 to equal November 04, 2022', () => {
        expect(formatPublicationsDate("2022-11-04")).toBe("04/11/2022")
      })
      it('formats 2022-11-11 to equal November 11, 2022', () => {
        expect(formatPublicationsDate("2022-11-11")).toBe("11/11/2022")
      })
    })
  
    describe('getRecentPublications', () => {
      const publications = [
        {
          "id": 1,
          "title": "test publication 1",
          "date": "2003-11-11",
        },
        {
          "id": 2,
          "title": "test publication 2",
          "date": "2000-11-11",
        },
        {
          "id": 3,
          "title": "test publication 3",
          "date": "2021-10-03",
        },
        {
          "id": 4,
          "title": "test publication 4",
          "date": "2022-10-03",
        },
      ]
  
      it('returns the 3 most recent publications by date', () => {
        const expected = [publications[3], publications[2], publications[0]]
        expect(getRecentPublications(publications)).toEqual(expected)
      })

      it('returns an empty array if publications dont exist', () => {
        expect(getRecentPublications()).toEqual([])
      })
    })
})