import React from "react";
import workItem from "../src/Components/workItem";
import renderer from "react-test-renderer";

test("work item  snapshot", () => {
  const snap = renderer.create(<workItem />).toJSON();

  expect(snap).toMatchSnapshot();
});

it("render correctly", () => {
  const snap = renderer.create(<workItem />);
});
