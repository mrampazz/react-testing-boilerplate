import React from "react";
import App from "./App";
import Input from "./Input";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";

// ============= UTILS =============
configure({ adapter: new Adapter() });

let array = [
  { text: "todo1" },
  { text: "todo2" },
  { text: "todo3" },
  { text: "todo4" }
];

// ============= TESTS =============
describe("<App /> component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  })

  // ============= COMPONENT MUST RENDER CORRECTLY =============
  test("renders the todos", () => {
    component.setState({
      todos: array
    });

    const listItems = component.find("li");
    expect(listItems).toHaveLength(4);
  });

  test("renders Input child component", () => {
    expect(component.containsMatchingElement(<Input />)).toEqual(true);
  });

  // ============= TEST THE EVENTS =============
  test("todo should be deleted when clicked", () => {
    component.setState({
      todos: array
    });
    component.find('li[children="todo1"]').simulate('click');
    expect(component.find('li[children="todo1"]').exists()).toBeFalsy();
  });
});
