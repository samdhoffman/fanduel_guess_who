import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import App from '../App';
import { findByTestAttr } from '../../utils';

const setup = (props={}) => {
  const component = shallow(<App {...props} />);
  return component;
}

describe("App component", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it("should render without errors", () => {
    const wrapper = findByTestAttr(component, "App");
    expect(wrapper.length).toBe(1);
  });

  it("should render the PlayerGame component", () => {
    const wrapper = findByTestAttr(component, "PlayerGame");
    expect(wrapper.length).toBe(1);
  });
});