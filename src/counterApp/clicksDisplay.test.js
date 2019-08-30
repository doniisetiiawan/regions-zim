import React from "react";
import TestRenderer from "react-test-renderer";

import { ClicksDisplay } from "./";

describe("clicksDisplay", () => {
  it("renders correctly", () => {
    const tree = TestRenderer
      .create(<ClicksDisplay clicks={22} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
