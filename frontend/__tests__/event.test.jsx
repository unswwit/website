import '@testing-library/jest-dom'
import { getMostRecentEvent } from "../lib/helpers";

describe('Event', () => {
    describe('getMostRecentEvent', () => {
        const events = [
            {
                "id": 1,
                "title": "test event 1",
                "date": "2022-02-09",
            },
            {
                "id": 2,
                "title": "test event 2",
                "date": "2003-11-11",
            },
            {
                "id": 3,
                "title": "test event 3",
                "date": "2021-10-03",
            },
        ]

        it('returns most recent upcoming event', () => {
            expect(getMostRecentEvent(events)).toEqual(events[0])
        })

        it('returns null if no upcoming events are passed in', () => {
            expect(getMostRecentEvent([])).toEqual(null)
        })

    })
})