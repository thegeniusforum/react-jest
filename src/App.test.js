import { shallow, mount } from "enzyme";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import Account from "./Account";
import toJson from "enzyme-to-json";

it("Renders App without crashing", () => {
  shallow(<App />);
});

it("Renders Account Header", () => {
  const wrapper = shallow(<App />);
  const message = <h1>Display Active Users Account Details</h1>;

  expect(wrapper.contains(message)).toEqual(true);
});

it.skip("Renders without crashing", () => {
  shallow(<App />);
});

const user = {
  name: "Adeneye David",
  email: "david@gmail.com",
  username: "Dave",
};

describe("Testing Props", () => {
  it("Accepts user props", () => {
    const wrapper = mount(<Account user={user} />);
    expect(wrapper.props().user).toEqual(user);
  });

  it("contains users account email", () => {
    const wrapper = mount(<Account user={user} />);
    const value = wrapper.find("p").text();
    expect(value).toEqual(user.email);
  });
});

it("Renders without errors", () => {
  const wrapper = mount(<App />);
  expect(wrapper.state("error")).toEqual(null);
});

it("Snapshot of tree renders correctly", () => {
  const tree = shallow(<App />);
  expect(toJson(tree)).toMatchSnapshot();
});
