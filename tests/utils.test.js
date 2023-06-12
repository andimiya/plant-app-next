import { formatDate } from "../utils/utils";

describe("utils", () => {
  test("formatDate", () => {
    const result = formatDate("2023-06-07T04:23:47.042Z");
    expect(result).toBe("June 6th 2023, 9:23 pm");
  });

  test("formatDate short", () => {
    const result = formatDate("2023-06-07T04:23:47.042Z", true);
    expect(result).toBe("Jun 6th, 9pm");
  });
});
