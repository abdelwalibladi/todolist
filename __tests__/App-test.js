import React from "react";
import App from "../App";
import renderer from "react-test-renderer";

test("App snapshot", () => {
  const snap = renderer.create(<App />).toJSON();

  expect(snap).toMatchSnapshot();
});
