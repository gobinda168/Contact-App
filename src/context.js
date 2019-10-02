import React, { Component } from "react";
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(c => c.id !== action.payload)
      };
    case "ADD":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };

    default:
      return state;
  }
};

export default class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Gobinda Das",
        email: "gobinda168@gmail.com",
        phone: "9957507223"
      },
      {
        id: 2,
        name: "Bhaskar Das",
        email: "bhaskar090@gmail.com",
        phone: "9957507223"
      },
      {
        id: 3,
        name: "Gourango Das",
        email: "gouranga@gmail.com",
        phone: "9957507223"
      },
      {
        id: 4,
        name: "Milan Das",
        email: "milan@gmail.com",
        phone: "9957507223"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
