import { urlWithOptions } from "./utils";

describe("urlWithOptions", () => {
  let baseUrl = "/test/url";

  it("returns base url when second argument falsey", () => {
    expect(urlWithOptions(baseUrl)).toBe(baseUrl);
  });

  it("returns base url with options joined by `/` character", () => {
    const query = "?search=mp3";
    expect(urlWithOptions(baseUrl, query)).toBe("/test/url/search/mp3");
  });
});
