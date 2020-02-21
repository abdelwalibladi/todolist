import React from "react";
import AddWorkItem from "../src/Components/AddWorkItem";
import renderer from "react-test-renderer";

test("addwork item snapshot", () => {
  const snap = renderer.create(<AddWorkItem />).toJSON();

  expect(snap).toMatchSnapshot();
});

it("render correctly", () => {
  const snap = renderer.create(<AddWorkItem />);
});
