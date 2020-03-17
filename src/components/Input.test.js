import React from "react";
import Input from "./Input";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

// ============= UTILS =============
configure({ adapter: new Adapter() });

// ============= TESTS =============
describe("<Input /> component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Input />);
  })

  // ============= COMPONENT MUST RENDER CORRECTLY =============
  test("renders the button 'Add todo' ", () => {
    expect(component.find('button[children="Add todo"]').exists()).toBeTruthy();
    expect(component.find('button[children="Add todo"]').length).toEqual(1);
  });

  test("renders the button 'Clear todos' ", () => {
    expect(component.find('button[children="Clear todos"]').exists()).toBeTruthy();
    expect(component.find('button[children="Clear todos"]').length).toEqual(1);
  });

  test("renders the input element ", () => {
    expect(component.find('input').exists()).toBeTruthy();
    expect(component.find('input').length).toEqual(1);
  });

  // ============= TEST THE EVENTS =============
  test("function addTodo should be called with the right argument", () => {
    let func = jest.fn();
    const wrapper = shallow(<Input addTodo={func} />);
    wrapper.setState({ currentText: "test" });
    wrapper.find('button[children="Add todo"]').simulate("click");
    expect(func).toHaveBeenCalledWith(wrapper.state("currentText"));
  });

  test("function clearTodos should be called", () => {
    let func = jest.fn();
    const wrapper = shallow(<Input clearTodos={func} />);
    wrapper.find('button[children="Clear todos"]').simulate("click");
    expect(func).toHaveBeenCalled();
  });

  test("onChange function should be called with the right value and change the state", () => {
    const event = {
      target: {
        value: 'test'
      }
    }
    const component = shallow(<Input />);
    component.find('input').simulate('change', event);
    expect(component.state('currentText')).toBe('test');
  });
});
