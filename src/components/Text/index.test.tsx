import { cleanup, render } from "@testing-library/react";
import { Text } from ".";

afterEach(cleanup);

describe(Text, () => {
  it("renders correct text", () => {
    const value = "value";
    const { getByTestId } = render(<Text value={value} />);
    const rendered = getByTestId("text").textContent;
    expect(rendered).toBe(value);
  });
});
