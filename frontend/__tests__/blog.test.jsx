import "@testing-library/jest-dom";
import { formatBlogRecDate } from "../lib/helpers";

describe("Blog", () => {
  describe("Blog Recommendations Date formatting", () => {
    it("formats 2022-04-11 to equal April 11, 2022", () => {
      expect(formatBlogRecDate("2022-04-11")).toBe("April 11, 2022");
    });
    it("formats 2022-11-04 to equal November 04, 2022", () => {
      expect(formatBlogRecDate("2022-11-04")).toBe("November 04, 2022");
    });
    it("formats 2022-11-11 to equal November 11, 2022", () => {
      expect(formatBlogRecDate("2022-11-11")).toBe("November 11, 2022");
    });
  });
});
